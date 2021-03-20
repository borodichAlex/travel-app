import React, { useEffect, useRef, useState } from "react";
import s from "./Gallery.module.scss";
import Next from "../../assets/Next.png";
import Previous from "../../assets/Previous.png";
import Fullscreen from "../../assets/Fullscreen.png";
import { useSelector } from "react-redux";
import { IPlaces, IState } from "../../interfaces";
import Rating from "@material-ui/lab/Rating";
import Star from '../../assets/Star.png'
import { useHistory } from "react-router";
import { BASE_URL } from "../../services/constants";

interface IGallery {
  id: number;
}

const Gallery: React.FC<IGallery> = ({ id }) => {
  const [placeIndex, setplaceIndex] = useState(0); //номер в массиве от 0 до 5
  const [placeId, setplaceId] = useState(0); // реальный id
  const [currValue, setCurrValue] = useState(0);
  const [btnsDisabled, setBtnsDisabled] = useState(false);
  const [fullscreen, setFullscreen] = useState("");
  const [value, setValue] = useState<number[] | []>([]);
  const imgRef = useRef<HTMLImageElement>(null);
  const [localPlaces, setLocalPlaces] = useState<IPlaces[] | []>([]);
  const history = useHistory();
  const [ratingData, setRatingData] = useState<any>([]);

  const getData = async () => {
    return await fetch(`${BASE_URL}/ratings/curr?placeId=${placeId}`, {
      method: 'GET',
      credentials: 'include'
    });
    
}

  useEffect(() => {
      getData().then(async data => {
        const rating = (await data.json()).rating
        setCurrValue(rating);
        console.log(rating);
      })
  }, [placeId])

  const allPlaces = useSelector((state: IState) => state.places);
  useEffect(() => {
    document.addEventListener("keyup", handleEscape);
  }, []);

  useEffect(() => {
    if(localPlaces.length) {
      setplaceId(localPlaces[placeIndex].id);
    }

    handleCurr()
    
  }, [placeIndex, localPlaces])

  const handleCurr = () => {
    setCurrValue(value[placeIndex] || 0)
  }

  useEffect(() => {
    if (allPlaces?.length) {
      let localPlacesI = allPlaces.filter((item) => item.countryId == id); //Заменить при сборке всего в кучу
      setLocalPlaces(localPlacesI);
    }
  }, [allPlaces]);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setFullscreen("");
    }
  };

  const handleSet = (dir: string | number) => {
    if (dir === "forward") {
      if (placeIndex === localPlaces.length - 1) {
        setplaceIndex(0);
      } else {
        setplaceIndex(placeIndex + 1);
      }
    } else if (dir === "back") {
      if (placeIndex === 0) {
        setplaceIndex(localPlaces.length - 1);
      } else {
        setplaceIndex(placeIndex - 1);
      }
    } else if (typeof dir === "number") {
      setplaceIndex(dir);
    }

    document.getElementById("selected")?.focus();

    let opacity = 10;

    let interval = setInterval(() => {
      if (opacity < 100) {
        opacity = opacity + 10;
      } else {
        clearInterval(interval);
        setBtnsDisabled(false);
      }

      if (imgRef.current) {
        imgRef.current.style.opacity = `${opacity / 100}`;
      }
    }, 50);
  };

  const handleChange = (dir: string | number) => {
    const image = document.getElementById("place_image")! as HTMLImageElement;

    let opacity = 100;
    let back = false;

    let interval = setInterval(() => {
      if (opacity > 10 && !back) {
        opacity = opacity - 10;
      } else {
        clearInterval(interval);
        handleSet(dir);
      }

      if (imgRef.current) {
        imgRef.current.style.opacity = `${opacity / 100}`;
      }
    }, 50);
  };

  if (!localPlaces.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${s.root} ${s[fullscreen]}`}>
      <div className={s.container}>
        <img
          src={localPlaces[placeIndex].imageUrl}
          alt={localPlaces[placeIndex].name}
          id="place_image"
          ref={imgRef}
        />

        <button
          onClick={() => {
            if (!btnsDisabled) {
              handleChange("forward");
              setBtnsDisabled(true);
            }
          }}
          className={s.next_button}
        >
          <img src={Next} alt="Next" />
        </button>

        <button
          onClick={() => {
            if (!btnsDisabled) {
              handleChange("back");
              setBtnsDisabled(true);
            }
          }}
          className={s.previous_button}
        >
          <img src={Previous} alt="Previous" />
        </button>

        <button
          className={s.fullscreen_button}
          onClick={() => {
            fullscreen === "" ? setFullscreen("full") : setFullscreen("");
          }}
        >
          <img src={Fullscreen} alt="" />
        </button>

        <article className={s.description}>
          <h2>{localPlaces[placeIndex].name}</h2>
          {localPlaces[placeIndex].description}
        </article>
        {
          JSON.parse(localStorage.getItem('authorized') || 'false')
          ? <Rating 
          value={currValue}
          onChange={(event, newValue) => {
            let arr = value;
            arr[placeIndex] = newValue || 0;
            setValue(arr);
            handleCurr()

            const data = new FormData();
            data.set('placeId', placeId.toString());
            data.set('rating', newValue!!.toString());
            
            fetch(`${BASE_URL}/ratings/add`, {
              method: 'POST',
              credentials: 'include',
              body: data
            })

            //placeId to api with newValue and UID
          }}
          className={s.rate}
          key={Math.random()}
          />
          : null

        }

        <button className={s.star} onClick={() => history.push(`/place/${placeId}`)}>
          <img src={Star} alt="to rate-page" />
        </button>
      </div>

      <div className={s.bottom_gallery}>
        <div style={{ display: "flex" }}>
          {localPlaces.map((item: IPlaces, index: number) => {
            if (index === placeIndex) {
              return (
                <div
                  className={`${s.small_container}
                                     ${s.selected}`}
                  key={`${item.id}btm`}
                  tabIndex={1}
                  id="selected"
                >
                  <img src={item.imageUrl} alt={item.name} />
                </div>
              );
            } else {
              return (
                <div
                  className={s.small_container}
                  key={`${item.id}btm`}
                  onClick={() => {
                    if (!btnsDisabled) {
                      handleChange(index);
                      setBtnsDisabled(true);
                    }
                  }}
                >
                  <img src={item.imageUrl} alt={item.name} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;