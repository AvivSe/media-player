import React from "react";

export default ({getValue, api}) => {
  const value = getValue();
  if (typeof api.handleMoreDetailsClicked === 'function') {
    return <div onClick={() => {
      api.handleMoreDetailsClicked({value})
    }}>{value}</div>
  }
};
