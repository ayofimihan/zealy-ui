import React from "react";
import Link from "next/link";

const SpaceCard = (props) => {
  return (
    <div className="w-full cursor-pointer">
      <div
        className="block w-full py-16 px-10 -mt-20 bg-cover bg-center  border border-white rounded-xl shadowfcards"
        style={{ backgroundImage: `url('${props.image}')` }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="w-1/3">
            <h5 className="mb-2 text-lg tracking-tight text-white">
              <p className="mb-1">{props.titleOne}</p>
              <p className="mb-1">{props.titleTwo}</p>
            </h5>
            <p className="font-thin text-white break-words">{props.subtitle}</p>
          </div>
          <div className="flex justify-start">
            <div className="glass-button-dark-bg mt-2">
              <Link href="/">Learn More →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
