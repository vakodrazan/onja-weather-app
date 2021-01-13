import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';

function WeatherDateDetails() {
    const {weatherId} = useParams();

    const { state, dispatch} = useContext(Context);
    const {details} = state;
    if (!details.consolidated_weather) return null
    const findDetail = details?.consolidated_weather ? details.consolidated_weather.find(detail => String(detail.id) !== weatherId) : "";
    console.log(findDetail);

    return (
        <div>
            <h1>{new Date(findDetail?.applicable_date).toDateString()}</h1>
            {findDetail && 
                <ul className="detail_highlight">
                    <li className="detail_highlight_item">
                        <p>Wind Status</p>
                        <strong>{findDetail.wind_speed} mph</strong>
                        <span>{findDetail.wind_direction_compass}</span>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Humidity</p>
                        <strong>{findDetail.humidity} mph</strong>
                        <div>
                            <div className="percentage">
                                <span>01</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <progress value={findDetail.humidity} max="100"> 32% </progress>
                            <label>%</label>
                        </div>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Visibility</p>
                        <strong>{Math.round(findDetail.visibility)} miles</strong>
                    </li>
                    <li className="detail_highlight_item">
                        <p>Air Pressure</p>
                        <strong>{findDetail.air_pressure} mb</strong>
                    </li>
                </ul>
            }
        </div>
    )
}

export default WeatherDateDetails
