import React from "react";

function Button({ children, className}) {
  return (
    <div>
      <button
       
        className={`capitalize text-white border-2 font-medium  text-lg w-[100px] h-[40px] md:w-[142px] md:h-[51px] focus:outline-none ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
