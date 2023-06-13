import React, { useState } from "react";
import {
    Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComp() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{sx:{
        backgroundColor:'#0A2463'
      },}} open={open} onClose={() => setOpen(false)} anchor="right">
        <List >
          <ListItemButton >
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>Workshop</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>Training</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>Contact Us</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>Insight</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText sx={{color:'white'}}>FAQs</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Grid item xs={2}>
            <Box display="flex" alignItems='center' sx={{margin:'5px',padding:'5px'}}>
              <Button sx={{ marginLeft: "auto" ,color:'white'}} variant="outlined" >
                Login
              </Button>
              <Button sx={{ marginLeft:1,color:'white'}} variant="outlined">
                Register
              </Button>
            </Box>
          </Grid>
      </Drawer>
      <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
