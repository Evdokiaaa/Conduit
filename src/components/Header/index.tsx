import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import Container from "../Container";
import { useAuth } from "../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const Header = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <header className="header">
      <Container>
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
            {isLoggedIn ? (
              <>
                <li className="nav__item">
                  <FaEdit />
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__item-link active" : "nav__item-link"
                    }
                    to="/editor"
                  >
                    New Post
                  </NavLink>
                </li>
                <li className="nav__item">
                  <IoMdSettings />
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__item-link active" : "nav__item-link"
                    }
                    to="/settings"
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="nav__item">
                  <FaRegFaceSmileBeam />
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav__item-link active" : "nav__item-link"
                    }
                    to={`/profile/${user?.username}`}
                  >
                    {user?.username}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
