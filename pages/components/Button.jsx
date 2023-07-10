import React from 'react';

const Button = (props) => {
  const { text, icon } = props;

  return (
    <button
      type="button"
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-xs font-light text-white focus:outline-none bg-transparent rounded-full border border-orange-200 hover:border-white hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
    >
      {icon && (
        <span className="mr-2 inline-flex items-center">
          {icon}
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
