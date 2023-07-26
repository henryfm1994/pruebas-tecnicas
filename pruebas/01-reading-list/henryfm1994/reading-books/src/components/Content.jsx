import { useList } from "../hooks/useList";

// eslint-disable-next-line react/prop-types
export const Content = ({ filteredBooks }) => {

  const { addToList } = useList()

  return (
    <ul>
      {
        // eslint-disable-next-line react/prop-types
        filteredBooks.map(book => {
          const libro = book.book

          return <li key={libro.ISBN}>
            <img src={libro.cover} alt={libro.title} onClick={() => addToList(libro)} />
          </li>
        }
        )
      }
    </ul>
  )
}
