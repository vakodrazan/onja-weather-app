import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Context } from '../Context';
import WeatherDetailsHighlight from './WeatherDetailsHighlight';
import {months, days} from "./DateArray";
import TemperatureConverter from './TemperatureConverter';

function WeatherDetails() {
    const {state, dispatch} = useContext(Context);
    const {loading, details, degreeType} = state;

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

            <TemperatureConverter />

            {loading && <p>Loading...</p>}

            <ul className="content_detail">
                {details.consolidated_weather 
                    && details.consolidated_weather?.slice(1).map(consolidate => {
                        // const date = new Date(consolidate?.applicable_date).toDateString();
                        const date = new Date(consolidate?.applicable_date);
                        const day = days[date.getDay()];
                        const month = months[date.getMonth()];
                        const numericDate = date.getDate();

                        const celsiusMaxTemp = Math.round(consolidate.max_temp);
                        const fahrenheitMaxTemp = Math.round((celsiusMaxTemp * 9/5) + 32);
                        const celsiusMinTemp = Math.round(consolidate.min_temp);
                        const fahrenheitMinTemp = Math.round((celsiusMinTemp * 9/5) + 32);;

                        return (
                            <li key={consolidate.id} className="content_detail_item">
                                <time dateTime={consolidate?.applicable_date}>{day}, {numericDate} {month}</time>
                                <img src={`https://www.metaweather.com/static/img/weather/png/${consolidate.weather_state_abbr}.png`} />
                                <div className="content_detail_item_temp">
                                    <span>{degreeType === "celsius" ? celsiusMaxTemp + "°C" : fahrenheitMaxTemp + "°F"}</span>
                                    <span>{degreeType === "celsius" ? celsiusMinTemp + "°C" : fahrenheitMinTemp + "°F"}</span>
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
