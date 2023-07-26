import { useList } from "../hooks/useList"

// eslint-disable-next-line react/prop-types
export const List = () => {

  const { filteredList, delFromList } = useList()

  return (
    <aside className="list__books">
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          filteredList.map(book => {

            return <li key={book.ISBN}>
              <img src={book.cover} alt={book.title} />
              <span onClick={() => delFromList(book)} >x</span>
            </li>
          }
          )
        }
      </ul>
    </aside>
  )
}
