import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";
import Sidebar from "../NewsPage/components/Sidebar/Sidebar";
import News from "./News/News";

const Information = () => {
  return (
    <div className="information">
      <Nav />
      <Sidebar />
      <News />
      <Footer />
    </div>
  );
};

export default Information;
