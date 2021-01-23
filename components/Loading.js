import React, { useContext } from 'react'
import { Context } from '../Context'

export default function Loading() {
    const { state } = useContext(Context);
    const { loading } = state;
    return loading && <p className="loading">Loading...</p>
}
