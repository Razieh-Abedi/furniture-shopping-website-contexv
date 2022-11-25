import React from "react";
import pic1 from "../assets/media/images/letter.jpg";
function Contact() {
  return (
    <div className="contact1">
      <div className="container-contact1 px-0">
        <div className="contact1-pic js-tilt w-50" data-tilt>
          <img
            src={pic1}
            alt="an image of a letter"
            className="rounded-1"
          />
        </div>

        <div className="contact1-form validate-form">
          <div
            className="wrap-input1 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Subject is required"
          >
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn ">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
