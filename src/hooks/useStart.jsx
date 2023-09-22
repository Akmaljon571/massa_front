import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {token, setToken, page, setPage} = useContext(State)

   return {token, setToken, page, setPage}
}

export default useStart;