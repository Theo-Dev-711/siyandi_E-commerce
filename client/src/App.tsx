import NavBar from "./components/NavBar.tsx"
import Hero from "./components/Hero"
import Banner from "./components/Banner.tsx"
import Topproducts from "./components/TopProducts.tsx"
import Products from "./components/Products.tsx"
import { useEffect } from "react"
import Aos from "aos"
import Subscribe from "./components/Subscribe.tsx"
import Testimonials from "./components/Testimonials.tsx"
import Footer from "./components/Footer.tsx"

const App = () => {
  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration:800,
      easing:"ease-in-sine",
      delay:100

    });
    Aos.refresh();
  }, [])
  

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-800 duration-200">
      <NavBar/>
      <Hero />
      <Topproducts/>
      <Products/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
