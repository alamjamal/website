import React, { useState } from "react";
import "./style.css";
import homePhoto from "src/assets/images/home-photo.png";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import School from "./School";
import NGO from "./NGOs";
import Professionals from "./Professionals";

function Collaboration() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let selectedComponent;
  if (value === 0) {
    selectedComponent = <School />;
  } else if (value === 1) {
    selectedComponent = <NGO />;
  } else if (value === 2) {
    selectedComponent = <Professionals />;
  }
  return (
    <div>
      <div className="home-photo">
        <h1>COLLABORATOR</h1>
        <img src={homePhoto} alt="homephoto" />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <h1 style={{ padding: "20px" }}>
            We are collaborated with <br />
            different schools & NGOs
          </h1>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <p style={{ padding: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia
          </p>
        </Grid>
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "330px",
            bgcolor: "white",
            border: "1px solid black",
            borderRadius: "15px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: { display: "none" },
            }}
          >
            <Tab
              label="Schools"
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                "&.Mui-selected": {
                  backgroundColor: "#14539A",
                  color: "black",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                },
              }}
            />
            <Tab
              label="NGOs"
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                "&.Mui-selected": {
                  backgroundColor: "#14539A",
                  color: "black",
                },
              }}
            />
            <Tab
              label="Professionals"
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                fontFamily: "Georgia, serif",
                "&.Mui-selected": {
                  backgroundColor: "#14539A",
                  color: "black",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                },
              }}
            />
          </Tabs>
        </Box>
      </div>
      {selectedComponent}

      <div className="next-page">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>&gt;</div>
      </div>
      {/* ======================================================= next-page-navigation-section End ====================================================== */}
    </div>
  );
}

export default Collaboration;
