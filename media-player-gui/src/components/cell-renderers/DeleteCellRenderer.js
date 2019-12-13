import React from "react";
import styled from "styled-components";

const DeleteCell = styled.div`
  cursor: pointer;
`;

const DeleteCellRenderer = ({ data, onClick, api }) => {
  const handleClickDelete = () => onClick({ username: data.username, api });
  return <DeleteCell onClick={handleClickDelete}>X</DeleteCell>;
};

export default DeleteCellRenderer;
