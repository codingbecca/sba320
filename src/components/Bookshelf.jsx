import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Book from "./Book";

export default function Bookshelf({ bookshelf, dispatch }) {
  const ref = useRef(null);

  const handleClick = (book) => {
    dispatch({ type: "remove_from_shelf", payload: book });
  };

  const reactToPrintFn = useReactToPrint({
    documentTitle: "bookshelf",
    contentRef: ref,
  });

  return (
    <div className="flex flex-col justify-center">
      <div
        className="bookshelf flex flex-wrap justify-center items-center m-4 border rounded-sm"
        ref={ref}
      >
        {bookshelf.map((book) => (
          <div
            onClick={() => handleClick(book)}
            key={book.id}
          >
            <Book
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
            />
          </div>
        ))}
      </div>
      {bookshelf.length > 0 && 
      <button
        onClick={() => reactToPrintFn()}
        className="border rounded-sm px-2 mb-5 self-center cursor-pointer hover:bg-blue-900 hover:text-blue-100 "
      >
        print bookshelf
      </button>}
    </div>
  );
}
