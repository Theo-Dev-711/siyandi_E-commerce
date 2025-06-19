// import React from 'react'
import Image1 from "../assets/Shirt.png";
import Image2 from "../assets/Shirt2.png";
import Image3 from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";
// import AOS from "aos"

const Topproducts = () => {
  const bestproducts = [
    {
      id: 1,
      img: Image1,
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 1,
      img: Image2,
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 1,
      img: Image3,
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 1,
      img: Image2,
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  return (
    <div className=" mt-10">
      <div className="container mx-auto ">
        {/* Headers Section */}
        <div className="text-center mb-36">
          <p className="text-sm text-secondary">Top Rated products For You</p>
          <h1 className="text-2xl font-bold">Best Products</h1>
          <p className="text-sm text-gray-600 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/*Body section  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center b  gap-20 justify-center items-center  mx-auto ">
            {bestproducts.map((data) => (
              <div key={data.id} data-aos="zoom-out">
                <div>
                  <div
                    className="max-w-[300px] hover:bg-secondary bg-white
                   rounded-xl cursor-pointer hover:scale-105 transition-all
                   duration-300  hover:text-white  mx-auto place-items-center
                   justify-center shadow-2xl group mb-20"
                  >
                    <div className="h-[100px]">
                      <img
                        src={data.img}
                        className="transform -translate-y-20 max-w-[140px] 
                       block object-cover  mx-auto place-items-center "
                      />
                    </div>
                    <div className="text-center p-4  ">
                      <div className="w-full flex items-center justify-center gap-1 ">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                      </div>
                      <h1 className="font-bold text-xl">{data.title}</h1>
                      <p className="text-sm line-clamp-1">{data.description}</p>
                      <button onClick={()=>alert("Service indisponible")} className="bg-secondary px-3 py-2 rounded-full
                       font-bold mt-4 hover:scale-105 duration-300 text-white
                       group-hover:bg-white group-hover:text-primary">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topproducts
// {/* <div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
//          lg:grid-cols-4 place-items-center gap-20 bg-gray-100"
//         >
//           {bestproducts.map((data) => (
//             <div key={data.id} data-aos="zoom-in" className="">
//               <div className="">
//                 <div
//                   className=" rounded-2xl group hover:bg-black
//                 hover:scale-105 transition-all duration-300 bg-white place-items-center max-w-[300px] shadow-lg hover:text-white  "
//                 >
//                   {/* image Section */}
//                   <div className="h-[100px]">
//                     <img
//                       className=" max-w-[140px] mx-auto block transform -translate-y-20 object-cover cursor-pointer
//                   "
//                       src={data.img}
//                     />
//                   </div>
//                   {/* details description */}
//                   <div className="text-center p-4">
//                     <div className="w-full flex items-center justify-center gap-1 ">
//                       {/* Star rating */}
//                       <FaStar className="text-yellow-500" />
//                       <FaStar className="text-yellow-500" />
//                       <FaStar className="text-yellow-500" />
//                       <FaStar className="text-yellow-500" />
//                       <FaStar className="text-yellow-500" />
//                     </div>
//                     <h1 className="font-bold">{data.title}</h1>
//                     <p className="text-xs font-bold">{data.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> */}
