// src/components/Footer.js

import { footerBanner, footerLogo, footerLinks, socialIcons } from "../constants";

const Footer = () => {
  const bannerImg = {
    backgroundImage: `url(${footerBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="text-white" style={bannerImg}>
      <div className="container p-10 flex flex-col justify-end">
        <div data-aos="zoom-in" className="gap-10 grid grid-cols-4 max-md:grid-cols-2 md:grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-3 pt-5">
          {/* Container ShopSy */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <img src={footerLogo} className="max-w-[50px]" />
              <h1 className="text-xl font-bold text-white sm:text-left text-justify mb-3">Shopsy</h1>
            </div>
            <div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.</p>
            </div>
          </div>
          {/* Deuxième grid */}
          <div>
            <div className="flex flex-col mb-5">
              <h1 className="text-2xl font-bold">Important Link</h1>
              <ul className="flex flex-col gap-3 mt-2 max-sm:flex-row">
                {footerLinks.map((data, id) => (
                  <li key={id}>
                    <a href={data.link} className="text-gray-200 hover:text-primary hover:translate-x-1 duration-300 inline-block">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Troisième grid */}
          <div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="flex flex-col gap-3 mt-2 max-sm:flex-row">
                {footerLinks.map((data, id) => (
                  <li key={id}>
                    <a href={data.link} className="hover:text-primary hover:translate-x-1 duration-300 text-gray-200 inline-block">{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Quatrième grid */}
          <div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-3 text-2xl">
                {Object.values(socialIcons).map((Icon, index) => (
                  <Icon key={index} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <socialIcons.Airplane className="rotate-45 text-2xl" />
                <p>Cameroun, Douala-Denver</p>
              </div>
              <div className="flex items-center gap-2">
                <socialIcons.Phone className="text-2xl" />
                <a href="tel:+237683178515" className="hover:underline">683178515</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;