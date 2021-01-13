import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';

function WeatherDateDetails() {
    const {weatherId} = useParams();

    const { state, dispatch} = useContext(Context);
    const {details} = state;
    if (!details.consolidated_weather) return null
    const findDetail = details?.consolidated_weather ? details.consolidated_weather?.filter(detail => detail.id !== weatherId) : "";
    // console.log(details.consolidated_weather?.id);

    return (
        <div>
            <h1>Weather Details! {weatherId}</h1>

            <ul>
                <li>
                    <span>Wind Status</span>
                    <strong>{findDetail?.wind_speed}</strong>
                    <span>{details?.consolidated_weather.wind_direction_compass}</span>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default WeatherDateDetails
