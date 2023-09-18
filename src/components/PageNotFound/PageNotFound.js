import React from 'react';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';

export function PageNotFound() {

    const navigate = useNavigate();

    function goBack () {
        navigate(-1);
    }

  return (
    <main className='not-found'>
      <h3 className='not-found__header'>
        <span className="not-found__span">404</span> 
        Cтраница не найдена
      </h3>
      <button className="not-found__button" onClick={goBack}>Назад</button>
    </main>
  )
}