import React, { useContext } from 'react'
import { Context } from '../Context';

function SearchResults() {
    const {state, dispatch, getWeatherDetail} = useContext(Context);
    const {loading, location, isOpen} = state;
    function closePopup() {
        dispatch({type: "CLOSE_POPUP", isOpen: false});
    }

    function handlePlaceFinder(e) {
        dispatch({type: "UPDATE_WOEID", woeid: e.target.id});
        getWeatherDetail();
        closePopup();
    }

    return (
        <>
            {isOpen &&
                <>
                    {loading && <p>Loading...</p>}
                    <div className="search-result">
                        {location.length > 0 && location.map(loc => (
                            <ul key={loc.woeid} className="search-result_list">
                                <li className="search-result_list_item" id={loc.woeid} onClick={handlePlaceFinder}>
                                    {loc.title}
                                </li>
                            </ul>
                        ))}
                    </div>
                </>
            } 
        </>
    )
}

export default SearchResults
