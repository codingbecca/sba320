import Book from "./Book";

export default function SearchResults({ books, dispatch }) {

    const handleClick = (bookInfo) => {
        dispatch({type: 'add_to_shelf', payload: bookInfo})
    }

  return (
    <div className="flex flex-wrap justify-center items-end">
      {books.map((book, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <Book thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} />
          <button className="cursor-pointer bg-blue-800 hover:bg-blue-900 text-blue-50 hover:text-blue-100 px-2 pb-0.5 mt-0.5 font-bold"
            onClick={() => handleClick(book)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
