import Book from "./Book";

export default function SearchResults({ books, bookshelf, dispatch }) {

    const handleClick = (bookInfo) => {
        dispatch({type: 'add_to_shelf', payload: bookInfo})
    }

    const bookInBookshelf = (bookshelf, book) => {
        return bookshelf.find(b => b.id === book.id) 
    }

  return (
    <div className="flex flex-wrap justify-center items-center">
      {books.map((book) => { 
        return(
        <div key={book.id} className="flex flex-col items-center">
          <Book thumbnail={book.volumeInfo.imageLinks?.thumbnail} title={book.volumeInfo.title} authors={book.volumeInfo.authors} />
          <button className="cursor-pointer bg-blue-800 hover:bg-blue-900 text-blue-50 hover:text-blue-100 px-2 pb-0.5 mt-0.5 font-bold disabled:bg-neutral-400 dark:bg-blue-700 dark:hover:bg-blue-600 rounded"
            onClick={() => handleClick(book)}
            disabled={bookInBookshelf(bookshelf, book)}
          >
            +
          </button>
        </div>
      )})}
    </div>
  );
}
