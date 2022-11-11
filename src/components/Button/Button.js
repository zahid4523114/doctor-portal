import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn text-white border-none bg-gradient-to-r from-cyan-400 to-blue-300">
        {children}
      </button>
    </div>
  );
};

export default Button;
