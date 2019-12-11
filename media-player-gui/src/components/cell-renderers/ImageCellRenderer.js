import React from "react";
const ImageCellRenderer = ({ getValue }) => (!!getValue() ? <img height={48} src={getValue()} alt={""} /> : null);
export default ImageCellRenderer;
