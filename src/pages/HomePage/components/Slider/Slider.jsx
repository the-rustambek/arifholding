import React from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1.2,
      },
      1000: {
        items: 1.5,
      },
    },
  };

  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "services")
      .then((res) => setService(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();

  return (
    <div className="slider">
      <OwlCarousel {...options}>
        {service?.map((evt, i) => (
          <div key={i} className="slider-list">
            <img
              src={`${BASE_URL}uploads/images/${evt.logo}`}
              alt=""
              className="slider-img"
            />
            <div className="slider-title">
              <img
                src={`${BASE_URL}uploads/images/${evt.img_src}`}
                alt=""
                className="slider-pic"
              />
              <span className="slider-span">
                <h3 className="slider-name">
                  {evt[`title_${i18next.language}`]}
                </h3>
                <p className="slider-text">
                  {evt[`description_${i18next.language}`]}
                </p>
              </span>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
