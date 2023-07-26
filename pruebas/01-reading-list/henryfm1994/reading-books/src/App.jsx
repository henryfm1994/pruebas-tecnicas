import library from "./books.json";
import { Main } from "./components/Main";
import { List } from "./components/List";
import { useFilters } from "./hooks/useFilters";
import { useList } from "./hooks/useList";

function App() {

  const books = library.library

  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks(books)

  const { filteredList } = useList()

  return (
    <main>
      <Main filteredBooks={filteredBooks} />
      {
        filteredList.length > 0 && <List />
      }
    </main>
  )
}

export default App
