import React from "react";

const ButtonFull = ({ children }) => {
  return (
    <div>
      <button className="btn w-full text-white border-none bg-gradient-to-r from-cyan-400 to-blue-300">
        {children}
      </button>
    </div>
  );
};

export default ButtonFull;
