import { X } from "lucide-react";

import AddProductForm from "../Forms/AddProductForm";

function Modal({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 w-[500px] h-[700px] mx-auto backdrop-blur-sm  text-black">
        <p className="text-white  flex justify-center">
          <img className="h-[50px] w-[50px]" src="logo.png" alt="" />
        </p>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white">
            <X />
          </button>
        </div>
        <AddProductForm />
      </div>
    </>
  );
}
export default Modal;
