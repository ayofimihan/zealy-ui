import React from "react";

const TimeButton = (props) => {
  const { text } = props;

  return (
    <div
      type="button"
      className="flex justify-center items-center mt-1.5 py-1 px-2 text-xs font-light text-white focus:outline-none bg-transparent rounded-xl border border-none hover:border-white smallbtn-grey-background focus:z-10 focus:ring-4 focus:ring-gray-200"
    >
      {text}
    </div>
  );
};

export default TimeButton;
