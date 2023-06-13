import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import buildingLogo from "./images/building-logo.png";
import teacherLogo from "./images/teacher-removebg-preview.png";
import studentLogo from "./images/student-removebg-preview.png";
import features from "./images/features.png";

const theme = createTheme(); // Create Material-UI theme


const useStyles = makeStyles(() => ({


  schoolDetails: {
    display: 'flex',
    margin: '10px',
    padding: '10px',
    width: '99%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundColor: 'aqua',
    background: 'linear-gradient(to top, rgb(238, 243, 253) 50%, white 50%)',
    marginTop: '200px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '150px',
    },
  },
  detailsBox: {
    height: '200px',
    width: '25%',
    boxSizing: 'border-box',
    border: '1px rgb(233, 224, 224)',
    boxShadow: '-2px 4px 5px 9px #eef3f3',
    borderRadius: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    justifyItems: 'center',
    marginLeft: '40px',
    backgroundColor: 'white',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '500px',
      margin: '0 auto 80px',
      fontSize: '40px',
      marginLeft: '0',
    },
  },
  detailsImage: {
    marginTop: '-71px',
    height: '100px',
    width: '100px',
    backgroundColor: 'rgb(149, 195, 222)',
    transform: 'rotate(46deg)',
    marginLeft: '245px',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '115px',
      width: '120px',
      height: '120px',
      borderRadius: '20px',
      marginTop: '-93px',
    },
  },
  logoImage: {
    height: '70px',
    width: '70px',
    transform: 'rotate(-47deg)',
    marginLeft: '10px',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '90px',
      height: '90px',
      marginTop: '1px',
      marginRight: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '120px',
      height: '125px',
    },
  },
  schoolsCount: {
    marginTop: '38px',
    fontSize: '54px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '80px',
    },
  },
  detailsText: {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  feature:{
    width: '100%',
    backgroundColor: 'rgb(238, 243, 253)',
    paddingTop: '123px',
    height: '50%',
    justifyContent: 'center',
    display: 'flex',
    paddingBottom: '80px',
  }
}));

function School() {
  const classes = useStyles();

  return (
    <div>

    
    <div className={classes.schoolDetails}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className={classes.detailsBox}>
          <div className={classes.detailsImage}>
            <img src={buildingLogo} alt="buildingLogo" className={classes.logoImage} />
          </div>
          <div>
            <h1 variant="h1" className={classes.schoolsCount}>
              50+
            </h1>
          </div>
          <div>
            <h1 variant="body1" className={classes.detailsText}>
              Schools
            </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={[classes.detailsBox,'details-box']} >
          <div className={classes.detailsImage}>
            <img src={teacherLogo} alt="teacher logo" className={classes.logoImage} />
          </div>
          <div>
            <h1 variant="h1" className={classes.schoolsCount}>
              150+
            </h1>
          </div>
          <div>
            <h1 variant="body1" className={classes.detailsText}>
              Teachers
            </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.detailsBox}>
          <div className={classes.detailsImage}>
            <img src={studentLogo} alt="student logo" className={classes.logoImage} />
          </div>
          <div>
            <h1 variant="h1" className={classes.schoolsCount}>
              200+
            </h1>
          </div>
          <div>
            <h1 variant="body1" className={classes.detailsText}>
              Students
            </h1>
          </div>
        </Grid>
      </Grid>
     
      
    </div>
    
    <div className={classes.feature}>
				<img src={features} style={{ maxWidth: '100%' }}/>
			</div>
    </div>
  );
}

export default School;
