import React from 'react'
import { useParams } from 'react-router-dom'

function WeatherDateDetails() {
    const {weatherId} = useParams();

    return (
        <div>
            <h1>Weather Details! {weatherId}</h1>
        </div>
    )
}

export default WeatherDateDetails
