import React from "react";
import "./Section.css";
import eye from "../../../../assets/img/eye.png";
import kesh from "../../../../assets/img/kesh.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const Section = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "news")
      .then((res) => setNews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "news?is_primary=true")
      .then((res) => setFilter(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();

  return (
    <div className="section">
      <div className="container">
        <div className="section-list">
          <img src={`${BASE_URL}uploads/images/${filter.img_src}`} alt="" className="section-img" />
          <div className="section-item">
            <div className="section-items">
              <button className="section-btn">
                {!!filter && filter[`news_type_${i18next?.language}`]}
              </button>
              <span className="section-span">
                <img src={eye} alt="" className="section-icon" />
                <p className="section-sub">
                  {filter?.viewers} {t("views")}
                </p>
              </span>
              <span className="section-span">
                <img src={kesh} alt="" className="section-icon" />
                <p className="section-sub">
                  {!!filter?.createdAt && filter?.createdAt.slice(0, 10)}
                </p>
              </span>
            </div>
            <h2 className="section-name">
              {!!filter && filter[`title_${i18next?.language}`]}
            </h2>
            <p className="section-text">
              {!!filter && filter[`text_${i18next?.language}`]}
            </p>
            <Link to={`/news/about=${filter?.id}`} className="section-link">
              {t("batafsil")}
            </Link>
          </div>
        </div>
        <h2 className="section-name section-names">{t("news")}</h2>

        <div className="section-page">
          {news?.map((evt, i) => (
            <div key={i} className="section-title">
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to={`/news/about=${evt?.id}`}
              >
                <img
                  src={`${BASE_URL}uploads/images/${evt.img_src}`}
                  alt=""
                  className="section-pic"
                />
                <h6 className="section-subname">
                  {evt[`title_${i18next?.language}`]}
                </h6>
                <p className="section-subtext">
                  {evt[`text_${i18next?.language}`]}
                </p>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={`/news/about=${evt?.id}`}
                  className="section-links"
                >
                  {t("link")}
                </Link>
              </Link>
            </div>
          ))}
        </div>
        <div className="section-titles">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/news"
            className="section-button"
          >
            {t("link")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
