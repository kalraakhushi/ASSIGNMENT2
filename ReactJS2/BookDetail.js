import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from './BookList';

function BookDetail() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      {book.imageUrl && <img src={book.imageUrl} alt={book.title} />}
    </div>
  );
}

export default BookDetail;