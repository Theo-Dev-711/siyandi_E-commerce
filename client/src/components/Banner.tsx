// src/components/Banner.js
import { bannerImage, bannerText } from "../constants";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-6 my-10 dark:text-white">
          {/* Image section */}
          <div data-aos="zoom-in">
            <img
              src={bannerImage}
              alt="banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Text section */}
          <div className="flex flex-col gap-3">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              {bannerText.title}
            </h1>
            <p className="text-sm text-gray-500 tracking-wider leading-5 dark:text-white">
              {bannerText.description}
            </p>
            <div className="flex gap-6 flex-col">
              {bannerText.features.map((feature, index) => {
                const Icon = feature.icon; // Récupère le composant d'icône
                return (
                  <div key={index} data-aos="fade-up" className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center dark:bg-violet-400 bg-violet-200 p-4">
                      <Icon className="text-4xl" /> {/* Utilisation de l'icône ici */}
                    </div>
                    <p>{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;