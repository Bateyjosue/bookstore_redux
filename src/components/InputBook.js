import React from 'react';

function InputBook(props) {
  const { title, author } = props;
    <form className="form-add__book">
      <input
        type="text"
        value={title}
        name="title"
        id="title"
        placeholder="Book Title"
        onChange={() => props.handleTitleChange}
      />
      <input
        type="text"
        value={author}
        name="author"
        id="author"
        placeholder="Book Author"
        onChange={() => props.handleAuthorChange}
      />
      <button type="button" id="submit" onClick={props.handleSubmit}>Add Book</button>
    </form>;
}

export default InputBook;
