import styled from "styled-components";
import React, { useEffect } from "react";
import Form from "./form-kit/Form";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { signUp } from "../redux/auth/auth.actions";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthenticated, getLoginOrSignUpRequestIsPending } from "../redux/auth/auth.selectors";
import { getIsUserServicePending } from  "../redux/user/user.selectors"
import { createUser } from "../redux/user/user.actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUp = ({mode, onCancel}) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const isLoginOrSignUpRequestIsPending = useSelector(getLoginOrSignUpRequestIsPending);
  const isUserServicePending = useSelector(getIsUserServicePending);
  const isLoading = isLoginOrSignUpRequestIsPending || isUserServicePending;
  const onBehave = mode === "onBehave";
  if(onBehave) {
    signUpFormConfiguration.title = "User Creation"
  }
  useEffect(() => {
    if (isAuthenticated && location.pathname === "/signup") {
      history.push("/");
    }
  }, [isAuthenticated, location.pathname, history]);

  const handleSubmit = ({ values, onSuccess, onError }) => {
    const { email: username, password, retypePassword, firstName, lastName } = values;
    if(onBehave) {
      dispatch(createUser({username, password, retypePassword, firstName, lastName}, onCancel));
    } else {
      dispatch(signUp(username, password, retypePassword, firstName, lastName));
    }
  };

  const handleSignUpCancel = () => {
    if(!onCancel) {
      history.push("/");
    } else {
      onCancel();
    }
  };

  return (
    <Wrapper>
      <Form configuration={signUpFormConfiguration} loading={isLoading} onSubmit={handleSubmit} onSecondaryButtonClick={handleSignUpCancel}/>
    </Wrapper>
  );
};

export default SignUp;
