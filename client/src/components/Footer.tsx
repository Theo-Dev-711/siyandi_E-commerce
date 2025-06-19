import Banner from "../assets/footer.jpg"
import Logo from "../assets/logo.jpeg"
import { BsInstagram, BsFacebook, BsLinkedin, BsAirplane, BsPhone } from "react-icons/bs";


const Footer = () => {
    const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
};
    const FooterLink = [
        {
            title: "Home",
            link: "/#",
        },
        {
            title: "About",
            link: "/#About",
        },
        {
            title: "Contact",
            link: "/#Contact",
        },
        {
            title: "Blog",
            link: "/#Blog",
        },
    ]
  return (
    <div className="text-white  " style={bannerImg}>
        <div className="container">
            <div data-aos="zoom-in" className="grid grid-cols-4 max-sm:grid-cols-2 md:grid-cols-2 max-lg:grid-cols-3  pt-5 pb-44 mx-20 my-40">
                {/* Container ShopSy */}
                <div className="py-8 px-4 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img src={Logo} className="max-w-[50px]"/>                    
                        <h1 className="text-xl font-bold text-white sm:text-left text-justify mb-3">Shopsy</h1>
                    </div>
                    <div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                    </div>  
                </div>
                {/* deuxieme grid */}
                <div>
                    <div className="flex flex-col mb-5">
                        <h1 className="text-2xl font-bold">Important Link</h1>
                        <ul className="flex flex-col gap-3 mt-2">
                            {FooterLink.map((data, id)=>(
                                <li key={id} className="hover:text-primary hover:translate-x-1 duration-300 text gray-200">
                                    <a href={data.link}>{data.title}</a>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>
                {/* Troisieme grid */}
                <div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Links</h1>
                        <ul className="flex flex-col gap-3 mt-2">
                            {FooterLink.map((data, id)=>(
                                <li key={id} className="hover:text-primary hover:translate-x-1 duration-300 text gray-200">
                                    <a href={data.link}>{data.title}</a>
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>
                {/* Quatrieme grid */}
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-3 text-2xl">
                            <BsInstagram/>
                            <BsFacebook/>
                            <BsLinkedin/>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsAirplane className="rotate-45 text-2xl"/>
                            <p>Cameroun, Douala-Denver</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsPhone className="text-2xl" />
                            <a href="tel:+237 683178515" className=" hover:underline">
                                683178515
                            </a>
                        </div>

                    </div>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Footer
