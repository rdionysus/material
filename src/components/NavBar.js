// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Button from '@material-ui/core/Button';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div id="navbar">
      <Button color = "primary">Solutions</Button>
      <Button color = "primary">Resources</Button>
      <Button color = "primary">Pricing</Button>
      <Button color = "primary">Why?</Button>

      {!isAuthenticated && (
        <Button variant="outlined" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <Button variant="outlined" color="secondary" onClick={() => logout()}>Log out</Button>}
    </div>
  );
};

export default NavBar;