import React from "react";
import AboutImage from "../Images/about.jpg";
import WhyUs from "./WhyUS";
function AboutSection() {
  const contentStyle = {};

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <img
                src={AboutImage}
                alt="About Us"
                style={{ width: "100%", height: "300px" }}
              />
            </div>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            style={contentStyle}
          >
            <h3>Join us for the taste of South Indian</h3>
            <p className="fst-italic">
              Plates&Pleasure promises an unforgettable visit that will leave
              you wanting more, regardless of your level of expertise with South
              Indian food. Come visit us and allow your senses to be delighted
              by the tastes and aromas of South India. Make a reservation to
              enjoy the culinary wonder of South Indian food right now.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>Our restaurant offers an
                inviting atmosphere that transports you to South India.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>Our culinary journey is a
                testament to the authenticity and passion that define South
                Indian cooking.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>Behind every tantalizing
                dish is our talented culinary team, led by our chefs, whose
                culinary prowess and dedication ensure every bite is a memorable
                one.
              </li>
            </ul>
            <p>
              We can't wait to serve you and share our passion for South Indian
              food.
            </p>
          </div>
        </div>
        <WhyUs></WhyUs>
      </div>
    </section>
  );
}

export default AboutSection;
