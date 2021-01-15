import React, { useContext } from 'react'
import { Context } from '../Context';
import SearchResults from './SearchResults';
import GpsFixed from "../assets/gps_fixed-24px.svg";


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
        dispatch({type: "ON_CHANGE", query: ""})
        fetchData();
    }

    return (
        <div>
            {
                !isOpen ? 
                    <div className="content">
                        <div className="search_popup">
                            <button className="search_popup_button" onClick={opePopup}>Search for places</button>
                            <div className="gps_fixed">
                                <img src={GpsFixed} alt="Gps fixed" />
                            </div>
                        </div>
                    </div>
                : ""
            }
            {isOpen &&
                <div className="popup">
                    <div className="content">
                        <div className="closePopup">
                            <button onClick={closePopup}>X</button>
                        </div>
                        <form onSubmit={searchLocation} className="search">
                            <input 
                                className="search_location"
                                type="text" 
                                placeholder="Search Location" 
                                value={query} 
                                onChange={(e) => 
                                    dispatch({type: "ON_CHANGE", query: e.target.value})
                                } 
                            />
                            <button className="search_button">Search</button>
                        </form>
                        <SearchResults />
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchForm
