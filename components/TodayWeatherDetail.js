import React, { useContext } from 'react'
import { Context } from '../Context';

import {days, months} from "./DateArray"

import locationImage from "../assets/location_on-24px.svg";
import Loading from './Loading';

function TodayWeatherDetail() {
    const {state} = useContext(Context);
    const {details, degreeType} = state;

    const date = new Date(details.consolidated_weather && details.consolidated_weather[0].applicable_date);

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const numericDate = date.getDate();

    const celsius = Math.round(details.consolidated_weather && details.consolidated_weather[0].min_temp);
    const fahrenheit = Math.round((celsius * 9/5) + 32);;

    return (
        <div className="content">

            <Loading />

            {details.consolidated_weather 
                ? <div className="today_detail">
                    <img src={`https://www.metaweather.com/static/img/weather/png/${details.consolidated_weather[0].weather_state_abbr}.png`} />
                    <div className="temperature">
                        {degreeType === "celsius" 
                            ? <div><span className="temperature_value">{celsius}</span> <span className="temperature_unit">°C</span></div> 
                            : <div><span className="temperature_value"> {fahrenheit}</span> <span className="temperature_unit">°F</span></div>
                        }
                        </div>
                    <p className="weather-name">
                        {details.consolidated_weather[0].weather_state_name}
                    </p>
                    <div className="applicable">
                        <time dateTime={details.consolidated_weather[0].applicable_date}>
                            Today • {day}, {numericDate} {month}
                        </time>
                        <address className="city-name">
                            <img className="city-location" src={locationImage} alt="Location" />
                            <span>{details.title}</span>
                        </address>
                    </div>
                </div>
                : ""
            }
        </div>
    )
}

export default TodayWeatherDetail
