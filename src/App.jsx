import { useReducer } from "react"

import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Bookshelf from "./components/Bookshelf"


import { books } from "./data/data"
import reducer from "./booksReducer"


function App() {
 const [bookshelf, dispatch] = useReducer(reducer, [])


  return (
    <>
      <SearchBar/>
      <SearchResults books={books} bookshelf={bookshelf} dispatch={dispatch}/>
      <Bookshelf bookshelf={bookshelf} dispatch={dispatch}/>
    </>
  )
}

export default App
