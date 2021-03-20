import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import Rating from '@material-ui/lab/Rating';
import s from './RatePage.module.scss'
import { useParams } from 'react-router';

const RatePage = () => {
    const places = useSelector((state: RootState) => state.places);
    
    const { id }  = useParams<any>();

    const numId = parseInt(id.match(/\d+/))

    if(!places.length) {
        return <div>Loading place...</div>
    }

    return (
        <div className={s.root}>
            <div className={s.place}>
                <span>{places[numId - 1].name}</span>
                <img src={places[numId - 1].imageUrl} alt={`${places[numId - 1].name} image`}/>
            </div>

            <div className={s.feedback}>
                <div className={s.user}>
                    <img src="https://cutt.ly/AximhKv" alt="хто я" title='Андрій'/>
                    <Rating className={s.rate} value={4} readOnly />
                </div>
                <div className={s.feedText}>Ауффф...</div>
                
            </div>
        </div>
    )
}

export default RatePage;
