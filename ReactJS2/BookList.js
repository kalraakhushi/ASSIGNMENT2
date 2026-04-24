import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A classic novel set in the Jazz Age.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A story of racial injustice and childhood innocence.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: '1984', author: 'George Orwell', description: 'A dystopian novel about totalitarianism.', imageUrl: 'https://via.placeholder.com/150' }
];

function BookList() {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
            <br />
            <Link to={`/books/${book.id}`}>
              <button>Read More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
export { books };