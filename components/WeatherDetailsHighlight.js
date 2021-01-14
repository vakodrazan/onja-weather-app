import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';

function WeatherDetailsHighlight() {
    const { state } = useContext(Context);
    const {details, loading} = state;

    const highlightDetail = details.consolidated_weather;

    return (
        <div>
            <h1>Today's highlights</h1>

            {loading && <p>Loading...</p>}

            {highlightDetail && 
                <ul className="detail_highlight">
                    <li className="detail_highlight_item">
                        <p>Wind Status</p>
                        <strong>{Math.round(highlightDetail[0].wind_speed)} mph</strong>
                        <span>{highlightDetail[0].wind_direction_compass}</span>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Humidity</p>
                        <strong>{highlightDetail[0].humidity} mph</strong>
                        <div>
                            <div className="percentage">
                                <span>01</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <progress value={highlightDetail[0].humidity} max="100"> 32% </progress>
                            <label>%</label>
                        </div>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Visibility</p>
                        <strong>{Math.round(highlightDetail[0].visibility)} miles</strong>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Air Pressure</p>
                        <strong>{highlightDetail[0].air_pressure} mb</strong>
                    </li>
                </ul>
            }
        </div>
    )
}

export default WeatherDetailsHighlight
