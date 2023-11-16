import React from 'react';
import gallery2 from '../Images/Gallery/gallery-2.jpg'; 
import gallery5 from '../Images/Gallery/gallery-5.jpg';
import gallery6 from '../Images/Gallery/gallery-6.jpg';
import gallery7 from '../Images/Gallery/gallery-7.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4>Gallery</h4>
          <h2>Some photos from Our Restaurant</h2>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={gallery2} className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery2} alt="Gallery 2" className="img-fluid gallery-image" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={gallery5} className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery5} alt="Gallery 5" className="img-fluid gallery-image" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={gallery6} className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery6} alt="Gallery 6" className="img-fluid gallery-image" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={gallery7} className="gallery-lightbox" data-gall="gallery-item">
                <img src={gallery7} alt="Gallery 7" className="img-fluid gallery-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
