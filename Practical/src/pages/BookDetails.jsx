import { useParams } from "react-router-dom";

export default function BookDetails({ books }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}
