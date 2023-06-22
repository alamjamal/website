import React, { useState } from "react";
import "./style.css"; // Import your CSS file
import eDeekshamLogo from "src/assets/images/edeeksham_logo_new-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

function Footer() {
  const [tab, setTab] = useState(false);
  const [tab1, setTab1] = useState(false);

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
              Adaptive Assistive System for Children with Intellectual
              Disability
            </p>
          </div>
          <div className="footer-second">
            <h3>Quick Links</h3>
            <List>
              <ListItemButton onClick={() => setTab(!tab)}>
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    About{" "}
                    {tab ? (
                      <BiDownArrow fontSize={12} />
                    ) : (
                      <BiUpArrow fontSize={12} />
                    )}{" "}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              {tab && (
                <div >
                  <ListItemButton component={Link} to="/Edeeksham">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        E-deeksham
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton component={Link} to="/Team">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        Our Team
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton component={Link} to="/Expert">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        Experts
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton component={Link} to="/Manuu">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>MANUU</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                </div>
              )}
              <ListItemButton onClick={() => setTab1(!tab1)}>
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    Events{" "}
                    {tab1 ? (
                      <BiDownArrow fontSize={12} />
                    ) : (
                      <BiUpArrow fontSize={12} />
                    )}{" "}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              {tab1 && (
                <div >
                  <ListItemButton component={Link} to="/Workshop">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        Workshop
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton component={Link} to="/Training">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        Training
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton component={Link} to="/publicevents">
                    <ListItemIcon>
                      <ListItemText sx={{ color: "white" }}>
                        Public Events
                      </ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                </div>
              )}

              <ListItemButton component={Link} to="/Contact">
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    Contact Us
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton component={Link} to="/Insight">
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>Insight</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton component={Link} to="/Faq">
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>FAQs</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </List>
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
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon  />
            <ButtonsContainer direction='column' gap={10}>
              <GooglePlayButton
                url="https://play.google.com/store/apps"
                theme={"light"}
                className={"custom-style"}
              />
              <AppStoreButton
                url="https://www.apple.com/in/app-store/"
                theme={"light"}
                className={"custom-style"}
              />
            </ButtonsContainer>
          </div>
        </div>
        <div className="footer-lower">
          <div>
            <p>
              © <span style={{ fontSize: 20 }}>ε</span>
              -Deekshaam 2023. All rights reserved
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
