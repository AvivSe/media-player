import styled from "styled-components";
import React from "react";
import Animation from "./Preloader";
import { useContextPreloader } from "../contexts";
import Form from "./form-kit/Form";
import signInFormConfiguration from "../configurations/sign-in-form.configuration";
import signUpFormConfiguration from "../configurations/sign-up-form.configuration";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { exceptionToMessage } from "../services/auth.service";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Start = ({ mode }) => {
  const { visible, drag: playing } = useContextPreloader();
  const [snackbar, setSnackBar] = React.useState({ open: false, message: null, variant: null });

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBar({ open: false, message: null, variant: null });
  };

  const history = useHistory();

  const handleSignUpCancel = () => {
    history.push("/");
  };

  const handleLoginSubmit = ({ values, actions, error }) => {
    if (!!error) {
      setSnackBar({ message: exceptionToMessage[error.message], variant: "error", open: true });
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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={!!snackbar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={snackbar.message}
      />
    </Wrapper>
  ) : null;
};

export default Start;
