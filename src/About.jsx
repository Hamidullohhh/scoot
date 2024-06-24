import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import women from "./images/Group 31.svg";
import metro from "./images/Group 32.svg";
import iphone from "./images/Group 11.svg";
import maped from "./images/Group 25.svg";
import man from "./images/Group 12.svg";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <main className="dark:bg-blue-gray-800 dark:text-white">
      <section data-aos="fade">
        <div className="bg-bit bg-cover h-44 flex items-center">
          <div className="container flex items-center justify-center xl:justify-normal">
            <h1 className="text-white text-4xl font-semibold pt-6">About</h1>
          </div>
        </div>
      </section>
      <section className="container py-10 flex xl:flex-row flex-col-reverse gap-16 xl:gap-0 xl:text-normal justify-between items-center">
        <div className="flex flex-col items-center xl:items-start gap-6" data-aos="fade-right">
          <div className="flex flex-col gap-6 justify-center items-center xl:items-start text-center xl:text-start">
            <h1 className="max-w-[445px] text-4xl text-footer font-semibold dark:text-white">
              Mobility for the digital era
            </h1>
            <p className="max-w-[445px] text-gray dark:text-white">
              Getting around should be simple (and even fun!) for everyone. We
              embrace technology to provide low cost, smart access to scooters
              at your fingertips.
            </p>
          </div>
        </div>
        <img
          src={women}
          alt=""
          className="flex justify-end"
          data-aos="fade-left"
        />
      </section>
      <section className="container py-10 flex xl:flex-row flex-col gap-16 xl:gap-0 xl:text-normal justify-between items-center">
        <img
          src={metro}
          alt=""
          className="flex justify-end"
          data-aos="fade-right"
        />
        <div className="flex flex-col items-center xl:items-start gap-6" data-aos="fade-left">
          <div className="flex flex-col gap-6 justify-center items-center xl:items-start text-center xl:text-start">
            <h1 className="max-w-[300px] text-4xl text-footer font-semibold dark:text-white">
              Better urban living
            </h1>
            <p className="max-w-[445px] text-gray dark:text-white">
              We’re helping connect cities and bring people closer together. Our
              scooters are also fully-electric and we offset the minimal carbon
              footprint for each ride.
            </p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col justify-normal items-center gap-5">
        <div className="flex justify-center items-center py-10" data-aos="fade">
          <h1 className="max-w-[540px] text-footer text-5xl font-semibold dark:text-white">
            Our values
          </h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-x-32 gap-y-20" data-aos="fade-up">
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
      <section className="container max-w-[730px] flex justify-end flex-col py-20 gap-14">
        <div className="flex items-center justify-center" data-aos="fade">
          <h1 className="text-4xl text-footer font-semibold dark:text-white">
            FAQs
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-32 w-full">
          <h1
            className="text-3xl text-footer font-semibold w-full dark:text-white flex justify-center md:justify-normal"
            data-aos="fade-right"
          >
            How it works
          </h1>
          <div data-aos="fade-left" className="">
            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="dark:text-white"
              >
                How do I download the app?
              </AccordionHeader>
              <AccordionBody>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you'll be re-directed to the correct page.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="dark:text-white"
              >
                Can I find a nearby Scoots?
              </AccordionHeader>
              <AccordionBody>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="dark:text-white"
              >
                Do I need a license to ride?
              </AccordionHeader>
              <AccordionBody>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-32">
          <h1
            className="text-3xl text-footer font-semibold w-full dark:text-white flex justify-center md:justify-normal"
            data-aos="fade-right"
          >
            Safe driving
          </h1>
          <div data-aos="fade-left" className="">
            <Accordion open={open === 4} icon={<Icon id={4} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="dark:text-white"
              >
                Should I wear a helmet?
              </AccordionHeader>
              <AccordionBody>
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="dark:text-white"
              >
                How about the rules & regulations?
              </AccordionHeader>
              <AccordionBody>
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open}/>}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="dark:text-white"
              >
                What if I damage my Scoot?
              </AccordionHeader>
              <AccordionBody>
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
