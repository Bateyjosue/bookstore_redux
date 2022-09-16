import React from 'react'

export default function Book(props) {
  return (
    <main>
      <div className="card">
        <article>
          <div className="card-books__info">
            <ul>
              <li>Book Category</li>
              <li><h1>{props.title}</h1></li>
              <li>{props.author}</li>
              <li>
                <a href="#">Comments</a>
                <a href="#">Remove</a>
                <a href="#">Edit</a>
              </li>
            </ul>
          </div>
          <div className="card-books__stat">
            <span className="stat-progress__bard"></span>
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
                <button type="button" className="update__progress">UPDATE PROGRESS</button>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  )
}
