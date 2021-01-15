import React, { createContext, useEffect, useReducer, useState } from 'react'

const Context = createContext();

const CORS_URL = "https://cors-anywhere.herokuapp.com/"
const URL = "https://www.metaweather.com/api/location/search/?query="
const WEATHER_URL = "https://www.metaweather.com/api/location/"

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "GET_DATA": {
                return {
                    ...state,
                    loading: false,
                    location: action.location
                }
            }
            case "ON_CHANGE": {
                return {
                    ...state,
                    query: action.query
                }
            }
            case "SHOW_DETAILS": {
                return {
                    ...state,
                    loading: false,
                    details: action.details
                }
            }
            case "OPEN_POPUP": {
                return {
                    ...state,
                    isOpen: action.isOpen
                }
            }
            case "CLOSE_POPUP": {
                return {
                    ...state,
                    isOpen: action.isOpen
                }
            }
            case "UPDATE_FORCAST_VALUE": {
                return {
                    ...state,
                    degreeType: action.degreeType
                }
            }
            case "UPDATE_WOEID": {
                return {
                    ...state,
                    woeid: action.woeid
                }
            }
            default: {
                return state
            }
        }
    }, {
        location: [],
        details: [],
        loading: true,
        query: "helsinki",
        woeid: "565346",
        isOpen: false,
        degreeType: "celsius"
    })

    async function fetchData() {
        const res = await fetch(CORS_URL + URL + state.query);
        const data = await res.json();
        dispatch({type: "GET_DATA", location: data})
    }

    useEffect(() => {
        fetchData();
    }, []);


    async function getWeatherDetail() {
        console.log(state.woeid);
        const res = await fetch(CORS_URL + WEATHER_URL + state.woeid);
        const data = await res.json()
        dispatch({type: "SHOW_DETAILS", details: data})
    }

    useEffect(() => {
        getWeatherDetail();
    }, [state.woeid])

    return (
        <Context.Provider value={{state, dispatch, fetchData, getWeatherDetail}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
