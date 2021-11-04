import React from "react";
import firebase from "../utils/firebaseConfig";

const Main = () => {
  return (
    <main>
      <nav>
        <h1>React Auth</h1>
        <h4>Hello {firebase.auth().currentUser.displayName}</h4>
        <button onClick={() => firebase.auth().signOut()}>Log Out</button>
      </nav>
      {/* app component */}
    </main>
  );
};

export default Main;