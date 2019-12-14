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
  const [isSignUp, setIsSignUp] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  useEffect(() => {
    console.log(isAuthenticated );
    if (isAuthenticated && location.pathname === "/login") {
      history.push("/");
    }
  }, [isAuthenticated, location.pathname, history]);


  const handleSignUpCancel = () => {
    history.push("/");
  };

  const handleLoginSubmit = ({ values, onSuccess, onError }) => {
    const { email: username, password } = values;
    dispatch(login(username, password));
  };

  return (
    <Wrapper>
      {!isSignUp && (
        <Wrapper>
          <Animation size={15}/>
          <Form
            onSubmit={handleLoginSubmit}
            hidePreloader={true}
            configuration={signInFormConfiguration}
            submitLabel={"Login"}
          />
          <button onClick={() => setIsSignUp(true)}>{isSignUp ? "Back to login" : "Sign Up"}</button>
        </Wrapper>
      )}
      {isSignUp && <Form configuration={signUpFormConfiguration} onCancel={handleSignUpCancel}/>}
    </Wrapper>
  );
};

export default Login;
