import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthenticated, getLoginOrSignUpRequestIsPending } from "../redux/auth/auth.selectors";
import SignUp from "./SignUp";
import Login from "./Login";
import React from "react";

const Welcome = ({ mode }) => {
  const props = {
    location: useLocation(),
    history: useHistory(),
    dispatch: useDispatch(),
    isAuthenticated: useSelector(getIsAuthenticated),
    isLoading: useSelector(getLoginOrSignUpRequestIsPending)
  };

  return mode === "signup" ? <SignUp {...props} /> : <Login {...props} />;
};

export default Welcome;
