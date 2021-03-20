import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Rating from '@material-ui/lab/Rating';
import s from './RatePage.module.scss'
import { useParams } from 'react-router';
import { BASE_URL } from '../../services/constants';

const RatePage = () => {
    const places = useSelector((state: RootState) => state.places);
    
    const { id }  = useParams<any>();
    const numId = parseInt(id.match(/\d+/))

    const [ratingData, setRatingData] = useState<any>([]);

    const getData = async () => {
        return await fetch(`${BASE_URL}/ratings?placeId=${numId}`);
    }

    useEffect(() => {
        getData().then(async data => {
            setRatingData((await data.json()).data);
        })
    }, [])

    if(!places.length && !ratingData.length) {
        return <div>Loading place...</div>
    }

    return (
        <div className={s.root}>
            <div className={s.place}>
                <span>{places[numId - 1].name}</span>
                <img src={places[numId - 1].imageUrl} alt={`${places[numId - 1].name} image`}/>
            </div>

            <div className={s.reviews}>
                {
                    ratingData.map(({rating, user}: any) => {
                        return (
                            <div className={s.feedback}>
                            <div className={s.user}>
                                <img src={user.photoUrl} alt="хто я" title={user.name}/>
                                <div>{user.name}</div>
                                <Rating className={s.rate} value={rating} readOnly />
                            </div>
                        </div>
                        )
                    })
                }
            </div>

           
        </div>
    )
}

export default RatePage;
