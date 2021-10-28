import React from "react";

export const TextInput = ({ name, handleChange, ...rest }) => {
  return (
    <div>
      <input type="text" name={name} onChange={handleChange} {...rest} />
    </div>
  );
};
