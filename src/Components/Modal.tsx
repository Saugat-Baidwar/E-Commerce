import { X } from "lucide-react";

import AddProductForm from "../Forms/AddProductForm";

function Modal({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 w-[500px] h-[500px] mx-auto backdrop-blur-sm text-black">
        <div className="flex justify-end mt-4">
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
