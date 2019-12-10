import React from "react";
import Checkbox from "../form-kit/Checkbox";
import styled from "styled-components";

export const SEARCH_AS_YOU_TYPE_OPT = 'Search as you type';
export const GRID_MODE_OPT = 'Grid mode';

const Row = styled.div`
  display: flex;
`;

export default ({handleSubmit, handleChange, useOptions}) => {
  const [options, setOptions] = useOptions;

  const handleClick = optionName => e => {
    e.persist();
    setOptions(prevState => ({...prevState, [optionName]: e.target.checked}));
  };

  return <Row>
    {
      Object.entries(options).map(([label, value]) =>
          <Checkbox
            key={label}
            label={label}
            value={value}
            onClick={handleClick(label)}
          />)
    }
  </Row>
};
