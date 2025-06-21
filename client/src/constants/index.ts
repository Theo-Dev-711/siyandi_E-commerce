// src/constants.ts

import ImageA from "../assets/shirt.png";
import ImageB from "../assets/shirt2.png";
import ImageC from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

export const bestProducts = [
  {
    id: 1,
    img: ImageA,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 2,
    img: ImageB,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    img: ImageC,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    id: 4,
    img: Image2,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

// Exporter les icônes
export { FaStar };

// Banner.tsx

import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import banner from "../assets/bannerImg.jpg";

export const bannerImage = banner;

export const bannerText = {
  title: "Winter Sale up to 50% off",
  description: "Lorem ipsum, dolor sit amet consecteur",
  features: [
    { icon: GrSecure, text: "Quality Products" },
    { icon: IoFastFood, text: "Fast Delivery" },
    { icon: GiFoodTruck, text: "Easy Payment Method" },
    { icon: IoFastFood, text: "Get Offers" },
  ],
};

//footer.tsx
// src/constants.ts

import Banniere from "../assets/footer.jpg";
import Logo from "../assets/logo/logo.png";
import { BsInstagram, BsFacebook, BsLinkedin, BsAirplane, BsPhone } from "react-icons/bs";

export const footerBanner = Banniere;
export const footerLogo = Logo;

export const footerLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#About" },
  { title: "Contact", link: "/#Contact" },
  { title: "Blog", link: "/#Blog" },
];

export const socialIcons = {
  Instagram: BsInstagram,
  Facebook: BsFacebook,
  Linkedin: BsLinkedin,
  Airplane: BsAirplane,
  Phone: BsPhone,
};

//hero.tsx
// src/constants.ts

import Image1 from "../assets/women.png";
import Image2 from "../assets/shopping.png";
import Image3 from "../assets/sale.png";

export const imageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: "Consectetur adipiscing elit.",
  },
];
//NavBar.tsx
// src/constants.ts

import Logo1 from "../assets/logo/logo.png";


export const logo = Logo1;

export const navbarLinks = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#", title: "Top Rated" },
  { id: 3, link: "#", title: "Kids Wears" },
  { id: 4, link: "#", title: "Electronique" },
];

export const dropdownItems = [
  { id: 1, link: "#", name: "Trending Products" },
  { id: 2, link: "#", name: "Best Selling" },
  { id: 3, link: "#", name: "Top Rated" },
];

//products
// src/constants.ts

import Women1 from "../assets/women.png";
import Women2 from "../assets/women2.jpg";
import Women3 from "../assets/women3.jpg";
import Women4 from "../assets/women4.jpg";
import Women5 from "../assets/women3.jpg";

export const productData = [
  {
    id: 1,
    img: Women1,
    title: "Printed T-Shirt",
    rating: 4.5,
    aosDelay: 0,
    color: "White",
  },
  {
    id: 2,
    img: Women2,
    title: "Printed T-Shirt",
    rating: 5.5,
    aosDelay: 200,
    color: "Red",
  },
  {
    id: 3,
    img: Women3,
    title: "Printed T-Shirt",
    rating: 3.5,
    aosDelay: 400,
    color: "Brown",
  },
  {
    id: 4,
    img: Women4,
    title: "Printed T-Shirt",
    rating: 4.1,
    aosDelay: 600,
    color: "Yellow",
  },
  {
    id: 5,
    img: Women5,
    title: "Printed T-Shirt",
    rating: 2.3,
    aosDelay: 800,
    color: "Pink",
  },
];
//subscribe.tsx
// src/constants.ts

import Banner from "../assets/banner.jpg";

export const bannerStyles = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

//testimonials.tsx
// src/constants.ts

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

export const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user2,
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user3,
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user4,
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user5,
  },
  {
    id: 5,
    name: "Siyandji Youmbi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user1,
  },
];
