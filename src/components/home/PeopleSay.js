import React from "react";
import quotesImage from "./images/quotes1.png";
import "./peopleSay.css";
function PeopleSay() {
  return (
    <>
    <div>

    </div>
    <div className="people-say" style={{marginTop:'20px'}}>
      <p>Testimonial</p>
      <h1>What People Say</h1>
      <div className="quotes-box-row">
        <div className="quotes-box">
          <div className="bg-image">
            <img src={quotesImage} alt="quotes image" />
          </div>
          <p>
            Excited to see the system being developed, and I would definitely
            want to be a part of this.
          </p>
          <hr />
          <h3>Mrs Sridevi</h3>
          <p>Shankar Foundation, Hyderabad</p>
        </div>
        <div className="quotes-box">
          <div className="bg-image">
            <img src={quotesImage} alt="quotes image" />
          </div>
          <p>
            My well wishes to the team, and we will collaborate for future
            workshops and allow MDPS to be digitized as a part of the system.
          </p>
          <hr />
          <h3>Mrs Janaki Balakrishnan</h3>
          <p>Vijay Human Services, Chennai</p>
        </div>
        <div className="quotes-box">
          <div className="bg-image">
            <img src={quotesImage} alt="quotes image" />
          </div>
          <p>
            My team and I are excited to be a part of this project, and we wish
            you all the best in the development and delivery of the project.
          </p>
          <hr />
          <h3>Dr Ayoub Bhat</h3>
          <p>Shafaqat Special School, Srinagar</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default PeopleSay;
