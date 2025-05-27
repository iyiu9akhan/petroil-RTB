import React from "react";

function Button({children, className}) {
  return (
    <div>
      <button
        href="#"
        className={ `capitalize text-white border-2   font-medium  text-lg w-[142px] h-[51px] focus:outline-none ${className}` }
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
