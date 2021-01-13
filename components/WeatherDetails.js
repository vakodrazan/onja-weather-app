import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context';

function WeatherDetails() {
    const {state, dispatch} = useContext(Context);
    const {loading, details} = state;

    const {woeid} = useParams();


    const WEATHER_URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"

    async function getWeatherDetail() {
        const res = await fetch(WEATHER_URL + woeid);
        const data = await res.json()
        dispatch({type: "SHOW_DETAILS", details: data})
    }

    useEffect(() => {
        getWeatherDetail();
    }, [woeid])

    console.log(details.consolidated_weather);

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>{details.consolidated_weather?.shift() && details.consolidated_weather?.map(consolidate => {

                const date = new Date(consolidate?.applicable_date).toDateString();

                // Convert celius to to fahrenheit
                // const maxtTempF = ((consolidate.max_temp / 5) * 9) + 32;

                return (
                    <li key={consolidate.id}>
                        <Link to={`/${woeid}/${consolidate.id}`}>
                            <time dateTime={consolidate?.applicable_date}>{date}</time>
                            <img src={`https://www.metaweather.com/static/img/weather/png/${consolidate.weather_state_abbr}.png`} />
                            <div>
                                <span>{Math.round(consolidate.max_temp)} °C</span>
                                <span>{Math.round(consolidate.min_temp)} °C</span>
                            </div>
                        </Link>
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default WeatherDetails
