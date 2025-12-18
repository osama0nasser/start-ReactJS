import styles from './Portfolio.module.css'
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port3 from '../assets/port3.png';
import { useState } from "react";
import { useEffect } from 'react';

export default function Portfolio() {
  
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const cardsData = [
    { img: port1, title: "Card 1" },
    { img: port2, title: "Card 2" },
    { img: port3, title: "Card 3" },
    { img: port1, title: "Card 4" },
    { img: port2, title: "Card 5" },
    { img: port3, title: "Card 6" },
  ];


  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (img) => {
    setSelectedImg(img);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  return <>
    <section className="contact-section py-5">
      <div className={styles.container}>

        {/* Title */}
        <h2 className="text-center fw-bold mb-3">PORTFOLIO COMPONENT</h2>

        {/* Divider */}
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className={styles.line}></div>
          <span className={styles.star}>★</span>
          <div className={styles.line}></div>
        </div>

        <div className="container">
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className={`${styles.imageCard} h-100`} onClick={() => openLightbox(card.img)}>
                  <img src={card.img} className="card-img-top" alt={card.title} />
                  <div className={styles.overlay}>
                    <span className={styles.plus}>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImg && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <img src={selectedImg} alt="Enlarged" className={styles.lightboxImg} />
          </div>
        )}
      </div>
    </section>
  </>
}
