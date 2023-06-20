import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import boxImage from "./images/box-image.png";
function Professionals() {
  const cardData = [
    {
      image: boxImage,
      title: "title",
      description: " Address",
    },
    {
      image: boxImage,
      title: "title",
      description: "Address",
    },
    {
      image: boxImage,
      title: "title",
      description: " Address",
    },
    {
      image: boxImage,
      title: "title",
      description: " Address",
    },
    {
      image: boxImage,
      title: "title",
      description: " Address",
    },
    {
      image: boxImage,
      title: "title",
      description: " Address",
    },
    // Add more card data objects as needed
  ];
  return (
    <div className="box-section">
      <h2 style={{ textAlign: "center", margin: "10px", padding: "10px" }}>
      Professionals
      </h2>
      <Grid container spacing={1}>
        {cardData.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card style={{ margin: "10px" }}>
              <CardMedia
                component="img"
                image={card.image}
                alt={`box-image${index + 1}`}
              />
              <CardContent>
                <h3>{card.title}</h3>
                <p style={{ marginTop: "10px" }}>{card.description}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Professionals;
