import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@material-tailwind/react";
import play from "../images/play market.svg";
import app from "../images/app.svg";

const navList = (
  <ul className="mt-2 mb-4 flex sm:flex-row items-center sm:items-start flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-gray hover:text-orange duration-300"
        >
      <a href="/about" className="flex items-center dark:text-white">
        About
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-gray hover:text-orange duration-300"
    >
      <a href="/location" className="flex items-center dark:text-white">
        Location
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-gray hover:text-orange duration-300 dark:text-white"
    >
      <a href="/careers" className="flex items-center">
        Careers
      </a>
    </Typography>
  </ul>
);

const Footer = () => {
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
    <footer className="text-white" data-aos="fade">
      <div className="bg-dark_gray">
        <div className="container flex md:flex-row flex-col gap-10 justify-between items-center py-12">
          <div className="">
            <h1 className="md:text-center text-left text-3xl md:text-4xl lg:text-5xl font-semibold  lg:max-w-96  leading-tight">
              Sign up and Scoot off today
            </h1>
          </div>
          <div className="flex flex-row gap-10">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={app} alt="appstore" />
            </a>
            <a
              href="https://play.google.com/store/apps?hl=ru&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={play} alt="google play" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-footer py-4">
        <div className="container flex items-center gap-10 justify-between flex-col sm:flex-row">
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <Typography
              as="a"
              href="/"
              className=" cursor-pointer py-1.5 text-2xl font-semibold text-white"
            >
              scoot
            </Typography>
            <div>{navList}</div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange hover:fill-white duration-300"
              >
                <path
                  id="Path"
                  d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                />
              </svg>
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange hover:fill-white duration-300"
              >
                <path
                  id="Path"
                  d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z"
                />
              </svg>
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange hover:fill-white duration-300"
              >
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
