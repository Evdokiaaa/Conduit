import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <Link className="nav__logo" to="/">
            conduit
          </Link>
        </div>
        <ul className="nav__items">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__item-link active" : "nav__item-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item-link active" : "nav__item-link"
              }
              to="/login"
            >
              Sign in
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__item-link active" : "nav__item-link"
              }
              to="/register"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
