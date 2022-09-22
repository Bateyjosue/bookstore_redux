import React from 'react';

 const InputBook = (props) => {
  
  return (
    <form className="form-add__book">
      <input type="text" value={props.title} 
        name="title" id="title" 
        placeholder="Book Title"
        onChange={() => props.handleTitleChange}
      />
      <input type="text" value={props.author} 
        name="author" id="author" 
        placeholder="Book Author"
        onChange={() => props.handleAuthorChange}
      />
      <button type="button" id="submit" onClick={props.handleSubmit}>Add Book</button>
    </form>
  );
}

export default InputBook;