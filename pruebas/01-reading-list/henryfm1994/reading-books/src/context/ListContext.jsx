import { createContext, useReducer } from "react";
import { initialList, ListReducer } from "../reducer/ListReducer";

export const ListContext = createContext()

// eslint-disable-next-line react/prop-types
export function ListProvider({ children }) {

  const [list, dispatch] = useReducer(ListReducer, initialList)

  const addToList = (book) => dispatch({
    type: 'ADD_TO_LIST',
    payload: book
  })

  const delFromList = (book) => dispatch({
    type: 'DEL_FROM_LIST',
    payload: book
  })

  return (

    <ListContext.Provider value={{
      list,
      addToList,
      delFromList
    }} >
      {children}
    </ListContext.Provider>
  )
}