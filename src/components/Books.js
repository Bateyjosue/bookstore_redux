import React, { useState } from 'react';
import { uid } from 'uid';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { addBook } from '../redux/books/books';

function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const newBook = {
      item_id: uid(10),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <Book />
      <div className='new-book'>
        <h2>ADD NEW BOOK</h2>
        <form className='form-add__book'>
          <input
            type='text'
            value={title}
            name='title'
            placeholder='Book Title'
            onChange={handleTitle}
          />
          <input
            type='text'
            value={author}
            name='author'
            placeholder='Book Author'
            onChange={handleAuthor}
          />
          <button type='button' onClick={handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Books;
