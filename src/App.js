import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Workshop from "./components/workshop/Workshop";
import Training from "./components/training/Training";
import Contact from "./components/contact/Contact";
import Insight from "./components/insight/insight";
import Faqs from "./components/faq/Faqs";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
           {/* <Route exact path="/Edeeksham" element={<Edeeksham />}></Route>
          <Route exact path="/Manuu" element={<Manuu />}></Route>
           <Route exact path="/Team" element={<Team />}></Route> 
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/Expert" element={<Expert />}></Route> */}
           <Route exact path="/Workshop" element={<Workshop />}></Route>
          <Route exact path="/Training" element={<Training />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Insight" element={<Insight />}></Route>
          <Route exact path="/Faq" element={<Faqs />}></Route> 
        </Routes> 
      </Router>
      <Footer />
    </>
  );
}

export default App;
