import React, { useContext } from 'react'
import { Context } from './Context'



function App() {
    const {state, dispatch, fetchData} = useContext(Context);
    const {loading, location, query} = state;

    function searchLocation(e) {
        e.preventDefault();
        console.log("Results of search", query);
        dispatch({type: "GET DATA", location: fetchData()})
    }
    console.log(location);
    return ( 
        <div>
            <h1>Onja Weather App</h1>
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
            {loading && <p>Loading...</p>}
            {location.length > 0 && location.map(loc => (
                <div key={loc.woeid}>
                    {loc.title}
                </div>
            ))}
        </div>
    )
}

export default App
