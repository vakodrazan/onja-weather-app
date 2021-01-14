import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function SearchResults() {
    const {state, dispatch} = useContext(Context);
    const {loading, location, isOpen} = state;
    function closePopup() {
        dispatch({type: "CLOSE_POPUP", isOpen: false});
    }
    return (
        <>
            {isOpen &&
                <div>
                    {loading && <p>Loading...</p>}
                    <div>
                        {location.length > 0 && location.map(loc => (
                            <div key={loc.woeid}>
                                <Link to={`/${loc.woeid}`} onClick={closePopup}>
                                    {loc.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            } 
        </>
    )
}

export default SearchResults
