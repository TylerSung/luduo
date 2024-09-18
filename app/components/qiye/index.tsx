import firmItems from "../FirmItem";

const index = () => {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="grid grid-cols-6 grid-rows-2 gap-8">
          {firmItems.map((item, index) => (
            <img key={index} src={item.img} alt={item.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
