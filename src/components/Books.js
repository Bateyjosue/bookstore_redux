import React from 'react';
import Book from './Book';
import InputBook from './InputBook';
import {uid} from 'uid';

const Books = () => (
  <div>
    <Book key={uid(4)} />
    <div className="new-book">
      <InputBook />
    </div>
  </div>
);

export default Books;
