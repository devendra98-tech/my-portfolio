import React from "react";

export default function ContactSection() {
  return (
    <section
      className="contact"
      id="contact"
      style={{ backgroundColor: " #f9f9f9" }}
    >
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Don't be shy</div>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Devendra Golakoti</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Hyderabad</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">mrgolakoti@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea placeholder="Message.." required></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
