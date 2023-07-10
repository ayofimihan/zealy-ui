import Link from "next/link";
import SmallButton from "./ButtonSmall";

const CCards = (props) => {
  return (
    <div className="w-full cursor-pointer">
      <div className="block w-full p-6 bg-transparent border border-gray-700 rounded-xl  fcards ">
        <div className="flex flex-row">
          <h1 className="mr-2">
            {/* Add your logo or image here */}
            <img
              src={`/${props.image}.png`}
              alt="Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
          </h1>

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </div>

        <p className="font-thin mt-5 text-gray-500 ">{props.subtitle}</p>

        <div className="flex flex-row">
          {(props.btext || props.icon) && (
            <div className="flex flex-row items-center">
              <SmallButton text={props.btext} icon={props.icon} />
            </div>
          )}
          {(props.btext2 || props.icon2) && (
            <div className="flex flex-row items-center">
              <SmallButton text={props.btext2} icon={props.icon2} />
            </div>
          )}
          {(props.btext3 || props.icon3) && (
            <div className="flex flex-row items-center">
              <SmallButton text={props.btext3} icon={props.icon3} />
            </div>
          )}
          {(props.btext4 || props.icon4) && (
            <div className="flex flex-row items-center">
              <SmallButton text={props.btext4} icon={props.icon4} />
            </div>
          )}
          {(props.btext5 || props.icon5) && (
            <div className="flex flex-row items-center">
              <SmallButton text={props.btext5} icon={props.icon5} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CCards;
