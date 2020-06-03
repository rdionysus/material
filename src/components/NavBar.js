// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
// import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading, user } = useAuth0();

  if (loading) {
    return <div></div>;
  }

  return (
    <div id="navbar">
      
      <Button color = "primary">*Receptiviti</Button>
      <Button color = "primary">Solutions</Button>
      <Button color = "primary">Resources</Button>
      <Button color = "primary">Pricing</Button>
      <Button color = "primary">Why?</Button>

      {!isAuthenticated && (
        <Button variant="outlined" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && (<Avatar alt={user.name} src={user.picture} />)}
      {/* {isAuthenticated && (<Button color = "primary" to="/profile">Profile</Button>)} */}
      {isAuthenticated && (<Button variant="outlined" color="secondary" onClick={() => logout()}>Log out</Button>)}

      </div>
  );
};

export default NavBar;