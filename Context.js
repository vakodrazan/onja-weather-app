import React, { createContext, useEffect, useReducer, useState } from 'react'

const Context = createContext();

const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "GET DATA": {
                return {
                    ...state,
                    loading: false,
                    location: action.location
                }
            }
            case "ON CHANGE": {
                return {
                    ...state,
                    query: action.query
                }
            }
            default: {
                return state
            }
        }
    }, {
        location: [],
        loading: true,
        query: "san"
    })

    async function fetchData() {
        const res = await fetch(URL + state.query);
        const data = await res.json();
        dispatch({type: "GET DATA", location: data})
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Context.Provider value={{state, dispatch, fetchData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
