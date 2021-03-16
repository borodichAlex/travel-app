import React, { useEffect, useRef, useState } from 'react';
import s from './Gallery.module.scss'
import places from './template';             //после подключения к апи, этот файл уберём
import Next from '../../assets/Next.png'
import Previous from '../../assets/Previous.png';
import Fullscreen from '../../assets/Fullscreen.png'

const Gallery = () => {
    const [placeId, setPlaceId] = useState(0);
    const [btnsDisabled, setBtnsDisabled] = useState(false);
    const [fullscreen, setFullscreen] = useState('');
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        document.addEventListener('keyup', handleEscape)
    }, [])



    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setFullscreen('');
        }
    }

    const handleSet = (dir: string | number) => {
        if (dir === 'forward') {
            if (placeId === places.length - 1) {
                setPlaceId(0)
            } else {
                setPlaceId(placeId + 1)
            }
        } else if (dir === 'back') {
            if (placeId === 0) {
                setPlaceId(places.length - 1)
            } else {
                setPlaceId(placeId - 1)
            }
        } else if (typeof dir === 'number') {
            setPlaceId(dir);
        }

        document.getElementById('selected')?.focus()

        let opacity = 10;

        let interval = setInterval(() => {
            if (opacity < 100) {
                opacity = opacity + 10;
            } else {
                clearInterval(interval);
                setBtnsDisabled(false);
            }

            if (imgRef.current) {
                imgRef.current.style.opacity = `${opacity / 100}`
            }

        }, 50)

    }

    const handleChange = (dir: string | number) => {

        const image = document.getElementById("place_image")! as HTMLImageElement;



        let opacity = 100;
        let back = false;

        let interval = setInterval(() => {
            if (opacity > 10 && !back) {
                opacity = opacity - 10;
            } else {
                clearInterval(interval);
                handleSet(dir)
            }

            if (imgRef.current) {
                imgRef.current.style.opacity = `${opacity / 100}`
            }
        }, 50)
    }

    return (
        <div className={`${s.root} ${s[fullscreen]}`}>
            <div className={s.container}>
                <img
                    src={places[placeId].imageUrl}
                    alt={places[placeId].localizations[0].name}
                    id="place_image"
                    ref={imgRef}
                />

                <button
                    onClick={() => {
                        if (!btnsDisabled) {
                            handleChange('forward');
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
                            handleChange('back');
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
                        fullscreen === ''
                            ? setFullscreen('full')
                            : setFullscreen('')
                    }}
                >
                    <img src={Fullscreen} alt="" />
                </button>

                <article className={s.description}>
                    {/* пока всё на англ */}
                    <h2>
                        {places[placeId].localizations[0].name}
                    </h2>
                    {places[placeId].localizations[0].description}
                </article>
            </div>

            <div className={s.bottom_gallery}>
                <div style={{display: 'flex'}}>
                    {places.map((item, index) => {
                        if (index === placeId) {
                            return (
                                <div 
                                    className={`${s.small_container}
                                     ${s.selected}`} key={`${item.id}btm`}
                                      tabIndex={1}
                                       id='selected'
                                    //    onClick={() => setPlaceId(index)}
                                    >
                                    <img src={item.imageUrl} alt={item.localizations[0].name} />
                                </div>
                            )
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
                                    <img src={item.imageUrl} alt={item.localizations[0].name} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery;
