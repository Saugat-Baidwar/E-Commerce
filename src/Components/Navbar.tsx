import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <>
      <div className="bg-[#100F44] w-[1512] h-[107px] text-white flex justify-center items-center gap-10">
        <div>
          <img src="logo.png" alt="logo img" />
        </div>
        <div>
          <input
            className="w-[732px] h-[50px] rounded-[10px] text-black"
            type="text"
            placeholder="search"
          />
        </div>
        {/* <div className="w-[50px] h-[48px] flex items-center"> */}
        <BsCart3 className="w-[50px] h-[48px]" />
        {/* </div> */}
        {/* <div className="w-[50px] h-[48px] flex items-center"> */}
        <CgProfile className="w-[50px] h-[48px]" />
        {/* </div> */}
      </div>
    </>
  );
}
export default Navbar;
