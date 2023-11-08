import React from "react";
import classes from './Footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h3>Created by Ben</h3>
      <div className={classes.icons}>
        <LinkedInIcon />
        <GitHubIcon />
      </div>
    </div>
  )
}

export default Footer