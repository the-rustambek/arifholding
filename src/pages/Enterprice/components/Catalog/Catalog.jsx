import React from "react";
import "./Catalog.css";
import { Link, useParams } from "react-router-dom";
import arrow from "../../../../assets/img/row.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../../../services";
import SliderPage from "../Slider/Slider";

const Catalog = () => {
  const [t, i18next] = useTranslation();
  var { id } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + `companies/${id}`)
      .then((res) => setCompany(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="catalog">
        <div className="container">
          <h2 className="catalog-name">{t("enterprice")}</h2>
          <p className="catalog-subtext">
            <Link to="/" className="catalog-home">
              {t("home")}
            </Link>
            <img src={arrow} alt="" className="catalog-img" />
            <span>{t("enterprice1")}</span>
          </p>
          <h3 className="catalog-subname">
            {company[`title_${i18next.language}`]}
          </h3>
          <p className="catalog-text">
            {company[`description_${i18next.language}`]}
          </p>
        </div>
      </div>
      <img  src={`${BASE_URL}uploads/images/${company.img_src}`} alt="" className="catalog-imgs" />

      <SliderPage company={company} />
    </>
  );
};

export default Catalog;
