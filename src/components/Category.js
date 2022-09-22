import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {checkStatus} from '../redux/categories/categories';

export default function Category() {
  const status = useSelector((state) => state.category );
  
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
    console.log(`Category: ${status}`);
  }
  return (
    <div>
      <button type="button" id="submit" onClick={handleCheckStatus}>Add Book</button>
      <h1>{status}</h1>
    </div>
  );
}
