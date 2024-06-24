import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import locations from "./images/Group 7.svg";

const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <main className="dark:bg-blue-gray-800" data-aos="fade">
      <section>
        <div className="bg-bit bg-cover h-44 flex items-center">
          <div className="container flex items-center justify-center xl:justify-normal">
            <h1 className="text-white text-4xl font-semibold pt-6">
              Locations
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <img src={locations} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Location;
