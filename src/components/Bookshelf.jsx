import Book from "./Book";

export default function Bookshelf({bookshelf, dispatch}) {
    const handleClick = (book) => {
        dispatch({type: 'remove_from_shelf', payload: book})
    }

    return(
        <div className="bookshelf flex flex-wrap justify-center m-4 pb- border">
            {bookshelf.map((book) => (
                <div onClick={()=>handleClick(book)} key={book.volumeInfo.industryIdentifiers[0]['identifier']}>
                    <Book thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title}  />
                </div>
            ))}
        </div>
    )
}