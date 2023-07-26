import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

// eslint-disable-next-line react/prop-types
export const Filters = ({ handlePages, handleGenre, handleSearch }) => {

  const minPageId = useId()
  const genreFilterId = useId()
  const { filters } = useFilters()

  return (
    <article className="main__content-filtros">
      <div>
        <h3>Filtrar por páginas</h3>
        <input type="range" value={filters.pages} name="pages" id={minPageId} min={10} max={1500} onChange={handlePages} />
      </div>
      <div>
        <h3>Filtrar por género</h3>
        <select name="ganre" id={genreFilterId} onChange={handleGenre}>
          <option value="all">Todas</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
      <div>
        <h3>Search</h3>
        <input type="text" name="search" onChange={handleSearch} placeholder="Dracula..." />
      </div>
    </article>
  )
}
