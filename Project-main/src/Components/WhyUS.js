import React from 'react';

function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4>Why Us</h4>
          <h2>Why Choose Our Restaurant</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="box">
              <span>01</span>
              <h4>Authentic South Indian Flavors</h4>
              <p>At Plates&Pleasure, we take pride in delivering the true taste of South India. Our experienced chefs use time-honored recipes and authentic ingredients to recreate the rich and diverse flavors of the region.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="box">
              <span>02</span>
              <h4>Family-Friendly Atmosphere</h4>
              <p>We're proud to provide a family-friendly environment where everyone, from the youngest to the oldest diners, can enjoy a memorable meal together.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="box">
              <span>03</span>
              <h4>Vegetarian and Vegan Delights</h4>
              <p>We offer a diverse selection of vegetarian and vegan-friendly options. Our menu caters to a variety of dietary preferences, ensuring that everyone can savor the flavors of South India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;