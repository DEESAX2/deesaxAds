import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-8xl text-blue-500">ADVERTS SERVICES</h1>
      </div>

      <Footer />
    </>
  );
}

import Navbar from "../Components/Navbar";
import herobg from "../assets/Images/herobg.png"

export default function Home() {
    return (
        <>
  
  <Navbar/>
   <section >
        <div>
            <img src={herobg} alt="background image" className="bg-cover h-[596] w-full pt-0" />
            <div>
           
            </div>

            <div className="flex flex-col md:flex-row">

            </div>
        </div>
   </section>
            
        </>
    );
}