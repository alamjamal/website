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
import Edeeksham from "./components/e-deeksham/e-deeksham";
import Manuu from "./components/manuu/manuu";
import Team from "./components/team/team";
import Expert from "./components/experts/expert";
import ScrollToTop from "./ScrollToTop";
import PublicEvents from "./components/PublicEvents/Workshop";
import Collaboration from "./components/collaboration/Collaboration";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Edeeksham" element={<Edeeksham />}></Route>
          <Route exact path="/Manuu" element={<Manuu />}></Route>
          <Route exact path="/Team" element={<Team />}></Route>
          <Route exact path="/Expert" element={<Expert />}></Route>
          <Route exact path="/Workshop" element={<Workshop />}></Route>
          <Route exact path="/publicevents" element={<PublicEvents />}></Route>
          <Route
            exact
            path="/collaboration"
            element={<Collaboration />}
          ></Route>
          <Route exact path="/Training" element={<Training />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Insight" element={<Insight />}></Route>
          <Route exact path="/Faq" element={<Faqs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
