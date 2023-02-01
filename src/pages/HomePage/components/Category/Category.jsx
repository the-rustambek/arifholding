import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import HorizontalScroll from "react-scroll-horizontal";
import scroll from "../../../../assets/img/scroll.jpg";
import { BASE_URL } from "../../../../services";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Category = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "companies")
      .then((res) => setCompany(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();

  return (
    <div className="category">
      <div className="container">
        <HorizontalScroll
          style={{ overflow: "none", paddingBottom: "210px" }}
          reverseScroll={true}
        >
          {company?.map((evt, i) => (
            <div key={i} className="category-page">
              <div className="category-left">
                <h2 className="category-name">{t("arif")}</h2>
                <p className="category-text">{t("loyiha")}</p>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="category-link"
                  to={`/enterprice=${evt?.id}`}
                >
                  {t("batafsil")}
                </Link>
              </div>
              <div className="mains">
                <div className="category-right">
                  <img
                    src={`${BASE_URL}uploads/images/${evt.img_src}`}
                    alt=""
                    className="category-img"
                  />
                  <h3 className="category-subname">
                    {evt[`title_${i18next.language}`]}
                  </h3>
                  <p className="category-subtext">
                    {evt[`description_${i18next.language}`]}
                  </p>
                  <div className="category-list-link">
                    <Link
                      onClick={() => window.scrollTo({ top: 0 })}
                      className="category-link"
                      to={`/enterprice=${evt?.id}`}
                    >
                      {t("batafsil")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScroll>
        <p className="category-texts">
          {t("scroll")}
          <img src={scroll} alt="" className="category-logo" />{" "}
        </p>
      </div>
    </div>
  );
};

export default Category;
