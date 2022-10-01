import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import style from './style/category.module.css';

export default function Category() {
  const status = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button
        type="button"
        id="submit"
        onClick={handleCheckStatus}
        className={style.btn__submit}
      >
        Add Book
      </button>
      <h1 className={style.status}>{status}</h1>
    </div>
  );
}
