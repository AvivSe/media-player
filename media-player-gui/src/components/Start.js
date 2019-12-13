import styled from "styled-components";
import React from "react";
import Animation from "./Preloader";
import { useContextPreloader } from "../contexts";
import Form from "./form-kit/Form";
import signInFormConfiguration from "../configurations/sign-in-form.configuration";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { useHistory } from "react-router-dom";
import { exceptionToMessage } from "../services/http.exception.descriptions";
import { connect } from "react-redux";
import { closeSnackbar, openSnackbar } from "../actions/ui.actions";
import { login } from "../actions/auth.actions";
import authService from "../services/auth.service";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Start = ({ mode, snackbar, openSnackbar, closeSnackbar, login }) => {
  const { visible, drag: playing } = useContextPreloader();

  const history = useHistory();

  const handleSignUpCancel = () => {
    history.push("/");
  };

  const handleLoginSubmit = ({ values, onSuccess, onError }) => {
    const { email: username, password } = values;
    authService
      .login({ username, password })
      .then(res => {
        login(res.data);
        history.push("/listing");
        onSuccess();
      })
      .catch(error => {
        onError(error);
        openSnackbar({ message: exceptionToMessage[error.statusCode] || error.message || "Something went wrong" });
      });
  };

  return (
    <Wrapper>
      {!mode && (
        <Wrapper>
          <Animation size={15} />
          <Form
            onSubmit={handleLoginSubmit}
            hidePreloader={true}
            configuration={signInFormConfiguration}
            submitLabel={playing ? "Stop playing.." : "Login"}
          />
        </Wrapper>
      )}
      {mode === "signUp" && <Form configuration={signUpFormConfiguration} onCancel={handleSignUpCancel} />}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    snackbar: state.ui.snackbar
  };
};

export default connect(mapStateToProps, {
  openSnackbar,
  closeSnackbar,
  login
})(Start);
