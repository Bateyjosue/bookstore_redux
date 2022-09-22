import React, {useState} from 'react';
import Book from './Book';
import InputBook from './InputBook';
import {uid} from 'uid';
import {useDispatch} from 'react-redux';
import { addBook } from '../redux/books/books';

function Books (){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(addBook({ [name]: [value]}));
  };
  return (
  <div>
    <Book key={uid(4)} />
    <div className="new-book">
      <InputBook title={title} author={author}
      setTitle={setTitle} setAuthor={setAuthor} handleSubmit={ handleSubmit }/>
    </div>
  </div> 
  )
};

export default Books;
