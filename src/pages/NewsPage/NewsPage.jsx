import React from "react";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import News from "./components/News/News";
import Sidebar from "./components/Sidebar/Sidebar";
import "./NewsPage.css";

const NewsPage = () => {
  return (
    <div className="newspage">
      <div className="meetingpage-navbar">
        <Navbar />
      </div>
      <Nav />
      <Sidebar />
      <News />
      <Footer />
    </div>
  );
};

export default NewsPage;
