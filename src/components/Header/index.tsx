import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import Container from "../Container";
import { useAuth } from "../../hooks/useAuth";
import { FaBars, FaEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
//TODO Сделать клик аутсайд для моб меню
const Header = () => {
  const { isLoggedIn, user } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 524) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("user in header", user?.username);
  return (
    <header className="header">
      <Container>
        <nav className={`nav ${isMobileMenuOpen ? "nav__open" : ""}`}>
          <button className="nav__toggle" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
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
                  <FaEdit className="nav__item-icon" />
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
                  <IoMdSettings className="nav__item-icon" />
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
                  <img
                    className="nav__item-user-img"
                    src={user?.image}
                    alt={user?.username}
                  />

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
