import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BookData from './data/books.json';

export default function App() {
  const [books, setBooks] = useState(BookData);
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />
        <Route path="/addbook" element={<AddBook onAddBook={handleAddBook} />} />
      </Routes>
    </BrowserRouter>
  )
}
