import React, { useContext } from 'react'
import { Context } from '../Context';

import {days, months} from "./DateArray"

function TodayWeatherDetail() {
    const {state} = useContext(Context);
    const {details, loading, degreeType} = state;

    const date = new Date(details.consolidated_weather && details.consolidated_weather[0].applicable_date);

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const numericDate = date.getDate();

    const celsius = Math.round(details.consolidated_weather && details.consolidated_weather[0].min_temp);
    const fahrenheit = Math.round((celsius * 9/5) + 32);;

    return (
        <div className="content">

            {loading && <p>Loading...</p>}

            {details.consolidated_weather 
                ? <div>
                    <img src={`https://www.metaweather.com/static/img/weather/png/${details.consolidated_weather[0].weather_state_abbr}.png`} />
                    <p>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</p>
                    <p>{details.consolidated_weather[0].weather_state_name}</p>
                    <time dateTime={details.consolidated_weather[0].applicable_date}>Today . {day}, {numericDate} {month}</time>
                    <address>{details.title}</address>
                </div>
                : ""
            }
        </div>
    )
}

export default TodayWeatherDetail
