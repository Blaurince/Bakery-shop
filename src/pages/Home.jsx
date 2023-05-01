import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bakery.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Barbara's Bakery </h1>
        <p> La Place Des Delices</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;