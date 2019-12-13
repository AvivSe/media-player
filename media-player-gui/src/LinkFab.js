import React from "react";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledFab = styled(Fab)`
margin-bottom: 1.5rem;
`;

const LinkFab = ({ to, icon: Icon }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };
  return <StyledFab onClick={handleClick}>{!!Icon ? <Icon /> : to}</StyledFab>;
};

export default LinkFab;
