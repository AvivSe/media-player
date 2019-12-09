import React  from "react";
import TextField from "../TextField";

export default ({handleSubmit, handleChange}) => {

  return <TextField
    fullWidth
    label={'Search as you type'}
    onKeyPress={handleSubmit}
    onChange={handleChange}
  />};
