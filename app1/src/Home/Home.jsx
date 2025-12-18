import React from 'react'
import avatar from '../assets/avataar.svg';
import style from './Home.module.css'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <>
    <div className={`${style.home} d-flex flex-column justify-content-center align-items-center text-light`}>
      <img src={avatar} alt="star" width="250" />

      <h1 className='mt-5'>START FRAMEWORK</h1>

      <div className={`${style.divider}`}>
        <div className={style.line}></div>
        <div className={style.star}>★</div>
        <div className={style.line}></div>
      </div>

      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>

  </>
}
