import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import ministrylogo from "../../assets/images/Meity.jpg";
import edeekshamlogo from "../../assets/images/edeeksham_logo_new-removebg-preview.png";
import manuulogo from "../../assets/images/manuu-logo.png";

import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMatch);
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <div className="header">
          <div className="left-div">
            <div>
              <img
                src={ministrylogo}
                alt="ministry-logo"
                width="140px"
                height="60px"
              />
            </div>
            <div className="logo-photo">
              <img
                src={edeekshamlogo}
                alt="edeekshaam-logo"
                width="110px"
                height="60px"
              />
            </div>
            {isMatch && (
              <div className="logo-photo">
                <img
                  src={manuulogo}
                  alt="manuu-logo"
                  width="60px"
                  height="60px"
                />
              </div>
            )}
            {isMatch ? (
              ""
            ) : (
              <>
                <div className="head-title">
                  <div>
                    <h1 style={{ whiteSpace: 'nowrap' }}>
                      Adaptive Assistive System for children With Intellectual Disability

                    </h1>
                  </div>
                </div>
                <div className="right-div">
                  <div className="logo-photo">
                    <img
                      src={manuulogo}
                      alt="manuu-logo"
                      width="70px"
                      height="80px"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <Toolbar sx={{ backgroundColor: "#0A2463" }}>
          {isMatch ? (
            <>
              {" "}
              <Grid item xs={1}>
                <Link to="/">
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      color: "white",
                    }}
                  >
                    HOME
                  </Button>
                </Link>
              </Grid>
              <DrawerComp />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={1}>
                <Link to="/">
                  <Button
                    variant="text"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      color: "white",
                    }}
                  >
                    HOME
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <div className="dropdown">
                  <button className="dropdown-btn">ABOUT</button>
                  <div className={`dropdown-options`}>
                    <Link to="/Edeeksham">E-Deeksham</Link>
                    <Link to="/Manuu">MANUU</Link>
                    <Link to="/Team">Our Team</Link>
                    <Link to="/Expert">Experts</Link>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="dropdown">
                  <button className="dropdown-btn">EVENTS</button>
                  <div className={`dropdown-options`}>
                    <Link to="/Workshop">Workshops</Link>
                    <Link to="/Training">Trainings</Link>
                    <Link to="/publicevents">Public Events</Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={5}>
                <Tabs
                  textColor="none"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  TabIndicatorProps={{
                    style: { display: "none", fontSize: 10 },
                  }}
                >
                  {/* <Tab label="Events" component={Link} to="/Workshop" /> */}
                  {/* <Tab label="Workshop" component={Link} to="/Workshop" />
                  <Tab label="Training" component={Link} to="/Training" /> */}
                  <Tab
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                    }}
                    label="Collaboration"
                    component={Link}
                    to="/collaboration"
                  />
                  <Tab
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                    }}
                    label="Contact Us"
                    component={Link}
                    to="/Contact"
                  />
                  <Tab
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                    }}
                    label="Insight"
                    component={Link}
                    to="/Insight"
                  />
                  <Tab
                    sx={{
                      fontSize: "13px",
                      fontWeight: "light",
                      fontFamily: '"Source Sans Pro", sans-serif',
                    }}
                    label="FAQs"
                    component={Link}
                    to="/Faq"
                  />
                </Tabs>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" alignItems="center">
                  <Button
                    sx={{ marginLeft: "auto", color: "white" }}
                    variant="outlined"
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ marginLeft: 1, color: "white" }}
                    variant="outlined"
                  >
                    Register
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
