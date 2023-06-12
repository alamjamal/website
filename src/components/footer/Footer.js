import React from "react";
import "./style.css"; // Import your CSS file
import eDeekshamLogo from "../../assets/images/edeeksham_logo_new-removebg-preview.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div>
      {/* ======================================================= Footer section start ======================================================= */}
      <div className="footer">
        <div className="footer-upper">
          <div className="footer-first">
            <div className="footer-image">
              <img src={eDeekshamLogo} alt="e-deeksham logo" />
            </div>
            <p>
              E-Deekshaam assesses, customizes, and tailors learning plans for
              intellectually disabled children, providing interactive lessons
              and games based on their needs, tracking progress, and generating
              reports to facilitate data-driven decision-making and
              individualized support.
            </p>
          </div>
          <div className="footer-second">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Workshop</li>
              <li>Training</li>
              <li>Insight</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-third">
            <h3>Contact Us</h3>
            <div>
              <i className="bi bi-geo-alt" />
              <p>
                Dept of CS&amp;IT, School Of Technology, Maulana Azad National
                Urdu University, Gachibowli, Hyderabad, India-500032
              </p>
            </div>
            <div>
              <i className="bi bi-envelope" />
              <p>meity.p@manuu.edu.in</p>
            </div>
            <div>
              <i className="bi bi-telephone" />
              <p>
                +91-8297097786
                <br />
                +91-9885166968
              </p>
            </div>
          </div>
          <div className="footer-fourth">
            <h3>Follow Us</h3>
           < FacebookIcon />
           < TwitterIcon />
           < YouTubeIcon />
        
          </div>
        </div>
        <div className="footer-lower">
          <div>
            <p>
              © <span style={{ fontSize: 20 }}>ε</span>-Deekshaam 2023. All
              rights reserved
            </p>
          </div>
          <div style={{ textAlign: "end" }}>
            <p>Terms of Use | Disclaimer | Privacy Policy</p>
          </div>
        </div>
      </div>
      {/* ======================================================= Footer section End ======================================================= */}
    </div>
  );
}

export default Footer;
