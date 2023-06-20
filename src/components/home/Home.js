import React from "react";
import Carousel from "../carousel/Carasousel";
import School from "./School";
import Aboutus from "./Aboutus";
import "./home.css";
import Process from "./Process";
import PeopleSay from "./PeopleSay";
import Map from "./Map";

function Home() {
  return (
    <div className="carousel">
      <Carousel />
      <School />
      <Aboutus />
      <Process />
      <Map />
      <PeopleSay />
    </div>
  );
}

export default Home;
