import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import boxImage from "./images/SCHOOL.jpg";
function School() {
  const cardData = [
    {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
      {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
      {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
      {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
      {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
      {
        image: boxImage,
        title: "School Name 1",
        description: "School Address",
        numOfStudents: 100,
        numOfTeachers: 10,
      },
    // Add more card data objects as needed
  ];
  return (
    <div className="box-section">
      <h2 style={{textAlign:'center',margin:'10px',padding:'10px'}}>Schools</h2>
    <Grid container spacing={1}>
      {cardData.map((card, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card style={{ margin: "10px" }}>
            <CardMedia component="img" image={card.image} alt={`box-image${index + 1}`} />
            <CardContent>
              <h3>
                {card.title}
              </h3>
              <p style={{marginTop:'10px'}}>
                {card.description}
              </p>
              <Box display="flex" alignItems="center" justifyContent='space-between' marginTop={2}>
                <p variant="body1" color="textSecondary">
                  {`No of students  ${card.numOfStudents}`}
                </p>
              {/* //  <Box width={1} mx={1} height={20} borderLeft="1px solid #ccc" /> */}
                <p variant="body1" color="textSecondary">
                {`No of Teachers  ${card.numOfTeachers}`}
                </p>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default School;
