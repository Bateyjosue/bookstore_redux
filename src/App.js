/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Category from './components/Category';

const App = () => (
  <div>
    <header>
      <div className="log">BookStore</div>
      <nav>
        <Link to="/">Books </Link>
        <Link to="/category">Categories</Link>
      </nav>
      <div className="profile">
        <a href="#">
          <span className="material-symbols-outlined">account_circle</span>
        </a>
      </div>
      <div className="menu-hamberger">
        <div />
        <div />
        <div />
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </div>
);

export default App;
