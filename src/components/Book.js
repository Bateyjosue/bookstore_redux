/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook, getBooks } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();
  function handleClickRemove(e) {
    dispatch(removeBook(e.target.id));
  }
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <main>
      <div className="card">
        <article>
          {books.map((book) => (
            <>
              <div className="card-books__info">
                <ul>
                  <li id={book.item_id}>{book.category}</li>
                  <li>
                    <h1>{book.title}</h1>
                  </li>
                  <li>{book.author}</li>
                  <li>
                    <a href="#">Comments</a>
                    <button
                      type="button"
                      id={book.item_id}
                      onClick={handleClickRemove}
                    >
                      Remove
                    </button>
                    <a href="#">Edit</a>
                  </li>
                </ul>
              </div>
              <div className="card-books__stat">
                <span className="stat-progress__bard" />
                <div>
                  <span className="stat-progress__percent">64%</span>
                  <span className="stat-progress__state">Completed</span>
                </div>
              </div>
              <div className="card-books__update">
                <ul>
                  <li>CURRENT CHAPTER</li>
                  <li>Chapter 17</li>
                  <li>
                    <button type="button" className="update__progress">
                      UPDATE PROGRESS
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ))}
        </article>
      </div>
    </main>
  );
};

export default Book;
