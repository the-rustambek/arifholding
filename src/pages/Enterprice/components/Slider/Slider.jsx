import React from "react";
import "./Slider.css";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../../services";

const SliderPage = ({ company }) => {
  const [t, i18next] = useTranslation();

  return (
    <div className="slick">
      <div className="container">
        <h2 className="slick-names">{t("enterprice2")}</h2>
        <div className="slick-list">
          {company?.products?.map((evt, i) => (
            <div key={i} className="slick-item">
              <h3 className="slick-name">{evt[`name_${i18next.language}`]}</h3>
              <div className="slick-title">
                <img
                  src={`${BASE_URL}uploads/images/${evt.img_src}`}
                  alt=""
                  className="slick-img"
                />
              </div>
              <p className="slick-text">
                {evt[`description_${i18next.language}`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SliderPage;
