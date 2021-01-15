import React, { useContext } from 'react'
import { Context } from '../Context';

function TemperatureConverter() {
    const {state, dispatch} = useContext(Context);
    const {degreeType} = state;

    function updateDegreeForcast(e) {
        dispatch({type: "UPDATE_FORCAST_VALUE", degreeType: e.target.value})
    }

    return (
        <div className="converter">
            <div className="converter_item">
                <input
                    type="radio"
                    id="celsius"
                    value="celsius"
                    checked={degreeType === "celsius"}
                    onChange={updateDegreeForcast}
                />
                <label htmlFor="celsius">°C</label>
            </div>
            <div className="converter_item">
                <input
                    type="radio"
                    id="farenheit"
                    value="fahrenheit"
                    checked={degreeType === "fahrenheit"}
                    onChange={updateDegreeForcast}
                />
                <label htmlFor="farenheit">°F</label>
            </div>
        </div>
    )
}

export default TemperatureConverter
