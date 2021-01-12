import React, { useContext } from 'react'
import { Context } from '../Context';

function SearchForm() {
    const {state, dispatch, fetchData} = useContext(Context);
    const {query} = state;

    function searchLocation(e) {
        e.preventDefault();
        console.log("Results of search", query);
        dispatch({type: "GET DATA", location: fetchData()})
    }

    return (
        <form onSubmit={searchLocation}>
            <input 
                type="text" 
                placeholder="Search for places" 
                value={query} 
                onChange={(e) => 
                    dispatch({type: "ON CHANGE", query: e.target.value})
                } 
            />
            <button>Search</button>
        </form>
    )
}

export default SearchForm
