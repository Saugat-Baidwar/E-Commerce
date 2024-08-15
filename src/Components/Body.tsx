import { useState } from "react";
import bodyData from "../Data/bodyData";

// import Carousel2 from "./Carousel2";
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
        <p className=" flex justify-end ">
          {" "}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#FF3269] text-white  rounded-[10px] w-[200px] h-[45px]"
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
        {/* <Carousel2 /> */}

        <div className="flex justify-center">
          <div>
            <img src="/Cimg1.png" alt="" />
          </div>
          <div>
            <img src="/Cimg2.png" alt="" />
          </div>
          <div>
            <img src="/Cimg3.png" alt="" />
          </div>
          <div>
            <img src="/Cimg4.png" alt="" />
          </div>
          <div>
            <img src="/Cimg5.png" alt="" />
          </div>
          <div>
            <img src="/Cimg6.png" alt="" />
          </div>
          <div>
            <img src="/Cimg7.png" alt="" />
          </div>
          <div>
            <img src="/Cimg8.png" alt="" />
          </div>
          <div>
            <img src="/Cimg9.png" alt="" />
          </div>
        </div>

        <p className="text-[#FF3269] text-3xl font-bold mt-6">
          Brands That We Are Passionate About
        </p>
        <div className="flex justify-center mt-7">
          <div>
            <img src="/Container.png" alt="" />
          </div>
          <div>
            <img src="/Container1.png" alt="" />
          </div>
          <div>
            <img src="/Container2.png" alt="" />
          </div>
          <div>
            <img src="/Container3.png" alt="" />
          </div>
          <div>
            <img src="/Container4.png" alt="" />
          </div>
          <div>
            <img src="/Container5.png" alt="" />
          </div>
          <div>
            <img src="/Container6.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
