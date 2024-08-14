import { useState } from "react";
import bodyData from "../Data/bodyData";

import Carousel2 from "./Carousel2";
import DataFetching from "./dataFetching";
import Modal from "./Modal";

function Body() {
  const [showModal, setShowModal] = useState(false);
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
        <hr className="h-px my-8 bg-black text-2xl  border-4 dark:bg-black" />

        {/* BUTTION designe..................*/}
        <p className="text-2xl font-semibold flex justify-end mt-4">
          {" "}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#FF3269] text-white  rounded-[10px]"
          >
            ADD NEW PRODUCT{" "}
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </p>

        <div>
          <DataFetching />
        </div>
        <div>
          <img src="/categoryimg.png" alt="" />
        </div>
        <Carousel2 />
      </div>
    </>
  );
}
export default Body;
