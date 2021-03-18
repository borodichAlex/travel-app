import React, { useEffect, useRef, useState } from "react";
import s from "./Gallery.module.scss";
import Next from "../../assets/Next.png";
import Previous from "../../assets/Previous.png";
import Fullscreen from "../../assets/Fullscreen.png";
import { useSelector } from "react-redux";
import { IPlaces, IState } from "../../interfaces";
import { useHistory, useParams } from "react-router";

interface IGallery {
  id: number;
}

const Gallery: React.FC<IGallery> = ({ id }) => {
  const [placeId, setPlaceId] = useState(0);
  const [btnsDisabled, setBtnsDisabled] = useState(false);
  const [fullscreen, setFullscreen] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const [localPlaces, setLocalPlaces] = useState<IPlaces[] | []>([]);

  const allPlaces = useSelector((state: IState) => state.places);
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keyup", handleEscape);
  }, []);

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
      if (placeId === localPlaces.length - 1) {
        setPlaceId(0);
      } else {
        setPlaceId(placeId + 1);
      }
    } else if (dir === "back") {
      if (placeId === 0) {
        setPlaceId(localPlaces.length - 1);
      } else {
        setPlaceId(placeId - 1);
      }
    } else if (typeof dir === "number") {
      setPlaceId(dir);
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
          src={localPlaces[placeId].imageUrl}
          alt={localPlaces[placeId].name}
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
          <h2>{localPlaces[placeId].name}</h2>
          {localPlaces[placeId].description}
        </article>
      </div>

      <div className={s.bottom_gallery}>
        <div style={{ display: "flex" }}>
          {localPlaces.map((item: IPlaces, index: number) => {
            if (index === placeId) {
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
