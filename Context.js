import React, { createContext, useEffect, useReducer, useState } from 'react'

const Context = createContext();

const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="

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
                    details: action.details
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
        query: "helsinki"
    })

    async function fetchData() {
        const res = await fetch(URL + state.query);
        const data = await res.json();
        dispatch({type: "GET_DATA", location: data})
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
