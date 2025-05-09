import React from "react";
import Img from "./Img_home";
import "../App.css";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="home">
      <div>
        <Nav />
      </div>
      <br />
      <hr class="divider" />
      <br />
      <div class="home_img_div">
        <Img />
      </div>
    </div>
  );
};

export default Home;
