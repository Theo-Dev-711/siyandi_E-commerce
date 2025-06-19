// import  { useEffect } from "react";
import Women1 from "../assets/women.png";
import Women2 from "../assets/Women2.jpg";
import Women3 from "../assets/Women3.jpg";
import Women4 from "../assets/Women4.jpg";
import Women5 from "../assets/women3.jpg";
import { FaStar } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Products = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 500, once: true }); // Initialisation d'AOS
  // }, []);

  const data = [
    {
      id: 1,
      img: Women1,
      title: "Printed T-Shirt",
      rating: 4.5,
      aosDelay: 0, // Premier élément sans délai
      color: "White",
    },
    {
      id: 2,
      img: Women2,
      title: "Printed T-Shirt",
      rating: 5.5,
      aosDelay: 200, // Délai de 200ms pour le deuxième élément
      color: "Red",
    },
    {
      id: 3,
      img: Women3,
      title: "Printed T-Shirt",
      rating: 3.5,
      aosDelay: 400, // Délai de 400ms pour le troisième élément
      color: "Brown",
    },
    {
      id: 4,
      img: Women4,
      title: "Printed T-Shirt",
      rating: 4.1,
      aosDelay: 600, // Délai de 600ms pour le quatrième élément
      color: "Yellow",
    },
    {
      id: 5,
      img: Women5,
      title: "Printed T-Shirt",
      rating: 2.3,
      aosDelay: 800, // Délai de 800ms pour le cinquième élément
      color: "Pink",
    },
  ];

  return (
    <div className="mt-8">
      <div className="container">
        <div className="text-center">
          <p data-aos="fade-up" className="text-sm text-secondary">Top selling</p>
          <h1
            data-aos="fade-up"
            className="font-bold text-2xl"
          >
            Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio voluptate.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 place-items-center">
          {data.map((item) => (
            <div 
               
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={item.aosDelay} // Utilisation du délai de chaque élément
              
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
                <p className="text-gray-500 font-bold">{item.color}</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <FaStar className="text-secondary" />
                <p className="font-bold">{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="flex justify-center mt-16">
          <button className="bg-primary  px-3 py-2 text-white rounded-lg">
            View All products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;