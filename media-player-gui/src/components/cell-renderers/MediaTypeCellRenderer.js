import React from "react";
import { VideocamOutlined, VideocamOffOutlined } from "@material-ui/icons";

const ImageCellRenderer = ({ getValue }) => getValue() === "feature-movie" ? <VideocamOutlined/> : <VideocamOffOutlined/>;
export default ImageCellRenderer;
