import { createContext, useState } from "react";

export const State = createContext()

export const api = 'http://localhost:1000/'

export const StatePriveder = ({ children }) => {
    const [token, setToken] = useState(JSON.stringify(localStorage.getItem('token')) || false);
    const [page, setPage] = useState(1);

    const data = {token, setToken, page, setPage}

    return <State.Provider value={data}>{ children }</State.Provider>
}