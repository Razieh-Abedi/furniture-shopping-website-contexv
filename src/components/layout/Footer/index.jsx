import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="bg-light border border-top-1">
      <div className="container text-center pt-2 mt-3">
        <section className="mb-1">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-facebook me-2"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="bi bi-twitter"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-google me-2"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </section>
        <hr />
      </div>
      <div className="text-center p-2">
        <a
          href="https://raziwebdeveloper.com/"
          target="_blank"
          className="text-muted text-decoration-none"
        >
          Developed with ❤ by raziwebdeveloper.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
