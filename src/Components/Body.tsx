import bodyData from "../Data/bodyData";

function Body() {
  return (
    <>
      <div className="w-[1280px] mx-auto">
        <p className="text-[#FF3269] text-4xl font-semibold">
          Explore By Category{" "}
        </p>
        <div className="mt-8">
          {bodyData.map((item) => (
            <p>
              <img src={item.image} alt="" />
            </p>
          ))}
        </div>
        <p className="text-[#FF3269] text-2xl font-semibold flex justify-end">
          View all Categories
        </p>
      </div>
    </>
  );
}
export default Body;
