import React from "react";
import BookTable from "./BookTable";
function HeroSection() {
  return (
    <section
      id="hero"
      className="position-relative d-flex align-items-center text-white"
    >
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span className="yellow-text">Plates&Pleasure</span>
            </h1>
            <h4>Savor the Flavor: Our Journey Begins!</h4>
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM7 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm.5 3.5a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5H7.5V3.5z" />
              </svg>
              <span>Mon-Sun: 11AM - 11PM</span>
            </div>

            <div className="btns d-flex">
              <a
                href="#menu"
                className="btn btn-outline-light btn-transparent box-btn animated fadeInUp scrollto mx-2"
              >
                Our Menu
              </a>
              <a
                href="/book-table"
                className="btn btn-outline-light btn-transparent box-btn animated fadeInUp scrollto mx-2"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
