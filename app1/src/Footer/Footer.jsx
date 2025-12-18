import React from 'react'
import './Footer.css'


export default function Footer() {
  return <>

    <footer>
      <div className="top-sec text-light py-5">
        <div className="container py-5">
          <div className="row text-center">

            <div className="col-lg-4 mb-4 mb-lg-0 ">
              <h4 className="fw-bold">LOCATION</h4>
              <p className="mb-1">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <h4 className="fw-bold">AROUND THE WEB</h4>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <i className="fa-brands fa-facebook fs-4"></i>
                <i className="fa-brands fa-twitter fs-4"></i>
                <i className="fa-brands fa-linkedin fs-4"></i>
                <i className="fa-brands fa-github fs-4"></i>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <h4 className="fw-bold">ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="bot-sec text-light text-center py-3">
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </footer>


  </>
}



