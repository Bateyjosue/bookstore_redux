/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook, getBooks } from '../redux/books/books';
import style from './style/Book.module.css';

const ul = {
  listStyle: 'none',
};
const cardBook = {
  border: '1px solid #ddd',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0rem 6rem',
  padding: '1rem 1rem',
  backgroundColor: '#fff',
};

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
      <div className={style.card}>
        {books.map((book) => (
          <article style={cardBook}>
            <>
              <div className="card-books__info">
                <ul style={ul}>
                  <li
                    className={style.card_books__info__category}
                    id={book.item_id}
                  >
                    {book.category}
                  </li>
                  <li className={style.card_books__info__title}>
                    <h1>{book.title}</h1>
                  </li>
                  <li className={style.card_books__info__author}>
                    {book.author}
                  </li>
                  <li className={style.card_books__info__action}>
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
                <div className={style.progression} />
                <div>
                  <span className={style.stat_progress__percent}>64%</span>
                  <span className={style.stat_progress__completed}>
                    Completed
                  </span>
                </div>
              </div>
              <div className={style.hr} />
              <div className={style.card_books__update}>
                <ul style={ul}>
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
          </article>
        ))}
      </div>
    </main>
  );
};

export default Book;
