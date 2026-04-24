import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <div>
      <h1>📚 Book Explorer</h1>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;