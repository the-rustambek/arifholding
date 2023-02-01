import React from "react";
import "./Footer.css";
import arif from "../../assets/img/arif.png";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/instagram";
import Twitter from "../../assets/icons/twitter";
import Facebook from "../../assets/icons/facebook";
import Github from "../../assets/icons/github";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footer-text">{t("xojalik")}</p>
            </div>
            <p className="footer-texts">{t(`footer2`)}</p>
            <ul className="footer-lists">
              <li className="footer-items">
                <a href="https://www.instagram.com" className="footer-links">
                  <Instagram />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.twitter.com" className="footer-links">
                  <Twitter />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.facebook.com" className="footer-links">
                  <Facebook />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.github.com" className="footer-links">
                  <Github />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.instagram.com" className="footer-links">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-name">{t("company")}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <Link onClick={() => window.scrollTo({ top: 500 })} to="/" className="footer-link">
                  {t(`head3`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 2800 })}
                  to="/"
                  className="footer-link"
                >
                  {t(`head2`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/news" className="footer-link">
                  {t(`head5`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 4800 })}
                  to="/"
                  className="footer-link"
                >
                  {t(`party`)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-name"> {t(`head4`)}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998995595353" className="footer-link">
                  +998995595353
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footer-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arifgroup.uz" className="footer-link">
                  info@arifgroup.uz
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  {t("manzil")} <br />
                  {t("manzil1")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
