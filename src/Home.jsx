import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stick from "./images/stick.svg";
import arrow from "./images/arrow.svg";
import circles from "./images/circles.svg";
import { Button } from "@material-tailwind/react";
import phone from "./images/Group 8.svg";
import scooter from "./images/Group 9.svg";
import scooter2 from "./images/Group 10.svg";
import human from "./images/Group 15.svg";
import city from "./images/Group 14.svg";
import hand from "./images/Group 18.svg";

const Home = () => {
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
      <div className="container flex flex-col items-center gap-28 pb-14">
        <section
          className="container bg-hero bg-cover bg-center bg-no-repeat py-20 2xl:h-[600px] flex flex-col items-center 2xl:items-start gap-y-20 text-white"
          data-aos="fade"
        >
          <h1 className="flex text-center 2xl:text-left justify-center items-center text-5xl max-w-[500px] xl:max-w-[600px] 2xl:pl-48 h-[112px] font-semibold">
            Scooter sharing made simple
          </h1>
          <div className="flex flex-col gap-5 md:text-left text-center">
            <div className="flex flex-col 2xl:flex-row gap-20 items-center 2xl:items-start justify-start text-center 2xl:text-left">
              <div className="flex gap-10">
                <img src={stick} alt="stick" className="hidden 2xl:flex " />
                <p className="max-w-[405px]">
                  Scoot takes the hassle out of urban mobility. Our bikes are
                  placed in convenient locations in each of our cities. Use our
                  app to locate the nearest bike, unlock it with a tap, and
                  you’re away!
                </p>
              </div>
              <div className="flex 2xl:hidden">
                <Button
                  variant="text"
                  size="md"
                  className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange"
                >
                  <span>Get Scootin</span>
                </Button>
              </div>
              <div className="hidden 2xl:flex justify-between w-full 2xl:w-[700px]">
                <img src={arrow} alt="arrow" className="w-96 p-0 2xl:pt-10" />
                <img src={circles} alt="circles" className="p-0 2xl:pt-24" />
              </div>
            </div>
            <div className="2xl:flex items-start pl-[245px] hidden">
              <Button
                variant="text"
                size="md"
                className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange"
              >
                <span>Get Scootin</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-row flex-wrap justify-center w-full gap-x-44 gap-y-20" data-aos="fade-up">
          <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start text-center md:text-start gap-16 lg:max-w-[322px]">
            <img src={phone} alt="phone" />
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-semibold text-footer dark:text-white">
                Locate with app
              </h1>
              <p className="max-w-[350px] text-gray dark:text-white">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start text-center md:text-start gap-16 lg:max-w-[322px]">
            <img src={scooter} alt="scooter" />
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-semibold text-footer dark:text-white">
                Pick your scooter
              </h1>
              <p className="max-w-[350px] text-gray dark:text-white">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start text-center md:text-start gap-16 lg:max-w-[322px]">
            <img src={scooter2} alt="scooter" />
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-semibold text-footer dark:text-white">
                Enjoy the ride
              </h1>
              <p className="max-w-[350px] text-gray dark:text-white">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-28">
          <div className="flex xl:flex-row flex-col-reverse justify-between items-center gap-20">
            <div className="max-w-[445px] text-gray dark:text-white flex flex-col items-center text-center xl:text-left xl:items-start gap-8" data-aos="fade-right">
              <h1 className="text-4xl text-footer font-semibold dark:text-white">
                Easy to use riding telemetry
              </h1>
              <p>
                The Scoot app is available with riding telemetry. This means it
                can show you your average speed, how long you've been using the
                scooter, your traveling distance, and many more things all in an
                easy to use app.
              </p>
              <Button
                variant="text"
                size="md"
                className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
              >
                <span>Learn More</span>
              </Button>
            </div>
            <div className="">
              <img src={human} alt="human" data-aos="fade-left" />
            </div>
          </div>
          <div className="flex xl:flex-row-reverse flex-col-reverse justify-between items-center gap-20">
            <div className="max-w-[445px] text-gray dark:text-white flex flex-col items-center text-center xl:text-left xl:items-start gap-8" data-aos="fade-left">
              <h1 className="text-4xl text-footer font-semibold dark:text-white">
                Coming to a city near you
              </h1>
              <p>
                Scoot is available in 4 major cities so far. We're expanding
                rapidly, so be sure to let us know if you want to see us in your
                hometown. We're aiming to let our scooters loose on 23 cities
                over the coming year.
              </p>
              <Button
                variant="text"
                size="md"
                className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
              >
                <span>Learn More</span>
              </Button>
            </div>
            <div className="">
              <img src={city} alt="city" data-aos="fade-right" />
            </div>
          </div>
          <div className="flex xl:flex-row flex-col-reverse justify-between items-center gap-20">
            <div className="max-w-[445px] text-gray dark:text-white flex flex-col items-center text-center xl:text-left xl:items-start gap-8" data-aos="fade-right">
              <h1 className="text-4xl text-footer font-semibold dark:text-white">
                Zero hassle payments
              </h1>
              <p>
                Our payment is as easy as one two three. We accept most credit
                cards and debit cards. You can also link your PayPal account
                inside the app. Need to pay later? No worries! You can defer
                payment for up to a month.
              </p>
              <Button
                variant="text"
                size="md"
                className="flex bg-orange rounded-none border border-orange hover:bg-transparent hover:text-orange text-white"
              >
                <span>Learn More</span>
              </Button>
            </div>
            <div className="">
              <img src={hand} alt="hand" data-aos="fade-left" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
