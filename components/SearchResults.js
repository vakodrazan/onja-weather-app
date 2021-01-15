import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function SearchResults() {
    const {state, dispatch, getWeatherDetail} = useContext(Context);
    const {loading, location, isOpen} = state;
    function closePopup() {
        dispatch({type: "CLOSE_POPUP", isOpen: false});
    }

    function handlePlaceFinder(e) {
        console.log(e.target.id);
        dispatch({type: "UPDATE_WOEID", woeid: e.target.id});
        getWeatherDetail();
        closePopup();
    }

    return (
        <>
            {isOpen &&
                <div>
                    {loading && <p>Loading...</p>}
                    <div>
                        {location.length > 0 && location.map(loc => (
                            <div key={loc.woeid}>
                                <p id={loc.woeid} onClick={handlePlaceFinder}>
                                    {loc.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            } 
        </>
    )
}

export default SearchResults
