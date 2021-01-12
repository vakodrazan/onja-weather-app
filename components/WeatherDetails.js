import React from 'react'
import { useParams } from 'react-router-dom';

function WeatherDetails() {
    const {woeid} = useParams();
    console.log(woeid);

    return (
        <div>
            <h1>Today's highlight {woeid}</h1>
        </div>
    )
}

export default WeatherDetails
