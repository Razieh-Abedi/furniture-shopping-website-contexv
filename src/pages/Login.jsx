import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import loginValidation from "../validation/loginValidation";
function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorList, setErrorList] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const errors = loginValidation(userInfo);
    setErrorList(errors);

    if (errors.length == 0) {
      console.log(userInfo);

      fetch("https://fakestoreapi.com/auth/login", {
        method: "post",
        body: JSON.stringify(userInfo),
        headers: { "Content-type": "Application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      setUserInfo({ email: "", password: "" });
    }
  };
  const displayErrors = (inputName) => {
    const inputErrorList = errorList.filter((item) => item.input == inputName);
    return inputErrorList.length ? (
      <ul
        className="alert alert-danger d-flex align-items-center list-unstyled"
        role="alert"
      >
        {inputErrorList.map((item) =>
          item.input === inputName ? <li>{item.message}</li> : ""
        )}
      </ul>
    ) : (
      ""
    );
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" id="loginCard">
            <form className="card-body p-5 text-center" onSubmit={formHandler}>
              <h3 className="mb-5 fs-1">Sign in</h3>
              <div class="mb-3">
                <label for="email">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
                <div>{displayErrors("email")}</div>
              </div>
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                <div>{displayErrors("password")}</div>
              </div>
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                />
                <label className="form-check-label ms-2 " for="form1Example3">
                  {" "}
                  Remember password{" "}
                </label>
              </div>
              <button className="btn btn-primary btn-lg " type="submit">
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg w-100 mb-2"
                type="submit"
                id="googleBtn"
              >
                <i className="bi bi-google me-2"></i> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block w-100 mb-2"
                type="submit"
                id="facebookBtn"
              >
                <i className="bi bi-facebook me-2"></i>
                Sign in with facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
