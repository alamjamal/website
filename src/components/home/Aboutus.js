import React from 'react';
import './aboutus.css';
import ourMission from './images/our-mission-removebg-preview.png';
import ourVission from './images/our_vision-removebg-preview.png';
import aboutUsPhoto from './images/about-us.jpg';

function Aboutus() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="content-upper">
          <p>About E-DEEKSHAAM</p>
          <h1>Inclusive Education is our first priority</h1>
          <p>
            Inclusive, good-quality education is a foundation for dynamic and equitable societies
            <br /> ~ Desmond Tutu
          </p>
        </div>
        <div className="content-lower">
          <div className="our-mission">
            <div>
              <img src={ourMission} alt="Our Mission" />
            </div>
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide an adaptive assistive system to help children with intellectual disabilities
              to learn and succeed. We aim to offer a supportive and inclusive environment where children learn meaningfully,
              develop essential skills, and gain confidence in their abilities.
            </p>
          </div>
          <div className="our-vision">
            <div>
              <img src={ourVission} alt="Our Vision" />
            </div>
            <h1>Our Vision</h1>
            <p>
              Our Vision is that every child with an intellectual disability thrives and accomplishes their goals.
              Our adaptive assistive system will help children with intellectual disabilities overcome hurdles
              and reach their full potential.
            </p>
          </div>


          
        </div>
      </div>
      <div className="about-us-image">
        <div className="about-us-img">
          <img src={aboutUsPhoto} alt="about-us-photo" />
        </div>
        <div className="box-background" />
      </div>
    </div>
  );
}

export default Aboutus;
