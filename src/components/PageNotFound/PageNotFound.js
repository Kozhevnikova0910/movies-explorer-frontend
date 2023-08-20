import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export function PageNotFound() {
  return (
    <main className='not-found'>
      <h3 className='not-found__header'>
        <span className="not-found__span">404</span> 
        Cтраница не найдена
      </h3>
      <Link className="not-found__button" to="/">Назад</Link>
    </main>
  )
}