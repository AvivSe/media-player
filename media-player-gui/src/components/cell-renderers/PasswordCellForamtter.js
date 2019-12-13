import React from "react";
const PasswordCellFormatter = ({ getValue }) => (getValue() || "******");
export default PasswordCellFormatter;
