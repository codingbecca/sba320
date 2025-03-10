import { useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRefinement, setSearchRefinement] = useState("");
  const [searchQuery, setSearchQuery] = useState({
    term: "",
    refinement: "",
  });

  const [books, setBooks] = useState([]);

  //state variables to handle pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm){
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchRefinement}${encodeURIComponent(
            searchTerm
          )}`
        );
        setBooks(res.data.items);
        setSearchQuery({
          term: searchTerm,
          refinement: searchRefinement,
        });
        setSearchTerm("");
        setSearchRefinement("");
      } catch (e) {
        console.error(e);
      }
    }
  };

  //functions to handle pagination
  const getPaginatedData = async (pageNumber) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          searchQuery.refinement
        }${encodeURIComponent(searchQuery.term)}&startIndex=${pageNumber * 10}`
      );

      if (res.data.items) {
        setBooks(res.data.items);

        //try to fetch the next page to see if results result
        const nextStartIndex = (pageNumber + 1) * 10;
        if (nextStartIndex < 1000) {
          const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${
              searchQuery.refinement
            }${encodeURIComponent(
              searchQuery.term
            )}&startIndex=${nextStartIndex}`
          );
          setIsLastPage(!res.data.items);
        } else {
          setIsLastPage(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
      getPaginatedData(currentPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      getPaginatedData(currentPage);
    }
  };

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
          <select
            value={searchRefinement}
            onChange={(e) => {
              setSearchRefinement(e.target.value);
            }}
            className="border rounded-sm"
          >
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

      {books.length > 0 ? (
        <SearchResults {...props} books={books} />
      ) : (
        <h1 className="text-center mt-3">
          Search for a book to add to your shelf
        </h1>
      )}

      {/* pagination */}
      {books.length > 0 && (
        <div className="paginationContainer">
          <ul className="flex mt-2">
            <li>
              <button
                className="px-1 mr-1 border rounded cursor-pointer  hover:bg-blue-900 hover:text-blue-100 disabled:bg-neutral-400 disabled:cursor-auto"
                disabled={currentPage === 0}
                onClick={handlePrevPage}
              >
                previous
              </button>
            </li>
            <li>
              <button
                className="px-1 ml-1 border rounded cursor-pointer hover:bg-blue-900 hover:text-blue-100 disabled:bg-neutral-400 disabled:cursor-auto"
                disabled={isLastPage}
                onClick={handleNextPage}
              >
                next
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
