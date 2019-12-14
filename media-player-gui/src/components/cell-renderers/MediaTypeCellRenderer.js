import React from "react";
import { VideocamOffOutlined, VideocamOutlined } from "@material-ui/icons";
import styled from 'styled-components'
const StyledIcon = styled.svg`
  fill: deeppink;
`;
const ImageCellRenderer = ({ getValue }) => getValue() === "feature-movie" ? <StyledIcon as={VideocamOutlined}/> : <VideocamOffOutlined />;
export default ImageCellRenderer;
