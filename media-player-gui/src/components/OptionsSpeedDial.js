import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { KeyboardOutlined, TuneOutlined } from "@material-ui/icons";
import styled from "styled-components";

export const SEARCH_AS_YOU_TYPE_OPT = "Search as you type";
export const GRID_MODE_OPT = "Grid mode";

const optionToIcon = {
  [SEARCH_AS_YOU_TYPE_OPT]: KeyboardOutlined
};

const Wrapper = styled.div`
  margin-inline-start: 10px;
  height: 0;
  z-index: 1;
  .MuiFab-primary {
    width: 60px;
    height: 60px;
  }
`;

const OptionsSpeedDial = ({ options, onOptionsChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggleOptionClick = optionName => () => {
    onOptionsChange({ [optionName]: !options[optionName] });
  };

  return (
    <Wrapper>
      <SpeedDial
        icon={<TuneOutlined />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"down"}
        ariaLabel={"test"}
      >
        {Object.entries(options).map(([label, value]) => {
          const SvgIcon = optionToIcon[label];
          return (
            <SpeedDialAction
              key={label}
              icon={<SvgIcon style={options[label] ? null : { fill: "#333" }} />}
              label={label}
              value={value}
              title={label}
              onClick={handleToggleOptionClick(label)}
            />
          );
        })}
      </SpeedDial>
    </Wrapper>
  );
};

export default OptionsSpeedDial;
