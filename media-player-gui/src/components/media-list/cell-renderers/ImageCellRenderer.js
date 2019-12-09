import React from "react";

export default ({getValue}) => !!getValue()?<img height={48} src={getValue()} alt={''}/>:null;
