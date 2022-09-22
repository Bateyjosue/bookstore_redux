import React, {useState} from 'react';
import Book from './Book';
// import InputBook from './InputBook';
import {uid} from 'uid';
import {useDispatch} from 'react-redux';
import { addBook } from '../redux/books/books';

function Books (){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const newBook = {
      id: uid(10),
      title,
      author
    }
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
  <div>
    <Book />
    <div className="new-book">

    <form className="form-add__book">
      <input type="text" value={title} 
        name="title"
        placeholder="Book Title"
        onChange={handleTitle}
      />
      <input type="text" value={author} 
        name="author"
        placeholder="Book Author"
        onChange={handleAuthor}
      />
      <button type="button" onClick={handleSubmit}>Add Book</button>
    </form>

    </div>
  </div> 
  )
};

export default Books;
