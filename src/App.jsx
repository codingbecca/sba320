import { useReducer } from "react"

import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"


import { books } from "./data/data"
import reducer from "./booksReducer"


function App() {
 const [bookshelf, dispatch] = useReducer(reducer, [])


  return (
    <>
      <SearchBar/>
      <SearchResults books={books} dispatch={dispatch}/>
    </>
  )
}

export default App
