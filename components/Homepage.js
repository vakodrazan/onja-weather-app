import React from 'react'

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


function Homepage() {
    return (
        <div>
            <h1>Onja Weather App</h1>
            <SearchForm />
            <SearchResults />
        </div>
    )
}

export default Homepage
