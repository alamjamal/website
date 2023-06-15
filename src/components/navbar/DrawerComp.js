import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {BiUpArrow,BiDownArrow} from 'react-icons/bi'

function DrawerComp() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#0A2463",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
      >
        <List>
          <ListItemButton onClick={()=>setTab(!tab)} divider>
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>About {tab? <BiDownArrow fontSize={12}/>:<BiUpArrow fontSize={12} />} </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {tab && (
            <div style={{marginLeft:'25px'}}>
              <ListItemButton
                onClick={() => setOpen(false)}
                component={Link}
                to="/Edeeksham"
                
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>
                    E-deeksham
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                onClick={() => setOpen(false)}
                component={Link}
                to="/Team"
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>Our Team</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                onClick={() => setOpen(false)}
                component={Link}
                to="/Expert"
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>Experts</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                onClick={() => setOpen(false)}
                component={Link}
                to="/Manuu"
                divider
              >
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>MANUU</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </div>
          )}
          <ListItemButton
            onClick={() => setOpen(false)}
            component={Link}
            to="/Workshop"
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>Workshop</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
            component={Link}
            to="/Training"
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>Training</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
            component={Link}
            to="/Contact"
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>Contact Us</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
            component={Link}
            to="/Insight"
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>Insight</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
            component={Link}
            to="/Faq"
            divider
          >
            <ListItemIcon>
              <ListItemText sx={{ color: "white" }}>FAQs</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Grid item xs={2}>
          <Box
            display="flex"
            alignItems="center"
            sx={{ margin: "5px", padding: "5px" }}
          >
            <Button
              sx={{ marginLeft: "auto", color: "white" }}
              variant="outlined"
            >
              Login
            </Button>
            <Button sx={{ marginLeft: 1, color: "white" }} variant="outlined">
              Register
            </Button>
          </Box>
        </Grid>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
