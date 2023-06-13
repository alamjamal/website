import {
  AppBar,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAboutMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAnchorEl(null);
  };

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
                width="180px"
                height="80px"
              />
            </div>
            <div className="logo-photo">
              <img
                src={edeekshamlogo}
                alt="edeekshaam-logo"
                width="130px"
                height="80px"
              />
            </div>
            {isMatch ? (
              ""
            ) : (
              <div className="head-title">
                <div>
                  <h1>
                    Adaptive Assistive System for children With Intellectual
                    Disability
                  </h1>
                </div>
              </div>
            )}
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
        </div>
        <Toolbar sx={{ backgroundColor: "#0A2463" }}>
          {isMatch ? (
            <>
              {" "}
              <Grid item xs={2}>
                <Link to="/">
                  <Button variant="text" sx={{color:"white",fontSize:'large'}}>HOME</Button>
                </Link>
              </Grid>
              <DrawerComp />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
              <Link to="/">
                  <Button variant="text" sx={{color:"white",fontSize:'large'}}>HOME</Button>
                </Link>
              </Grid>

              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
          
          
          <Tab label="About" onClick={handleAboutMenuOpen}
                    onMouseLeave={handleAboutMenuClose}/>
                  <Tab label="Workshop" />
                  <Tab label="Training" />
                  <Tab label="Contact Us" />
                  <Tab label="Insight" />
                  <Tab label="FAQs" />
                </Tabs>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleAboutMenuClose}
                  onMouseEnter={handleAboutMenuOpen}
                  onMouseOLeave={handleAboutMenuClose}
                  anchorOrigin={{
                    vertical: 200,
                    horizontal: 380,
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  autoFocus='true'
                 sx={{height:'300px', width:'200px'}}
                >
                  <MenuItem onClick={handleAboutMenuClose} component={Link} to="/Edeeksham">
                  E-Deeksham
                  </MenuItem>
                  <MenuItem onClick={handleAboutMenuClose} component={Link} to="/Manuu">
                  MANUU
                  </MenuItem>
                  <MenuItem onClick={handleAboutMenuClose} component={Link} to="/Team">
                  Our Team
                  </MenuItem>
                  <MenuItem onClick={handleAboutMenuClose} component={Link} to="/Expert">
                  Experts
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={2}>
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
