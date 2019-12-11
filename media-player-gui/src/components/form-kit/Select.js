import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react';


export default ({ name, id, options, fullWidth, optional, label, disabled, ...props }) => (
  <FormControl disabled={disabled} variant="outlined" fullWidth={fullWidth}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <MuiSelect {...props} inputProps={{ name, id }}>
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);
