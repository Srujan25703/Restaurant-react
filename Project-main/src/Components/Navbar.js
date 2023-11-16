import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLoginPage = () => {
    window.open("/Login", "_blank");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h3 className="navbar-text text-white m-0 p-0">Plates&Pleasure</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {" "}
            {/* Utilize 'me-auto' to push the button to the right */}
            <li className="nav-item" onClick={() => scrollToSection("home")}>
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("about")}>
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("menu")}>
              <a className="nav-link text-white" href="/menu">
                Menu
              </a>
            </li>
            {/* <li className="nav-item" onClick={() => scrollToSection("gallery")}>
              <a className="nav-link text-white" href="/gallery">
                Gallery
              </a>
            </li> */}
            <li className="nav-item" onClick={() => scrollToSection("chefs")}>
              <a className="nav-link text-white" href="/chefs">
                Chefs
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("contact")}>
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => scrollToSection("contact=")}
            >
              <a className="nav-link text-white" href="/book-table">
                Boook Table
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                id="signin-button"
                onClick={openLoginPage}
                className="btn btn-secondary m-0 p-0"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
