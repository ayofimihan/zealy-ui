import React from "react";

const SmallButton = (props) => {
  const { text, icon, click } = props;

  return (
    <button
      type="button"
      className="flex items-center h-8 py-1 px-2 mr-2 mb-2 mt-6 text-sm font-xs font-light text-white focus:outline-none bg-transparent rounded-xl border border-none hover:border-white smallbtn-grey-background focus:z-10 focus:ring-4 focus:ring-gray-200"
      onClick={click}
    >
      {icon && (
        <span className={`inline-flex ${text ? "pr-2" : "items-center"}`}>
          {icon}
        </span>
      )}
      {text && <div>{text}</div>}
    </button>
  );
};

export default SmallButton;
