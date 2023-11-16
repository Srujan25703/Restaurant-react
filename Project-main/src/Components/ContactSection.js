import React from 'react';

function ContactSection() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h4>Contact</h4>
            <h2>Contact Us</h2>
          </div>
        </div>

        <div data-aos="fade-up">
          <iframe
            title="Google Map"
            width="1500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.785225365104!2d78.38912893009986!3d17.431062087228593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1698641854302!5m2!1sen!2sin"
            
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            {/* Left column */}
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>ABC Street, XYZ, India 500033</p>
                </div>

                <div className="open-hours">
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Sunday:<br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>platespleasure@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 11111 11111</p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php" // Replace with your form handling URL
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactSection;