import styled from "styled-components";
import React from "react";
import Animation from "./Preloader";
import { useContextPreloader } from "../contexts";
import Form from "./form-kit/Form";
import signInFormConfiguration from "../configurations/sign-in-form.configuration";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { exceptionToMessage } from "../services/http.exception.descriptions";
import { connect } from "react-redux";
import { closeSnackbar, openSnackbar } from "../actions/ui.actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Start = ({ mode, snackbar, openSnackbar, closeSnackbar }) => {
  const { visible, drag: playing } = useContextPreloader();

  const history = useHistory();

  const handleSignUpCancel = () => {
    history.push("/");
  };

  const handleLoginSubmit = ({ values, actions, error }) => {
    if (!!error) {
      openSnackbar({ message: exceptionToMessage[error.statusCode] || "Something went wrong" });
    } else {
      history.push("/listing");
    }
  };

  return visible ? (
    <Wrapper>
      {!mode && (
        <Wrapper>
          <Animation size={15} />
          <Form
            onSubmit={handleLoginSubmit}
            hidePreloader={true}
            configuration={signInFormConfiguration}
            submitLabel={playing ? "Stop playing.." : "Lets start."}
          />
        </Wrapper>
      )}
      {mode === "signUp" && <Form configuration={signUpFormConfiguration} onCancel={handleSignUpCancel} />}
    </Wrapper>
  ) : null;
};

const mapStateToProps = state => {
  return {
    snackbar: state.ui.snackbar
  };
};

export default connect(mapStateToProps, {
  openSnackbar,
  closeSnackbar
})(Start);
