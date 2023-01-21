import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import makeStyle from '../styles/makeStyles';
import { Grid } from '@mui/material';
import clsx from 'clsx';
import InstagramIcon from '@mui/icons-material/Instagram';




export default function ButtonAppBar() {


  const Classes = makeStyle()
  const NavButton = ({ children }) => {
    return (<Button 
    color="inherit" 
    className={clsx(Classes.navbtn, Classes.navbtnPrimary)} 
    varient="contained">
    <Typography 
    varient="h3" 
    component="h1" 
    marginX={3} 
    padding={2}> {children}</Typography>
    </Button>)
  }
  const NavOtherButton = ({ children }) => {
    return (<Button className={clsx(Classes.navbtn , Classes.navbtnSecondary)} color="inherit" varient="contained"><Typography varient="h3" component="div" marginX={1} padding={1} > {children}</Typography></Button>)
  }



  return (
    <Grid container>
      <Grid item xl={12} sm={12}>
        <AppBar position="fixed" sx={{ background: 'linear-gradient(90deg, rgba(255,239,55,1) 0%, rgba(216,23,130,1) 23%, rgba(255,24,70,0.9951330874146533) 37%, rgba(253,29,29,1) 50%, rgba(255,243,0,1) 100%)' }}>
          <Toolbar>
            <Grid item >
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ flexGrow: 1}}
              >
                  <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item justifyItems="space-between" marginLeft='auto'>
              <NavButton>Sign In</NavButton>
              <NavOtherButton>Services</NavOtherButton>
              <NavOtherButton>Sign Up</NavOtherButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>

  );
}
