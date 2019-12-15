import styled from "styled-components";
import React, { useEffect } from "react";
import Form from "./form-kit/Form";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { signUp } from "../redux/auth/auth.actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUp = ({location, history, isAuthenticated, isLoading, dispatch}) => {

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/signup") {
      history.push("/");
    }
  }, [isAuthenticated, location.pathname, history]);

  const handleSubmit = ({ values, onSuccess, onError }) => {
    const { email: username, password, retypePassword, firstName, lastName } = values;
    dispatch(signUp(username, password, retypePassword, firstName, lastName));
  };

  const handleSignUpCancel = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <Form configuration={signUpFormConfiguration} loading={isLoading} onSubmit={handleSubmit} onSecondaryButtonClick={handleSignUpCancel}/>
    </Wrapper>
  );
};

export default SignUp;
