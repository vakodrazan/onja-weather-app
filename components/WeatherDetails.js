import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, Route, Switch } from 'react-router-dom';

import { Context } from '../Context';
import WeatherDetailsHighlight from './WeatherDetailsHighlight';

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

    return (
        <div className="content">

            {loading && <p>Loading...</p>}

            <ul className="content_detail">
                {details.consolidated_weather 
                    && details.consolidated_weather?.slice(1).map(consolidate => {
                        const date = new Date(consolidate?.applicable_date).toDateString();

                        return (
                            <li key={consolidate.id} className="content_detail_item">
                                <time dateTime={consolidate?.applicable_date}>{date}</time>
                                <img src={`https://www.metaweather.com/static/img/weather/png/${consolidate.weather_state_abbr}.png`} />
                                <div className="content_detail_item_temp">
                                    <span>{Math.round(consolidate.max_temp)} °C</span>
                                    <span>{Math.round(consolidate.min_temp)} °C</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <WeatherDetailsHighlight />
        </div>
    )
}

export default WeatherDetails
