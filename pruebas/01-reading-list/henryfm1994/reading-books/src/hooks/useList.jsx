import { useContext } from "react";
import { ListContext } from "../context/ListContext";
import { FiltersContext } from "../context/FilterContext";

export function useList() {

  const { list, addToList, delFromList } = useContext(ListContext)

  const { filters } = useContext(FiltersContext)

  const filteredList = list.filter(elem => {
    return elem.pages >= filters.pages && (filters.genre === 'all' || elem.genre === filters.genre) && (filters.search === 'all' || elem.title.toLowerCase().includes(filters.search))
  })

  return { filteredList, addToList, delFromList }
}