import { useState } from "react";
import SearchResults from "./SearchResults";
import axios from 'axios'

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRefinement, setSearchRefinement] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchRefinement}${encodeURIComponent(searchTerm)}`)
    setBooks(res.data.items);
    setSearchTerm('');
    setSearchRefinement('');
  }

  return (
    <div>
      <div className="mt-5 flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            className="border rounded-sm mx-2 p-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={searchRefinement} onChange={e => {setSearchRefinement(e.target.value)}} className="border rounded-sm">
            <option value="">Refine your search</option>
            <option value="intitle:">Title</option>
            <option value="inauthor:">Author</option>
            <option value="inpublisher:">Publisher</option>
            <option value="subject:">Subject</option>
            <option value="isbn:">ISBN</option>
          </select>
          <input
            type="submit"
            value="search"
            className="border rounded-sm ml-2 px-1"
          />
        </form>
      </div>

        {books.length > 0 ? (<SearchResults {...props} books={books} />):( <h1 className="text-center mt-3">Search for a book to add to your shelf</h1>) }

    </div>
  );
}
