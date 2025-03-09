export default function Book({title, thumbnail}) {
    return(
        <div className="book mx-3 mt-5">
            <img src={thumbnail} alt={title} />
        </div>
    )
}