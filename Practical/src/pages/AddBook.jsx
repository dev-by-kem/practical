import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook({ onAddBook }) {
  const navigate = useNavigate();

  // One state variable per form field
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    const newBook = {
      id: Date.now(), // simple unique id
      title: title,
      author: author,
      genre: genre,
    };

    onAddBook(newBook); // send it up to App (state lifting)
    setTitle("");       // clear the form
    setAuthor("");
    setGenre("");
    navigate("/books"); // redirect to the list
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            name="genre"
            value={genre}
            required
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
