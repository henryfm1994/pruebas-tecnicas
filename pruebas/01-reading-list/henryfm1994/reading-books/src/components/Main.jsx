/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters";
import { useList } from "../hooks/useList";
import { Content } from "./Content";
import { Filters } from "./Filters";

// eslint-disable-next-line react/prop-types
export const Main = ({ filteredBooks }) => {

  const { setFilters } = useFilters()
  const { filteredList } = useList()

  const handlePages = (e) => {
    setFilters(prevPages => ({
      ...prevPages,
      pages: e.target.value
    })
    )
  }

  const handleGenre = (e) => {
    setFilters(prevGenre => ({
      ...prevGenre,
      genre: e.target.value
    })
    )
  }

  const handleSearch = (e) => {
    setFilters(prevSearch => ({
      ...prevSearch,
      search: e.target.value.toLowerCase()
    }))
  }

  return (
    <section className="main__content">
      <h1> {filteredBooks.length - filteredList.length}  libros disponibles</h1>
      {
        filteredList.length > 0 && <h3>{filteredList.length} en la lista de lectura</h3>
      }
      <Filters handlePages={handlePages} handleGenre={handleGenre} handleSearch={handleSearch} />

      <Content filteredBooks={filteredBooks} />

    </section>
  )
}
