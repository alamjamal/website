import React from "react";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import buildingLogo from "./images/building-logo.png";
import teacherLogo from "./images/teacher-removebg-preview.png";
import studentLogo from "./images/student-removebg-preview.png";
import features from "./images/features.png";
import './school.css'
const theme = createTheme(); // Create Material-UI theme

const useStyles = makeStyles(() => ({
  feature: {
    width: "100%",
    backgroundColor: "rgb(238, 243, 253)",
    paddingTop: "123px",
    height: "50%",
    justifyContent: "center",
    display: "flex",
    paddingBottom: "80px",
  },
}));

function School() {
  const classes = useStyles();

  return (
    <div>
    <div className="school-details">
				<div className="details-box">
					<div className="details-image">
						<img src={buildingLogo} alt="buildingLogo" />
					</div>
					<div>
						<h1>50+</h1>
					</div>
					<div>
						<p>Schools</p>
					</div>
				</div>
				<div className="details-box">
					<div className="details-image">
						<img src={teacherLogo} alt="teacher logo" />
					</div>
					<div>
						<h1>150+</h1>
					</div>
					<div>
						<p>Teachers</p>
					</div>
				</div>
				<div className="details-box">
					<div className="details-image">
						<img src={studentLogo} alt="student logo" />
					</div>
					<div>
						<h1>200+</h1>
					</div>
					<div>
						<p>Students</p>
					</div>
				</div>
			</div>

      <div className={classes.feature}>
        <img src={features} style={{ maxWidth: "100%" }} alt="featureImage" />
      </div>
    </div>
  );
}

export default School;
