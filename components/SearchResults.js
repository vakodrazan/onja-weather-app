import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function SearchResults() {
    const {state} = useContext(Context);
    const {loading, location} = state;

    return (
        <div>
            {loading && <p>Loading...</p>}
            <div>
                {location.length > 0 && location.map(loc => (
                    <div key={loc.woeid}>
                        <Link to={`/${loc.woeid}`}>
                            {loc.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults
