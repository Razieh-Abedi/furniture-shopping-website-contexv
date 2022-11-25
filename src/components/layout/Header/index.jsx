import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import favoritesContext from "../../../contexts/favoritesContext";
import QtyTotalContext from "../../../contexts/QtyTotalContext";
import "./Header.css";

function Header() {

  const [qtyTotal]  = useContext(QtyTotalContext)
  const [favorites] = useContext(favoritesContext)
  //to change login/logout buttons
  const [loginLogout, setLoginLogout] = useState(false);
  const changeLogin = () => {
    setLoginLogout(!loginLogout);
  };
  // to connect to back-end API
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //alert for clicking on singout button
  const singoutAlert = () => {
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "You have successfully signed out",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="bg-light shadow-sm">
      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center  align-items-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link px-2 link-dark">
                Contact Us
              </Link>
            </li>
            <li className="nav-link px-2 link-dark" onClick={changeLogin}>
              {!loginLogout ? (
                <button type="button" className="btn btn-info text-dark">
                  <Link to="/login" className="text-decoration-none text-dark">
                    Log in
                  </Link>
                </button>
              ) : (
                <button
                  onClick={singoutAlert}
                  type="button"
                  className="btn  btn-warning "
                >
                  <Link to="/" className="text-decoration-none text-dark">
                    Sing out
                  </Link>
                </button>
              )}
            </li>
          </ul>

          <div className="col-md-3 text-end position-relative">
            <button type="button" class="btn btn-info position-relative ">
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {qtyTotal}
                <span class="visually-hidden">products in the cart</span>
              </span>
            </button>
            <button type="button" class="btn btn-info ms-4">
              Favorites <span class="badge bg-secondary">{favorites}</span>
            </button>
          </div>
        </header>
      </div>
      <div className="text-center pb-1">
        <ul>
          <li className="list-unstyled d-inline">
            {category.map((item) => (
              <Link to="./" className="text-dark mx-2 text-decoration-none">
                {item}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
