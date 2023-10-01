import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {token, setToken, page, setPage, openCategory, setOpenCategory, counts, setCounts} = useContext(State)

   return {token, setToken, page, setPage, openCategory, setOpenCategory, counts, setCounts}
}

export default useStart;