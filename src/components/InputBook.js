import React from 'react';

export default function InputBook() {
  return (
    <form className="form-add__book">
      <input type="text" name="title" id="title" placeholder="Book Title" />
      <input type="text" name="category" id="category" placeholder="Book Author" />
      <input type="submit" name="submit" id="submit" value="Add Book" />
    </form>
  );
}
