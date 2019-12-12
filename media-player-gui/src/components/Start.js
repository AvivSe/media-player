import styled from "styled-components";
import React from "react";
import Preloader from "./Preloader";
import { useContextPreloader } from "../contexts";
import Form from "./form-kit/Form";
import signInFormConfiguration from "../configurations/sign-in-form.configuration";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import {useHistory} from 'react-router-dom'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Start = ({ mode }) => {
  const { visible, drag: playing } = useContextPreloader();
  const history = useHistory();

  const handleSignUpCancel = () => {
    history.push('/')
  };
  return visible ? (
    <Wrapper>
      <Preloader size={15} />
      {!mode && (
        <Form configuration={signInFormConfiguration} submitLabel={playing ? "Stop playing.." : "Lets start."} />
      )}
      {mode === "signUp" && <Form configuration={signUpFormConfiguration} onCancel={handleSignUpCancel}/>}
    </Wrapper>
  ) : null;
};

export default Start;
