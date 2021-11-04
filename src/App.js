import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebaseConfig";
import Main from "./components/Main";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    width: '100%',
    display: 'flex',
  },
}))

const App = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);

  return (
    <div className={classes.app} style={{ textAlign: 'center' }}>
      {isSignedIn ? (
        <Main />
      ) : (
        <div className={classes.loginPage}>
          <h1>React CRUD</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
};

export default App;

