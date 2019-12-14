import styled from "styled-components";
import React from "react";
import Form from "./form-kit/Form";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const history = useHistory();

  const handleSignUpCancel = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <Form configuration={signUpFormConfiguration} onSecondaryButtonClick={handleSignUpCancel}/>
    </Wrapper>
  );
};

export default Login;
