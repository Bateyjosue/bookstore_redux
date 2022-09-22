/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {useDispatch} from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();
  function handleClickRemove(e){
    e.preventDefault();
    dispatch(removeBook(e.target.id));
  }
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <main>
      <div className="card">
        <article>
            { books.map((book) => (
              <>
          <div className="card-books__info">
                <ul>
                  <li id={book.id}>Book Category</li>
                  <li><h1>{book.title}</h1></li>
                  <li>{book.author}</li>
                  <li>
                    <a href="#">Comments</a>
                    <a href="#" id={book.id} onClick={handleClickRemove}>Remove</a>
                    <a href="#" >Edit</a>
                  </li>
                </ul>
              </div><div className="card-books__stat">
                  <span className="stat-progress__bard" />
                  <div>
                    <span className="stat-progress__percent">64%</span>
                    <span className="stat-progress__state">Completed</span>
                  </div>
                </div><div className="card-books__update">
                  <ul>
                    <li>CURRENT CHAPTER</li>
                    <li>Chapter 17</li>
                    <li>
                      <button type="button" className="update__progress">UPDATE PROGRESS</button>
                    </li>
                  </ul>
                </div></>
            ))}
        </article>
      </div>
    </main>
  );
};

export default Book;
