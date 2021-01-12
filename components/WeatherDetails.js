import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
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

    return (
        <div>
            {loading && <p>Loading...</p>}

            <h1>Today's highlight {woeid}</h1>
            <ul>{details.consolidated_weather?.map(consolidate => {

                const date = new Date(consolidate?.applicable_date).toDateString();;

                return (
                    <li key={consolidate.id}>
                        <Link to={`/${woeid}/${consolidate.id}`}>
                            <p>{date}</p>
                            <img src={`https://www.metaweather.com/static/img/weather/png/${consolidate.weather_state_abbr}.png`} />
                            <div>
                                <div>{consolidate.max_temp} °C</div>
                                <div>{consolidate.min_temp} °C</div>
                            </div>
                        </Link>
                    </li>
                )
            })}</ul>
        </div>
    )
}

export default WeatherDetails
