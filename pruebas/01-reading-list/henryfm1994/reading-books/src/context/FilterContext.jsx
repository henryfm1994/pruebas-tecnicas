import { createContext, useState } from "react";

export const FiltersContext = createContext()

// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {

  const [filters, setFilters] = useState({
    pages: 10,
    genre: 'all',
    search: 'all'
  })

  return (

    <FiltersContext.Provider value={{
      filters,
      setFilters
    }} >
      {children}
    </FiltersContext.Provider>
  )
}