import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import About from "../HomePage/components/About/About";
import Category from "../HomePage/components/Category/Category";
import Content from "../HomePage/components/Content/Content";
import Form from "../HomePage/components/Form/Form";
import Header from "../HomePage/components/Header/Header";
import Rating from "../HomePage/components/Rating/Rating";
import Section from "../HomePage/components/Section/Section";
import Service from "../HomePage/components/Service/Service";
import Slider from "../HomePage/components/Slider/Slider";
import Aside from "./Aside/Aside";
import './FilterPage.css'

const FilterPage = () => {
  return (
    <div className="homepage">
      <div className="homepage-list">
        <Navbar />
        <Header />
      </div>
      <Category />
      <Service />
      <Content />
      <Slider />
      <Rating />
      <Section />
      <Aside />
      <About />
      <Form />
      <Footer />
    </div>
  );
};

export default FilterPage;
