import React, { useContext, useState } from 'react'
import { Context } from '../Context';
import SearchResults from './SearchResults';

function SearchForm() {
    const {state, dispatch, fetchData} = useContext(Context);
    const {query, isOpen} = state;

        function opePopup() {
            dispatch({type: "OPEN_POPUP", isOpen: true});
        }
        function closePopup() {
            dispatch({type: "CLOSE_POPUP", isOpen: false});
        }

    function searchLocation(e) {
        e.preventDefault();
        dispatch({type: "GET_DATA", location: fetchData()})
    }

    return (
        <div className="content">
            {
                !isOpen ? 
                    <div className="search">
                        <button className="search_button" onClick={opePopup}>Search for places</button>
                        <span>gps_fixed</span>
                    </div>
                : ""
            }
            {isOpen &&
                <div className="popup">
                    <button onClick={closePopup}>X</button>
                    <form onSubmit={searchLocation}>
                        <input 
                            type="text" 
                            placeholder="Search for places" 
                            value={query} 
                            onChange={(e) => 
                                dispatch({type: "ON_CHANGE", query: e.target.value})
                            } 
                        />
                        <button>Search</button>
                    </form>
                    <SearchResults />
                </div>
            }
        </div>
    )
}

export default SearchForm
