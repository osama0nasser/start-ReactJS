import React from 'react'
import style from './About.module.css'
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    document.title = "About";
  }, []);

  return <>
    <div className={`${style.about} d-flex flex-column justify-content-center align-items-center text-light`}>

      <h1>ABOUT COMPONENT</h1>

      <div className={`${style.divider} my-4`}>
        <div className={style.line}></div>
        <div className={style.star}>★</div>
        <div className={style.line}></div>
      </div>

      <div className={`${style.parags} d-flex`}>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>

  </>
}
