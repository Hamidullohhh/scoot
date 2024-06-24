import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import humans from "./images/Group 30 (1).svg";
import { Button } from "@material-tailwind/react";
import iphone from "./images/Group 11.svg";
import maped from "./images/Group 25.svg";
import man from "./images/Group 12.svg";

const Careers = () => {
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
    <main className="dark:bg-blue-gray-800">
      <section>
        <div className="bg-bit bg-cover h-44 flex items-center" data-aos="fade">
          <div className="container flex items-center justify-center xl:justify-normal">
            <h1 className="text-white text-4xl font-semibold pt-6">Careers</h1>
          </div>
        </div>
      </section>
      <section className="container py-10 flex flex-col xl:flex-row justify-between items-center gap-20 xl:gap-0">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left gap-6" data-aos="fade-right">
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[400px] text-4xl text-footer font-semibold dark:text-white">
              Care to join our mission?
            </h1>
            <p className="max-w-[445px] text-gray dark:text-white">
              We're always looking for ambitious individuals to help us on our
              journey. If you're passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Say Hello</span>
            </Button>
          </div>
        </div>
        <img src={humans} alt="" className="flex justify-end" data-aos="fade-left" />
      </section>
      <section className="container flex flex-col justify-normal items-center gap-5">
        <div className="flex justify-center items-center py-10">
          <h1 className="max-w-[540px] text-footer text-5xl font-semibold dark:text-white">
            Why join us?
          </h1>
        </div>
        <div
          className="flex flex-row justify-center flex-wrap gap-x-32 gap-y-20"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-5">
            <img src={iphone} alt="" />
            <h1 className="max-w-[350px] text-footer text-4xl font-semibold text-center dark:text-white">
              Our tech
            </h1>
            <p className="text-gray max-w-[350px] text-center dark:text-white">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img src={maped} alt="" />
            <h1 className="max-w-[350px] text-footer text-4xl font-semibold text-center dark:text-white">
              Our integrity
            </h1>
            <p className="text-gray max-w-[350px] text-center dark:text-white">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img src={man} alt="" />
            <h1 className="max-w-[350px] text-footer text-4xl font-semibold text-center dark:text-white">
              Our community
            </h1>
            <p className="text-gray max-w-[350px] text-center dark:text-white">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
      </section>
      <section className="container py-20 flex items-center justify-center flex-col gap-5">
        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-left">
          <div>
            <h1 className="max-w-[206px] text-footer text-2xl">
              General Manager
            </h1>
            <span className="text-gray">Jakarta, Indonesia</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>

        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-right">
          <div>
            <h1 className="max-w-[206px] text-footer text-2xl">
              UI/UX Designer
            </h1>
            <span className="text-gray">Yokohama, Japan</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>

        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-left">
          <div>
            <h1 className="text-footer text-2xl">Blog Content Copywriter</h1>
            <span className="text-gray">New York, United States</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>

        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-right">
          <div>
            <h1 className="max-w-[206px] text-footer text-2xl">
              Graphic Designer
            </h1>
            <span className="text-gray">New York, United States</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>

        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-left">
          <div>
            <h1 className="max-w-[206px] text-footer text-2xl">
              Fleet Supervisor
            </h1>
            <span className="text-gray">Jakarta, Indonesia</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>

        <div className="w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1110px] h-[128px] bg-snow flex flex-row items-center justify-between px-10" data-aos="fade-right">
          <div>
            <h1 className="max-w-[206px] text-footer text-2xl">UX Analyst</h1>
            <span className="text-gray">London, United Kingdom</span>
          </div>
          <div>
            <Button
              variant="text"
              size="md"
              className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
            >
              <span>Apply</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
