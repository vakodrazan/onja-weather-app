import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function SearchResults() {
    const {state} = useContext(Context);
    const {loading, location, details} = state;

    return (
        <div>
            {loading && <p>Loading...</p>}
            <div>
                {location.length > 0 && location.map(loc => (
                    <div key={loc.woeid}>
                        <Link to={`/${loc.woeid}`}>
                            {loc.title}
                        </Link>
                    </div>
                ))}
            </div>

            {details.consolidated_weather 
                ? <div>
                    <img src={`https://www.metaweather.com/static/img/weather/png/${details.consolidated_weather[0].weather_state_abbr}.png`} />
                    <p>{Math.round(details.consolidated_weather[0].min_temp)} °C</p>
                    <p>{details.consolidated_weather[0].weather_state_name}</p>
                    <time dateTime={details.consolidated_weather[0].applicable_date}>Today . {new Date(details.consolidated_weather[0].applicable_date).toDateString()}</time>
                    <address>{details.title}</address>
                </div>
                : ""
           }
        </div>
    )
}

export default SearchResults
