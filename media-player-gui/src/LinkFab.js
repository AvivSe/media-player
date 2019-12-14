import React from "react";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";

const LinkFab = ({ to, icon }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };
  return <Fab onClick={handleClick}>{ icon || to}</Fab>;
};

export default LinkFab;
