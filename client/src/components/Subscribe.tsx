import Banner from "../assets/banner.jpg"

const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%"
};
const Subscribe = () => {
  return (
    <div data-aos="zoom-in" style={bannerImg} className="text-white mb-20 bg-gray-100 dark:bg-gray-800 ">
        <div className="container backdrop-blur-sm  py-10">
            <div className="max-w-xl mx-auto space-y-6">
                <h1 className="font-semibold text-2xl sm:text-4xl !text-center sm:text-left">
                    Get Notified About New Project
                </h1>
                <input
                    data-aos="fade-up"
                    type="text"
                    placeholder="Enter your email"
                    className="w-full p-3 text-black darktext-white rounded-lg focus:outline-none"
                />
            </div>

        </div>
      
    </div>
  )
}

export default Subscribe
