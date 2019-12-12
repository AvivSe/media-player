import { TextField as MuiTextField } from "@material-ui/core";
import React from "react";

const TextField = props => <MuiTextField autoComplete={'off'} variant={"outlined"} {...props} />;

export default TextField;
