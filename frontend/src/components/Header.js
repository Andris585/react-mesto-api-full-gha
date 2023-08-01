import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__container">
        {props.userData && (
          <p className="header__email">{props.userData.email}</p>
        )}
        {location.pathname === "/" && (
          <Link
            to="/sign-in"
            replace
            onClick={props.signOut}
            className="header__link button"
          >
            Выйти
          </Link>
        )}
        {location.pathname === "/sign-in" && (
          <Link to="/sign-up" replace className="header__link button">
            Регистрация
          </Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link
            to="/sign-in"
            replace
            className="header__link button"
          >
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
