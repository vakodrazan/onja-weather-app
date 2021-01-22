import React, { useContext } from 'react';
import { Context } from '../Context';

import WindDirectionImage from "../assets/navigation-24px.svg";
import styled from 'styled-components';

function WeatherDetailsHighlight() {
    const { state } = useContext(Context);
    const {details, loading} = state;

    const highlightDetail = details.consolidated_weather;
    console.log(highlightDetail);

    const direction = highlightDetail && Math.round(highlightDetail[0].wind_direction);
    console.log(direction);

    const ImageRotate = styled.img`
        transform: rotate((direction)deg)
    `;

    return (
        <div>
            <h1>Today's highlights</h1>

            {loading && <p>Loading...</p>}

            {highlightDetail && 
                <ul className="detail_highlight">
                    <li className="detail_highlight_item">
                        <p className="detail_highlight_item_title">Wind Status</p>
                        <strong className="detail_highlight_item_bold">{Math.round(highlightDetail[0].wind_speed)} mph</strong>
                        <div>
                            <span className="detail_highlight_item_wind-direction">{highlightDetail[0].wind_direction_compass}</span>
                            <ImageRotate src={WindDirectionImage} alt="Wind direction" />
                        </div>
                    </li>
                    <li className="detail_highlight_item">
                        <p className="detail_highlight_item_title">Humidity</p>
                        <strong className="detail_highlight_item_bold">{Math.round(highlightDetail[0].humidity)} mph</strong>
                        <div className="detail_highlight_item_progress-bar">
                            <div className="percentage">
                                <span>01</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <progress value={highlightDetail[0].humidity} max="100"> 32% </progress>
                            <label className="detail_highlight_item_label">%</label>
                        </div>
                    </li>
                    <li className="detail_highlight_item">
                        <p className="detail_highlight_item_title">Visibility</p>
                        <strong className="detail_highlight_item_bold">{Math.round(highlightDetail[0].visibility)} miles</strong>
                    </li>
                    <li className="detail_highlight_item">
                        <p className="detail_highlight_item_title">Air Pressure</p>
                        <strong className="detail_highlight_item_bold">{Math.round(highlightDetail[0].air_pressure)} mb</strong>
                    </li>
                </ul>
            }
        </div>
    )
}

export default WeatherDetailsHighlight
