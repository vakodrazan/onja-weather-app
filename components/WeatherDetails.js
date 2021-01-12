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
    console.log(today);

    return (
        <div>
            {loading && <p>Loading...</p>}

            {/* {details.map(detail => (
                <p>{detail.location_type}</p>
            ))} */}

            <h1>Today's highlight {woeid}</h1>
            <div>{details.consolidated_weather?.map(consolidate => {
                const date = new Date(consolidate?.applicable_date);
                console.log(date == today);
                return (
                    <section key={consolidate.id  }>
                        <p>
                            {consolidate.humidity}
                        </p>
                        <div>
                            {date === today ? <div>
                                <span>Today {date}</span>
                            </div> : <p>Not the same</p>}
                        </div>
                        <p>
                            {/* {consolidate.applicable_date.toLocalString( )} */}
                        </p>
                    </section>
                )
            })}</div>
        </div>
    )
}

export default WeatherDetails
