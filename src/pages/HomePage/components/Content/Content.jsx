import React, { useState } from "react";
import "./Content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import VideoModal from "../../../ReactModal/components/VideoModal/VideoModal";
import { IoCloseOutline } from "react-icons/io5";
import Audio from "../../../../assets/icons/audio";
import Phone from "../../../../assets/icons/phone";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Content = () => {
  const [t, i18next] = useTranslation();
  const [videoModal, setVideoModal] = useState(false);
  const [linkId, setLinkId] = useState();

  function handleVideoModal() {
    setVideoModal(!videoModal);
  }

  const [worker, setWorker] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "workers")
      .then((res) => setWorker(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + `workers/${linkId}`)
      .then((res) => setYoutube(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {worker?.map((evt, i) => (
          <SwiperSlide key={i}>
            <img
              src={`${BASE_URL}uploads/images/${evt.img_src}`}
              alt=""
              className="content-imgs"
            />
            <div className="container">
              <h2 className="content-name">
                {evt.name}
                <p className="content-span">
                  {" "}
                  {evt[`position_${i18next.language}`]}
                </p>
              </h2>
              <p className="content-text">
                {evt[`description_${i18next.language}`]}
              </p>

              <div className="content-list">
                <button
                  onClick={() => {
                    handleVideoModal();
                    setLinkId(evt?.id);
                  }}
                  className="content-btn"
                >
                  <span className="content-img-span">
                    <Audio />
                  </span>
                  <p className="content-subname">{t("video")}</p>
                </button>
                <a href={`tel:${evt.phone}`} className="content-btn">
                  <span className="content-span-img">
                    <Phone />
                  </span>
                  <p className="content-subname">{t("tel")}</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <VideoModal show={videoModal}>
        <div>
          <div className="content-modal-item">
            <button onClick={() => setVideoModal()} className="close-modal">
              <IoCloseOutline style={{ marginLeft: "-3px" }} />
            </button>
          </div>
          {!!videoModal && (
            <iframe
              className="content-video-modal"
              src={`https://www.youtube.com/embed/${youtube.video_url}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </VideoModal>
    </div>
  );
};

export default Content;
