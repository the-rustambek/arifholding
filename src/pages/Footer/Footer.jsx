import React from "react";
import "./Footer.css";
import arif from "../../assets/img/ariff.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footerr">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footerr-text">{t("xojalik")}</p>
            </div>
            <p className="footerr-texts">{t(`footer2`)}</p>
            <ul className="footer-lists">
              <li className="footerr-items">
                <a href="https://www.instagram.com" className="footerr-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="https://www.twitter.com" className="footerr-links">
                  <img src={twitter} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="https://www.facebook.com" className="footerr-links">
                  <img src={facebook} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="https://www.github.com" className="footerr-links">
                  <img src={github} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="https://www.instagram.com" className="footerr-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footerr-name">{t("company")}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="footerr-link"
                >
                  {t(`head3`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 3200 })}
                  to="/"
                  className="footerr-link"
                >
                  {t(`head2`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to="/news"
                  className="footerr-link"
                >
                  {t(`head5`)}
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 8300 })}
                  to="/"
                  className="footerr-link"
                >
                  {t(`party`)}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footerr-name"> {t(`head4`)}</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998995595353" className="footerr-link">
                  +998995595353
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footerr-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arifgroup.uz" className="footerr-link">
                  info@arifgroup.uz
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footerr-link">
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
