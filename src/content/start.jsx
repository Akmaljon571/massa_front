import { createContext, useState } from "react";

export const State = createContext()

export const api = 'http://localhost:1000/'

export const StatePriveder = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || false);
    const [page, setPage] = useState(1);
    const [openCategory, setOpenCategory] = useState(true);
    const [counts, setCounts] = useState(0);

    const data = {token, setToken, page, setPage, openCategory, setOpenCategory, counts, setCounts}

    return <State.Provider value={data}>{ children }</State.Provider>
}