import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  background-color: aliceblue;
  width: 60vw;
  height: 50vh;
  transform: translate(0, 10vh);
  justify-content: center;
  padding: 2.5rem;
`;

const FullDetailsModal = ({ children, open, handleClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Wrapper>{children}</Wrapper>
      </Fade>
    </Modal>
  );
};

export default FullDetailsModal;
