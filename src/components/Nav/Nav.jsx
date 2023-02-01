import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arif from "../../assets/img/ariff.png";
import "./Nav.css";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className="nav">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/">
              {t(`head1`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3100 })}
              className="nav-link navbar-links"
              to="/"
            >
              {t(`head2`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/enterprice">
              {t(`head3`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              <img src={arif} alt="" />
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3900 })}
              className="nav-link navbar-links"
              to="/news"
            >
              {t(`head6`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/">
              {t(`head5`)}
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 6750 })}
              className="nav-link navbar-links"
              to="/"
            >
              {t(`head4`)}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
