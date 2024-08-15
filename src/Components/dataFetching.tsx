import { useQuery } from "@tanstack/react-query";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useCartStore } from "../store/cart";
import { useState } from "react";
import Modal from "./Modal";

type TProduct = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
  };
};

function Card() {
  const [openEditModal, setOpenEditModal] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     if (!response.ok) {
  //       console.log("Unable to fetch products");
  //       return;
  //     }

  //     const data = await response.json();

  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        console.log(dataFetch);
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh">
        website is loding....
      </div>
    );
  }

  if (isError) {
    console.log("error while fetching data");
    return <div>error is feteching</div>;
  }

  if (!data) {
    console.log("data is undefined or null");
    return <div> Data</div>;
  }
  console.log("data....", data);

  // const handleCartIncrease = () => {
  //   increaseQuantity();
  // };
  const handleDelete = async (id: number) => {
    const deleteApi = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    if (deleteApi.ok) {
      console.log(`Successfully delete id: ${id}`);
    } else {
      console.log("Failed to delete item");
    }
  };

  return (
    // <div className="grid grid-cols-3 gap-2  m-4  ">
    //   {data?.map((items) => (
    //     <ul className="bg-red-600 hover:bg-black text-white" key={items.id}>
    //       <li>
    //         <img
    //           src={items.image}
    //           alt={items.title}
    //           style={{ width: "100px" }}
    //         />
    //       </li>
    //       <li>{items.title}</li>

    //       <li>{items.price}</li>
    //       <li>{items.description}</li>
    //     </ul>
    //   ))}
    // </div>
    <>
      <div className="grid grid-cols-6 mt-10  ">
        {data.map((items: TProduct) => (
          <ul className="w-[193.33px] h-[337.33px]" key={items.id}>
            <p className="flex  justify-end ">
              <p>
                <MdModeEdit onClick={() => setOpenEditModal(true)} />
                {openEditModal && (
                  <Modal onClose={() => setOpenEditModal(false)} />
                )}
                <MdDelete onClick={() => handleDelete(items.id)} />
              </p>
            </p>
            <img
              className=" ml-16  w-[90px] h-[90px]  "
              src={items.image}
              alt={items.title}
            />

            <h2 className="font-bold line-clamp-1">{items.title}</h2>

            <h2 className=" h-[100px] overflow-auto ">{items.description}</h2>
            <h2 className="font-semibold">Price:${items.price}</h2>
            <h2 className="font-bold">{items.rating.rate}</h2>

            <button
              onClick={() => increaseQuantity()}
              className="text-pink-600 border-solid border-2 border-pink-800 rounded-[10px] w-[141px] mt-1 ml-3 hover:bg-[#100F44] hover:text-[#EE8F00]"
            >
              Add to Cart
            </button>
          </ul>
        ))}
      </div>

      {/* <div className="grid grid-cols-5 gap-4 bg-yellow-500">
        {data.map((items) => (
          <>
            <div className="bg-pink-950 flex  flex-col justify-center">
              <img
                className=" ml-16 w-[90px] h-[90px]"
                src={items.image}
                alt=""
              />
              <div className="bg-red-700">{items.title}</div>
            </div>
          </>
        ))}
      </div> */}
    </>
  );
}
export default Card;
