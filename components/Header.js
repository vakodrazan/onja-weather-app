import React from 'react'
import SearchForm from './SearchForm'
import TodayWeatherDetail from './TodayWeatherDetail'

function Header() {
    return (
        <div className="place_finder">
            <SearchForm />
            <TodayWeatherDetail />
        </div>
    )
}

export default Header
