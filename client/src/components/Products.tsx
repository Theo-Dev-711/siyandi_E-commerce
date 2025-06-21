// src/components/Products.js

import { FaStar } from "react-icons/fa6";
import { productData } from "../constants";

const Products = () => {
  return (
    <div className="mt-8 dark:text-white">
      <div className="container">
        <div className="text-center">
          <p data-aos="fade-up" className="text-sm text-secondary">Top selling</p>
          <h1 data-aos="fade-up" className="font-bold text-2xl">Products</h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio voluptate.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 place-items-center">
          {productData.map((item) => (
            <div 
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={item.aosDelay}
            >
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
              </div>
              <div className="mt-3">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-500 font-bold dark:text-white">{item.color}</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <FaStar className="text-secondary" />
                <p className="font-bold">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-primary px-3 py-2 text-white rounded-lg">
            View All products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;