import React from 'react';
import chef1 from '../Images/Chefs/chef-1.jpg'; 
import chef2 from '../Images/Chefs/chef-2.png';
import chef3 from '../Images/Chefs/chef-3.jpg';

const Chefs = () => {
  return (
    <section id="chefs" className="chefs-section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4>Chefs</h4>
          <h2>Our Proffesional Chefs</h2>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="chef-item">
              <a href={chef1} className="chef-lightbox" data-gall="chef-item">
                <img src={chef1} alt="Sanjay Thumma" className="img-fluid chef-image" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chef-item">
              <a href={chef2} className="chef-lightbox" data-gall="chef-item">
                <img src={chef2} alt="Aruna Vijay" className="img-fluid chef-image" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chef-item">
              <a href={chef3} className="chef-lightbox" data-gall="chef-item">
                <img src={chef3} alt="Hari Nayak" className="img-fluid chef-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
