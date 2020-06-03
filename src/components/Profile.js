// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { loading, user } = useAuth0(); //user - use to retrieve the user's profile info

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Avatar alt={user.name} src={user.picture} className={classes.large}/>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;