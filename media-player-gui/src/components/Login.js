import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Animation from "./Preloader";
import Form from "./form-kit/Form";
import signInFormConfiguration from "../configurations/sign-in-form.configuration";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/auth.selectors";
import { login } from "../redux/auth/auth.actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/login") {
      history.push("/");
    }
  }, [isAuthenticated, location.pathname, history]);

  const handleSubmit = ({ values, onSuccess, onError }) => {
    const { email: username, password } = values;
    dispatch(login(username, password));
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  return (
    <Wrapper>
        <Wrapper>
          <Animation size={15}/>
          <Form
            onSubmit={handleSubmit}
            hidePreloader={true}
            secondaryButtonLabel={"Sign Up"}
            configuration={signInFormConfiguration}
            submitLabel={"Login"}
            onSecondaryButtonClick={handleSignUpClick}
          />
        </Wrapper>
    </Wrapper>
  );
};

export default Login;
