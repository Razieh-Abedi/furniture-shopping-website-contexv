import React, { useState, useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import favoritesContext from "../../contexts/favoritesContext";
import QtyTotalContext from "../../contexts/QtyTotalContext";
import "./Card.css";

function Card({ id, img, price, name, des, rate }) {
  const [qtyTotal, setQtyTotal] = useContext(QtyTotalContext);
  const [favorites, setFavorites] = useContext(favoritesContext);

  //  To change the heart icon when liked
  const [heartState, setHeartState] = useState(false);
  const changeHeartIcon = () => {
    setHeartState(!heartState);
  };
  const heartIcon = heartState ? <FaHeart /> : <FaRegHeart />;

  // To set the number of likes
  const [likes, setLikes] = useState(rate.count);
  const changeLikes = () => {
    if (!heartState) {
      setLikes(likes + 1);
    } else {
      setLikes(rate.count);
    }
  };
  const heartClick = () => {
    changeLikes();
    if (!heartState) {
      setFavorites(favorites + 1);
    } else {
      setFavorites(favorites - 1);
    }
    changeHeartIcon();
  };
  // To change the border color of the card when clicked on
  const [borderState, setBorderState] = useState(false);
  const changeStyle = () => {
    setBorderState(!borderState);
  };
  const borderStyle = {
    border: borderState ? "1px solid yellow" : "1px solid black",
  };
  //To show the description when clicked on read more button
  const [textShow, setTextShow] = useState(false);
  const textShowStyle = {
    display: textShow ? "block" : "none",
  };
  const [readMoreBtn, setReadMoreBtn] = useState(false);
  const readMoreBtnStyle = {
    display: readMoreBtn ? "none" : "block",
  };
  const readMoreBtnClicked = () => {
    setTextShow(!textShow);
    setReadMoreBtn(!readMoreBtn);
    setReadLessBtn(!readLessBtn);
  };
  //To hide the description when clicked on read less button
  const [readLessBtn, setReadLessBtn] = useState(false);
  const readLessBtnStyle = {
    display: readLessBtn ? "block" : "none",
  };
  const readLessBtnClicked = () => {
    setReadLessBtn(!readLessBtn);
    setTextShow(!textShow);
    setReadMoreBtn(!readMoreBtn);
  };
  //To show the number section when clicked on add to cart button
  const [cartNumberState, setCartNumberState] = useState(false);
  const cartNumberStyle = {
    display: cartNumberState ? "flex" : "none",
    justifyContent: "center",
  };
  //To add the quantity in the cart
  const [qty, setQty] = useState(0);
  const addCartCount = () => {
    setQty(qty + 1);
    setQtyTotal(qtyTotal + 1);
  };
  //To subtract the quantity in the cart and hide the number section when the cart is empty
  const subtractCartCount = () => {
    if (qty <= 1) {
      //1
      setTimeout(() => {
        setCartNumberState(false);
      }, 500);
    }
    setQty(qty - 1); //0
    setQtyTotal(qtyTotal - 1);
  };
  const clickedOnAddToCart = () => {
    addCartCount();
    setCartNumberState(true);
  };

  return (
    <div className="col ">
      <div
        className="card card-main text-center"
        id={id}
        style={borderStyle}
        onClick={changeStyle}
      >
        <img
          src={img}
          className="card-img-top h-50 w-100"
          alt="image of a hotel room"
        />
        <div className="card-body h-50 d-flex flex-column justify-content-between">
          <h5 className="card-title fw-bold">{name}</h5>
          <div>
            <div className="d-flex justify-content-center my-2">
              <a href="#" className="text-danger mx-2 " onClick={heartClick}>
                {heartIcon}
              </a>
              <div className="likes">Liked by: {likes}</div>
            </div>
            <p>Price: {price} $</p>
          </div>
          <p className="card-text">{des}</p>
          <div>
            <button
              className="btn btn-info w-50 m-auto"
              style={readMoreBtnStyle}
              onClick={readMoreBtnClicked}
            >
              Read More
            </button>
            <button
              className="btn btn-warning m-auto w-50"
              style={readLessBtnStyle}
              onClick={readLessBtnClicked}
            >
              Read Less
            </button>
            <p style={textShowStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem distinctio, voluptate quisquam numquam blanditiis
              repellendus ea consequatur. Repudiandae quasi, quis vero cum fugit
              nulla error consequuntur, quo nobis, hic voluptatem.
            </p>
            <div>
              <button
                className={`btn btn-warning mx-auto w-100 my-2
                 ${cartNumberState ? "d-none" : "d-block"}`}
                onClick={clickedOnAddToCart}
              >
                Add To Cart
              </button>
              <div style={cartNumberStyle} className="my-2">
                <button
                  className="btn btn-warning px-3 fs-3 ms-2"
                  onClick={subtractCartCount}
                >
                  -
                </button>
                <span className="btn btn-light px-3 fs-4 ms-2">{qty}</span>
                <button
                  className="btn btn-info px-3 fs-3 ms-2"
                  onClick={addCartCount}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
