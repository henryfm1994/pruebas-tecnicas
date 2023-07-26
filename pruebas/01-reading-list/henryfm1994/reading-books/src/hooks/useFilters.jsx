import { useContext } from "react"
import { FiltersContext } from "../context/FilterContext"

export function useFilters() {

  const { filters, setFilters } = useContext(FiltersContext)

  const filterBooks = (books) => {

    return books.filter(book => {

      return book.book.pages >= filters.pages && (filters.genre === 'all' || book.book.genre === filters.genre) && (filters.search === 'all' || book.book.title.toLowerCase().includes(filters.search))
    }
    )
  }
  return { filters, setFilters, filterBooks }
}