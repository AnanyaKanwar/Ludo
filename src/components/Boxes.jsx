import React from "react";

const Boxes = ({ num, clickhandler, colour }) => {
  return (
    <button
      onClick={clickhandler}
      className={` ${colour} border-2 px-6 py-9 h-1/2 flex items-center hover:bg-black hover:text-white`}
    >
      <p className=" text-4xl font-semibold">{num}</p>
    </button>
  );
};

export default Boxes;
