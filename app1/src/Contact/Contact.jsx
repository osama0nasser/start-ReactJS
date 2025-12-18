import React from "react";
import style from "./Contact.module.css";
import { useEffect } from 'react';

export default function Contact() {
  
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="contact-section py-5">
      <div className={style.container}>

        {/* Title */}
        <h2 className="text-center fw-bold mb-3">CONTACT SECTION</h2>

        {/* Divider */}
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className={style.line}></div>
          <span className={style.star}>★</span>
          <div className={style.line}></div>
        </div>

        {/* Form */}
        <form className={`${style.contactform} mx-auto`}>
          <div className="mb-4">
            <input
              type="text"
              className={`form-control ${style.custominput}`}
              placeholder="userName"
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              className={`form-control ${style.custominput}`}
              placeholder="userAge"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              className={`form-control ${style.custominput}`}
              placeholder="userEmail"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className={`form-control ${style.custominput}`}
              placeholder="userPassword"
            />
          </div>

          <button type="submit" className="btn btn-success px-4">
            send Message
          </button>
        </form>

      </div>
    </section>
  );
}

