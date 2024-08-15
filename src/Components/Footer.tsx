import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="flex justify-around bg-[#100F44] text-white gap-4 mt-4">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex gap-14 text-white mt-3 ">
          <ul>
            <li>Television &Accessories</li>
            <li>Home Appliances</li>
            <li>Phones & Wearables</li>
            <li>Computers & Tablets</li>
            <li>Kitchen Appliances</li>
            <li>Audio & Video</li>
          </ul>
          <ul>
            <li>Grooming & Personal Care</li>
            <li>Cameras & Accessories</li>
            <li>Smart Devices</li>
            <li>Gaming</li>
            <li>Accessories</li>
            <li>Top Brands</li>
          </ul>
        </div>
        <div>
          <h1>Connect with us</h1>
          <input
            className="rounded-[11.2px] h-[40px] w-[250px] text-black "
            type="text"
          />
          <div className="flex mt-4 gap-4  ">
            <FaYoutube className=" hover:bg-slate-500 blur-3 rounded-md " />
            <FaFacebook className="hover:bg-slate-500 blur-3" />
            <IoLogoInstagram className="hover:bg-slate-500 blur-3" />
            <FaLinkedin className="hover:bg-slate-500 blur-3" />
            <FaXTwitter className="hover:bg-slate-500 blur-3" />
          </div>
          <p className="mt-2">
            © Copyright 2024 Electrical <br /> Solution. All rights <br />
            reserved
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
