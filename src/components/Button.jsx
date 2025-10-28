import React from "react";

function Button({onClick , text}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-black text-white rounded lg:w-3/4 px-6 py-2 md:px-16 lg:px-20 hover:bg-in hover:bg-emerald-700 cursor-pointer transition-colors duration-300"
    >
    {text }
    </button>
  );
}

export default Button;
