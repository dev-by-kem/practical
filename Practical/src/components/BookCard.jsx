import { Link } from "react-router-dom";

export default function BookCard({ book }) {
    return (
        <div className="book-card">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
    )
}