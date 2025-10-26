import React from "react";

function Button(props) {
  return (
    <button
      type="submit"
      className="bg-black text-white rounded lg:w-3/4 px-6 py-2 md:px-16 lg:px-20 hover:bg-in hover:bg-emerald-700 cursor-pointer transition-colors duration-300"
    >
    {props.text }
    </button>
  );
}

export default Button;
