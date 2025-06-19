import { IoFastFood } from "react-icons/io5"
import banner from "../assets/bannerImg.jpg"
import { GrSecure } from "react-icons/gr"
import { GiFoodTruck } from "react-icons/gi"
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* image section */}
                <div data-aos="zoom-in">
                    <img src={banner} alt="banner"
                    className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
                </div>
                {/* text section */}
                <div className="flex flex-col gap-3">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% off</h1>
                    <p className="text-sm text-gray-500 tracking-wider leading-5">Lorem ipsum, dolor sit amet consecteur</p>
                    <div className="flex gap-6 flex-col">
                        <div data-aos="fade-up" className="flex items-center gap-6">
                            <div className="w-12 h-12 shadow-sm  rounded-full flex items-center dark:bg-violet-400 bg-violet-200 p-4">
                                <GrSecure className="text-4xl"/>
                            </div>
                            <p>Quality Products</p>

                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full flex items-center dark:bg-orange-400 bg-orange-200 p-4">
                                <IoFastFood className=""/>
                            </div>
                            <p>Fast Delivery</p>

                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full flex items-center dark:bg-green-400 bg-green-100 p-4">
                                <GiFoodTruck/>
                            </div>
                            <p>Easy Payement Method</p>

                        </div>
                        <div data-aos="fade-up" className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full flex items-center dark:bg-yellow-400 bg-yellow-100 p-4">
                                <IoFastFood className=""/>
                            </div>
                            <p>Get Offers</p>

                        </div>
                        

                    </div>
                    
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Banner
