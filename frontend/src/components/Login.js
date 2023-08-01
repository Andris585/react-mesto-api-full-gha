import React from "react";
import Header from "./Header";
import * as mestoAuth from "../utils/mestoAuth";

function Login(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = formValue;
    e.preventDefault();
    mestoAuth
      .authorize(email, password)
      .then(() => {
        props.handleLogin();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div>
        <div className="sign-in__container">
          <h2 className="sign-in__title">Вход</h2>

          <form
            action="#"
            className={`popup__form`}
            name="sign-in-form"
            onSubmit={handleSubmit}
          >
            <div className="popup__input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="sign-in__input"
                required
                minLength="2"
                maxLength="40"
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <div className="popup__input-container">
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                className="sign-in__input"
                required
                minLength="2"
                maxLength="200"
                autoComplete="on"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="sign-in__submit-btn">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
