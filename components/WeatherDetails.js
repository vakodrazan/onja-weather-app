import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

function WeatherDetails() {
    const {state} = useContext(Context);
    const {loading} = state;

    const {woeid} = useParams();

    const [details, setDetails] = useState([]);

    const WEATHER_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"

    async function getWeatherDetail() {
        const res = await fetch(WEATHER_URL + woeid);
        const data = await res.json()
        setDetails(data);
    }

    useEffect(() => {
        getWeatherDetail();
    }, [woeid])

    console.log(details.consolidated_weather);
    const today = new Date();
    const tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24));

    return (
        <div>
            {loading && <p>Loading...</p>}

            <h1>Today's highlight {woeid}</h1>
            <ul>{details.consolidated_weather?.map(consolidate => {

                // const date = new Date(consolidate?.applicable_date);

                return (
                    <li key={consolidate.id  }>
                        <p>{consolidate.applicable_date}</p>
                        <img src={`https://www.metaweather.com/static/img/weather/png/${consolidate.weather_state_abbr}.png`} />
                        <div>
                            <div>{consolidate.max_temp}</div>
                            <div>{consolidate.min_temp}</div>
                        </div>
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default WeatherDetails
