import { useReducer } from "react"

import SearchBar from "./components/SearchBar"
import Bookshelf from "./components/Bookshelf"



import reducer from "./booksReducer"


function App() {
 const [bookshelf, dispatch] = useReducer(reducer, [])


  return (
    <>
      <SearchBar bookshelf={bookshelf} dispatch={dispatch}/>
      <Bookshelf bookshelf={bookshelf} dispatch={dispatch}/>
    </>
  )
}

export default App
