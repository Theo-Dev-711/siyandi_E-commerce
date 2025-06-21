// src/components/Topproducts.js

import { bestProducts, FaStar } from "../constants";

const Topproducts = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        {/* Headers Section */}
        <div className="text-center mb-36">
          <p className="text-sm text-secondary">Top Rated products For You</p>
          <h1 className="text-2xl font-bold dark:text-white">Best Products</h1>
          <p className="text-sm text-gray-600 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-20 mx-auto">
            {bestProducts.map((data) => (
              <div key={data.id} data-aos="zoom-out">
                <div className="max-w-[300px] hover:bg-black dark:hover:bg-secondary bg-white rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:text-white mx-auto place-items-center justify-center shadow-2xl group mb-20">
                  <div className="h-[100px]">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="transform -translate-y-20 max-w-[140px] block object-cover mx-auto"
                    />
                  </div>
                  <div className="text-center p-4">
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="font-bold text-xl">{data.title}</h1>
                    <p className="text-sm line-clamp-1">{data.description}</p>
                    <button
                      onClick={() => alert("Service indisponible")}
                      className="bg-secondary px-3 py-2 rounded-full font-bold mt-4 hover:scale-105 duration-300 text-white group-hover:bg-white group-hover:text-primary"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topproducts;