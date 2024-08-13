import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useCartStore } from "../store/cart";
function Navbar() {
  const cartQuantity = useCartStore((state) => state.quantity);
  // const increaseCartQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseCartQuantity = useCartStore((state) => state.decreaseQuantity);
  // const productsInCart = useCartStore((state) => state.products);

  const handleRemoveFromCart = () => {
    decreaseCartQuantity();
  };

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
        {/* <BsCart3 className="w-[50px] h-[48px]" /> */}

        <div>
          <BsCart3 className="w-[50px] h-[48px]" /> <sup>{cartQuantity}</sup>
          <div>
            <ul className="flex gap-1">
              <li>
                tshirt <button onClick={handleRemoveFromCart}>Remove</button>
              </li>

              <li>
                Shirt <button onClick={handleRemoveFromCart}>Remove</button>
              </li>
              <li>
                phone <button onClick={handleRemoveFromCart}>Remove</button>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="w-[50px] h-[48px] flex items-center"> */}
        <CgProfile className="w-[50px] h-[48px]" />
        {/* </div> */}
      </div>
    </>
  );
}
export default Navbar;
