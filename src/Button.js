import React from "react";

function Button({ children }) {
  return (
    <button className=" bg-yellow-500 rounded-lg font-semibold text-sm px-3 hover:bg-yellow-600">
      {children}
    </button>
  );
}

export default Button;
