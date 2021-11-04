import React from "react";
import firebase from "../utils/firebaseConfig";
import { makeStyles } from '@material-ui/core/styles';
import Create from "./Create";
import Read from "./Read";

const useStyles = makeStyles(() => ({
  nav: {
    width: '100vw',
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6BA1B9',
  },
  logoutBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#000',
    color: '#6BA1B9',
    fontWeight: 'bold',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))

const Main = () => {
  const classes = useStyles();

  return (
    <main>
      <nav className={classes.nav}>
        <h1>React CRUD</h1>
        <h4>Hello {firebase.auth().currentUser.displayName}</h4>
        <button className={classes.logoutBtn} onClick={() => firebase.auth().signOut()}>Log Out</button>
      </nav>
      <Create />
      <Read />
    </main>
  );
};

export default Main;