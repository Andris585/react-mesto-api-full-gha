import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import * as mestoAuth from "../utils/mestoAuth";
import InfoToolTip from "./InfoToolTip";
import successPic from "../images/success.png";
import failPic from "../images/fail.png";

function Register() {
  const [isToolTipOpen, setIsToolTipOpen] = React.useState(false);
  const [isSuccessPopup, setIsSuccessPopup] = React.useState(false);

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
      .register(email, password)
      .then(() => {
        setIsSuccessPopup(true);
        setIsToolTipOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessPopup(false);
        setIsToolTipOpen(true);
      });
  };

  return (
    <>
      <Header />
      <div>
        <div className="sign-in__container">
          <h2 className="sign-in__title">Регистрация</h2>

          <form
            action="#"
            className={`popup__form`}
            name="sign-up-form"
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
              Зарегистрироваться
            </button>
            <div className="sign-in__button-subtitle-container">
              <h3 className="sign-in__button-subtitle">
                Уже зарегистрированы?
              </h3>
              <Link to="/sign-in" className="button sign-in__link">
                Войти
              </Link>
            </div>
          </form>
        </div>
      </div>
      <InfoToolTip
        name={isSuccessPopup ? "registration-success" : "registration-fail"}
        title={
          isSuccessPopup
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."
        }
        picURL={isSuccessPopup ? successPic : failPic}
        isOpen={isToolTipOpen}
        onClose={() => setIsToolTipOpen(false)}
      />
    </>
  );
}

export default Register;
