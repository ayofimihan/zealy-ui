const TCards = (props) => {
  return (
    <div className="w-full cursor-pointer mb-10">
      <div
        className="flex justify-center items-center w-full p-8 bg-cover bg-center border border-indigo-200 rounded-xl fcards"
        style={{ backgroundImage: `url('${props.image}')` }}
      >
        <h5 className=" text-sm font-bold tracking-tight text-white">
          {props.title}
        </h5>
      </div>
    </div>
  );
};

export default TCards;
