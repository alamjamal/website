import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import ministrylogo from "../assets/images/Meity.jpg";
import edeekshamlogo from "../assets/images/edeeksham_logo_new-removebg-preview.png";
import manuulogo from "../assets/images/manuu-logo.png";
import "./style.css"

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
							width="200px"
							height="80px"
						/>
					</div>
					<div className="logo-photo">
						<img
							src={edeekshamlogo}
							alt="edeekshaam-logo"
							width="150px"
							height="80px"
						/>
					</div>
					{isMatch?'':<div className="head-title">
						<div>
							<h1>
								Adaptive Assistive System for children With Intellectual
								Disability
							</h1>
						</div>
					</div>}
				</div>
				<div className="right-div">
					<div className="logo-photo">
						<img src={manuulogo} alt="manuu-logo" width="70px" height="80px" />
					</div>
				</div>
			</div>
        <Toolbar sx={{ backgroundColor: "#0A2463" }}>
          {isMatch ? (
            <>
              {" "}
              <Grid item xs={2}>
                <Typography>HOME</Typography>
              </Grid>
              <DrawerComp />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>HOME</Typography>
              </Grid>

              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  <Tab label="About" />
                  <Tab label="Workshop" />
                  <Tab label="Training" />
                  <Tab label="Contact Us" />
                  <Tab label="Insight" />
                  <Tab label="FAQs" />
                </Tabs>
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
