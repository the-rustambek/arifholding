import React, { useState } from "react";
import "./Rating.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const Rating = () => {
  const [count, setCount] = useState(false);

  const [rating, setRating] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "statistics")
      .then((res) => setRating(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();


  return (
    <div className="rating">
      <div className="container">
        <h2 className="rating-name">{t("rating")}</h2>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className="rating-title">
            {rating?.map((evt, i) => (
              <div key={i} className="rating-list">
                <h3 className="rating-number">
                  {count && (
                    <CountUp
                      start={0}
                      duration={2.75}
                      end={evt.count}
                      delay={0}
                    />
                  )}
                  +
                </h3>
                <p className="rating-text">{evt[`title_${i18next.language}`]}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Rating;
