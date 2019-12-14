import React from "react";
import { VideocamOffOutlined, VideocamOutlined } from "@material-ui/icons";

const ImageCellRenderer = ({ getValue }) => getValue() === "feature-movie" ? <VideocamOutlined/> : <VideocamOffOutlined/>;
export default ImageCellRenderer;
