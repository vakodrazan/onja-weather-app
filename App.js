import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import WeatherDateDetails from './components/WeatherDateDetails';
import WeatherDetails from './components/WeatherDetails';
function App() {
    return ( 
        <div>
            <Homepage />
            <Switch>
                <Route path="/:woeid">
                    <WeatherDetails />

                    <Switch>
                        <Route path="/:woeid/:weatherId">
                            <WeatherDateDetails />
                        </Route>
                    </Switch>
                </Route>
            </Switch>
        </div>
    )
}

export default App
