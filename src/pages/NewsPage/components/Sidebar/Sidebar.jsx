import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../services";
import "./Sidebar.css";

const Sidebar = () => {
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "workers")
      .then((res) => setWorker(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar-list">
          {worker?.map((evt, i) => (
            <li key={i} className="sidebar-item">
              <Link to={`/news=${evt.id}`} className="sidebar-link">
                {evt.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
