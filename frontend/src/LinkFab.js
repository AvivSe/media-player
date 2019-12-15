import React from "react";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";

const LinkFab = ({ to, icon, onClick }) => {
  const history = useHistory();

  const handleClick = e => {
    if(to) {
      history.push(to);
    }
    if(onClick) {
      onClick();
    }
  };
  return <Fab onClick={handleClick}>{ icon || to}</Fab>;
};

export default LinkFab;
