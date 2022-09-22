/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Book = () => {
  // const { id, title, author } = props;
  const books = useSelector((state) => state.books);
  return (
    <main>
      <div className="card">
        <article>
            { books.map((book) => (
          <><div className="card-books__info">
                <ul>
                  <li id={book.id}>Book Category</li>
                  <li><h1>{book.title}</h1></li>
                  <li>{book.author}</li>
                  <li>
                    <a href="#">Comments</a>
                    <a href="#">Remove</a>
                    <a href="#">Edit</a>
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

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };

export default Book;
