import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Smart Automation Hub</Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography variant="h6">Engagement</Typography>
            </Grid> */}
          </Grid>
          {/* <Box p={3}>
            <Typography>Dashboard</Typography>
          </Box>
          <Box p={3}>
            <Typography>All automations</Typography>
          </Box>
          <Box p={3}>
            <Typography>Canvas AI</Typography>
          </Box> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
