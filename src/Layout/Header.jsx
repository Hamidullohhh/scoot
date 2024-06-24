import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-gray dark:text-white hover:text-orange duration-300"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-gray dark:text-white hover:text-orange duration-300"
      >
        <a href="/location" className="flex items-center">
          Location
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-gray dark:text-white hover:text-orange duration-300"
      >
        <a href="/careers" className="flex items-center">
          Careers
        </a>
      </Typography>
    </ul>
  );

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  
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
    <Navbar
      className="border-transparent outline-none sticky top-0 z-10 h-max max-w-full rounded-none shadow-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-blue-gray-800"
      data-aos="fade"
    >
      <header className="container">
        <div className="flex items-center justify-between ">
          <div className="flex flex-row gap-10 items-center">
            <Typography
              as="a"
              href="/"
              className=" cursor-pointer py-1.5 text-2xl font-semibold text-dark_gray dark:text-white"
            >
              scoot
            </Typography>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => darkModeHandler()} className="text-gray">
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="md"
                className="hidden lg:inline-block bg-orange text-white rounded-none border border-orange hover:bg-transparent hover:text-orange"
              >
                <span>Get Scootin</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-orange"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              variant="text"
              size="md"
              className="lg:hidden inline-block bg-orange border border-orange text-white hover:bg-transparent hover:text-orange rounded-none"
            >
              <span>Get Scootin</span>
            </Button>
          </div>
        </MobileNav>
      </header>
    </Navbar>
  );
}

export default Header;
