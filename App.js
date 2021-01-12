import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import WeatherDetails from './components/WeatherDetails';
function App() {
    return ( 
        <div>
            <Homepage />
            <Switch>
                <Route path="/:woeid">
                    <WeatherDetails />
                </Route>
            </Switch>
        </div>
    )
}

export default App
