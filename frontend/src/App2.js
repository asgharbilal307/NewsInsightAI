import React, { useEffect, useState } from "react";
import "./App.css";

function App2() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/books")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setBooks(data);
    });
}, []);


  return (
    <div className="container">
      <h2 className="heading">📚 Book List</h2>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App2;