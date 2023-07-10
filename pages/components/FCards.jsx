import React from 'react';
import Link from 'next/link';

const FCards = (props) => {
  return (
    <div className="w-full cursor-pointer">
        <div
          className="block w-full p-6 bg-cover bg-center bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 fcards"
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            <p className="mb-1">{props.titleOne}</p>
            <p className="mb-1">{props.titleTwo}</p>
          </h5>
          <p className="font-thin text-lime">{props.subtitle}</p>
          <div className="glass-button-dark-bg mt-2">
            <Link href="/">Learn More →</Link>
          </div>
        </div>
    </div>
  );
};

export default FCards;
