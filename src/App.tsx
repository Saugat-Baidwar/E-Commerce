// import Navbar from "./Components/Navbar";
// import Carousl from "./Components/Carousel";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";

// import Modal from "./Components/Modal";

// import { useState } from "react";
import Navbar from "./Components/Navbar";
import Carousl from "./Components/Carousel";
import Body from "./Components/Body";

// import Modal from "./Components/Modal";
// import AddProductForm from "./Forms/AddProductForm";

function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    // <>
    //

    //
    //   {/* <Navbar />
    //   <Carousl />

    //   <Body />

    //   <Footer /> */}
    // </>
    <>
      <Navbar />
      <Carousl />
      <Body />
      {/* <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 px-4 py-2 rounded-lg text-lg mt-10"
        >
          ADD NEW PRODUCT
        </button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div> */}
    </>
  );
}

export default App;
