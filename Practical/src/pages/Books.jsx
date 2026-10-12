import BookCard from '../components/BookCard';

export default function Books({ books }) {
    return (
        <div>
            <h1>Books</h1>
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.id} 
                    book={book} />
                ))}
            </div>
        </div>
    )
}