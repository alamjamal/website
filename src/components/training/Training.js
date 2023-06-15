import "./style.css";
import homePhoto from "./images/home-photo.png";
import boxImage from "./images/box-image.png";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function Training() {
  const cardData = [
    {
      image: boxImage,
      title: "School Name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: boxImage,
      title: "School Name 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: boxImage,
      title: "School Name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: boxImage,
      title: "School Name 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: boxImage,
      title: "School Name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: boxImage,
      title: "School Name 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more card data objects as needed
  ];
  return (
    <div>
      {/* ======================================================= Home photo section start ====================================================== */}
      <div className="home-photo">
        <h1>TRAINING</h1>
        <img src={homePhoto} alt="homephoto" />
      </div>
      {/* ======================================================= Home photo Section End ====================================================== */}
      {/* ======================================================= Text-Section start ====================================================== */}
      <div className="text-section">
        <h1>Schools List</h1>
        <p>List of schools in which we have done the training</p>
        <select>
          <option value>Select the State</option>
          <option value>Aandhra Pradesh</option>
          <option value>Arunachal Pradesh</option>
          <option value>Assam</option>
          <option value>Bihar</option>
          <option value>Chattisgarh</option>
          <option value>Chandigarh</option>
          <option value>Delh</option>
          <option value>Goa</option>
          <option value>Gujrat</option>
        </select>
      </div>
      {/* ======================================================= Text-Section End ====================================================== */}
      {/* ======================================================= Box-Section Start ====================================================== */}
      <div className="box-section">
        <Grid container spacing={1}>
          {cardData.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card style={{ margin:'10px',padding:'10px'}}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={`box-image${index + 1}`}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{ textAlign: "center" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* ======================================================= Box-Section End ====================================================== */}
      {/* ======================================================= next-page-navigation-section start ====================================================== */}
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

export default Training;
