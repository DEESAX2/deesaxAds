import Navbar from "../Components/Navbar";
import herobg from "../assets/Images/herobg.png"

import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>

      <Navbar />
      <section >
        <div>
          <img src={herobg} alt="background image" className="bg-cover h-[596] w-full pt-0" />
          <div>

          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">

          <h1>Connect For Work here at DeesaxConnect </h1>

          <p>Hire and Be Hired</p>

        </div>

      </section>

      <Footer />

    </>
  );

}
