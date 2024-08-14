import { X } from "lucide-react";

import AddProductForm from "../Forms/AddProductForm";

function Modal({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 w-[500px] h-[700px] mx-auto backdrop-blur-sm mt-9 text-black">
        <p className="text-white pt-12 flex justify-center">
          <img src="logo.png" alt="" />
        </p>
        <div className="flex justify-end ">
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
