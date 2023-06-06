import React from "react";

const Button = ({ className, name, method }) => {
  return method ? (
    <button type="button" className={`mx-2 ${className}`} onClick={method}>
      {name}
    </button>
  ) : (
    <button type="button" className={`mx-2 ${className}`}>
      {name}
    </button>
  );
};

export default Button;
