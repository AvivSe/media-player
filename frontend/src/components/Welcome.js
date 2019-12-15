import SignUp from "./SignUp";
import Login from "./Login";
import React from "react";

const Welcome = ({ mode }) => {
  return mode === "signup" ? <SignUp/> : <Login/>;
};

export default Welcome;
