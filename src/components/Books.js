import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => (
  <div>
    <Book title="Book One" author="Josh Batey" />
    <Book title="Book Two" author="Ruth G." />
    <div className="new-book">
      <InputBook />
    </div>
  </div>
);

export default Books;
