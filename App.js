import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
function App() {
    return ( 
        <div className="wrapper">
            <Header />
            <Switch>
                <Route path="/:woeid">
                    <WeatherDetails />
                </Route>
            </Switch>
        </div>
    )
}

export default App
