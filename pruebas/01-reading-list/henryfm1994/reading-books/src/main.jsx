import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss'
import { FiltersProvider } from './context/FilterContext.jsx'
import { ListProvider } from './context/ListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <ListProvider >
      <App />
    </ListProvider>
  </FiltersProvider>
)
