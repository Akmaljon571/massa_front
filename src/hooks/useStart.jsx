import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {token, setToken, page, setPage, openCategory, setOpenCategory} = useContext(State)

   return {token, setToken, page, setPage, openCategory, setOpenCategory}
}

export default useStart;