import styled from "styled-components";
import React from "react";
import Button from "./form-kit/Button";
import Preloader from "./Preloader";

const Wrapper = styled.div``;

const Start = () => {
  return (
    <Wrapper>
      <Preloader/>
      <Button>Lets start.</Button>
    </Wrapper>
  );
};

export default Start;
