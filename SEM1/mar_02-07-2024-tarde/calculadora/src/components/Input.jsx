import React from "react";

export const Input = ({display}) => {
  return (
        <input type="text" className="display" id="display" readOnly value={display} />
    );
};
