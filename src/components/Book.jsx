export default function Book({title, authors = ['Unknown author'], thumbnail}) {
    return(
        <div className="book mx-3 mt-5 flex items-center">
            <img src={thumbnail} alt={`${title} by ${authors.join(', ')}`} />
        </div>
    )
}