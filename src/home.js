import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./index.css";

function Home() {
  let Links = [{ name: "HOME" }, { name: "ABOUT ME" }, { name: "PROJECTS" }];

  let [isOpen, setisOpen] = useState(false);
  let [currentTab, setCurrentTab] = useState("HOME");

  return (
    <div className="h-full w-auto relative max-h-screen">
      <nav className="flex justify-between items-center p-6 md:p-7">
        <div className="flex text-4xl cursor-pointer items-center">
          <span className="hover:text-orange-900">
            SIRISAK<span className="text-orange-500">.</span>{" "}
          </span>
        </div>
        <Bars3BottomRightIcon
          onClick={() => setisOpen(true)}
          className="w-10 h-10 cursor-pointer hover:text-orange-900"
        />
      </nav>
      <div
        className={`fixed top-0 ${
          isOpen ? "right-0" : "-right-full"
        } w-full h-full flex justify-center items-center bg-orange-500 transition-all duration-300`}
      >
        <XMarkIcon
          onClick={() => setisOpen(false)}
          className="absolute top-7 right-7 w-10 h-10 cursor-pointer text-white hover:text-orange-100"
        />
        <ul name="menu" className="text-white text-4xl cursor-pointer">
          {Links.map((link) => (
            <li
              key={link.name}
              className="my-4 font-bold hover:text-orange-100"
            >
              <a
                onClick={() => {
                  setCurrentTab(link.name);
                  setisOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        name="HOME"
        className={`w-screen h-screen overflow-auto ${
          currentTab !== "HOME" && "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-7 mb-24">
          <div className="text-center">
            <div className="flex justify-center my-12">
              <img
                src="./DSC08324.JPG"
                className="w-60 rounded-full"
                alt="Image"
              />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              SIRISAK MAISUDJAI
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              JUNIOR DEVELOPER
            </h1>

            <p className="font-normal text-gray-600 text-sm sm:text-base mb-10">
              I have a passion for software
              <span className="text-orange-500">.</span> I enjoy creating tools
              that make life easier for people
              <span className="text-orange-500">.</span>
            </p>
            <a
              href="https://drive.google.com/file/d/1KFrpr4JRLz42FIlnwozmT08tjgtggZq6/view?usp=sharing"
              className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold  text-md rounded-md hover:bg-orange-500 hover:text-white transition ease-linear duration-200"
              target="blank"
            >
              Get my Resume
            </a>
          </div>
        </div>
      </div>
      <div
        name="ABOUT ME"
        className={`w-screen h-screen overflow-auto bg-orange-100 ${
          currentTab !== "ABOUT ME" && "hidden"
        }`}
      >
        {/* ABOUT ME */}
        <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-center">
                <img
                  src="./DSC08324.JPG"
                  alt="Profile Picture"
                  className="w-auto h-80 rounded-lg"
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-2xl font-bold mb-2">ABOUT MYSELF</h2>
                <p className="text-gray-700 text-justify text-sm sm:text-base">
                  I am a recent graduate with some programming experience
                  <span className="text-orange-500">,</span> and I have a strong
                  passion for learning and self-improvement in the field of web
                  and software development
                  <span className="text-orange-500">.</span> I am deeply
                  committed to problem-solving and thrive in creative team
                  collaboration to contribute to the success of the organization
                  <span className="text-orange-500">.</span>
                </p>
                <div className="flex justify-center marker:text-orange-500 m-7">
                  <a
                    class="icon-10 facebook m-2"
                    href="https://web.facebook.com/kasiris1310"
                    target="blank"
                    title="Facebook"
                  >
                    <div>
                      <svg
                        className="h-10 w-10 fill-current mr-1 hover:bg-white hover:text-orange-500 rounded-lg text-white bg-black transition hover:rounded-lg ease-linear duration-500"
                        viewBox="0 0 496 512"
                      >
                        <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="icon-13 github m-2"
                    href="https://github.com/acer-pro13"
                    target="blank"
                    title="GitHub"
                  >
                    <div>
                      <svg
                        className="h-10 w-10 fill-current mr-1 hover:bg-white hover:text-orange-500 rounded-lg text-white bg-black transition hover:rounded-lg ease-linear duration-500"
                        viewBox="0 0 496 512"
                      >
                        <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="icon-15 instagram m-2"
                    href="https://www.instagram.com/ka_shi_risu/"
                    target="blank"
                    title="Instagram"
                  >
                    <div>
                      <svg
                        className="h-10 w-10 fill-current mr-1 hover:bg-white hover:text-orange-500 rounded-lg text-white bg-black transition hover:rounded-lg ease-linear duration-500"
                        viewBox="0 0 496 512"
                      >
                        <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                        <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                        <circle cx="351.5" cy="160.5" r="21.5"></circle>
                      </svg>
                    </div>
                  </a>
                  <a
                    class="icon-17 linkedin m-2"
                    href="https://www.linkedin.com/in/sirisak-maisudjai-328315280/"
                    target="blank"
                    title="LinkedIn"
                  >
                    <div>
                      <svg
                        className="h-10 w-10 fill-current mr-1 hover:bg-white hover:text-orange-500 rounded-lg text-white bg-black transition hover:rounded-lg ease-linear duration-500"
                        viewBox="0 0 496 512"
                      >
                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-bold mb-2">Sirisak Maisudjai</h1>
              <h1 className="text-lg font-bold mb-2">Junior Developer</h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Email: taaesirisakmaisudjai@gmail
                <span className="text-orange-500">.</span>com
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Phone: 082-602-2609
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Address: 16/4 Moo 9<span className="text-orange-500">,</span>{" "}
                Tha Sorm Subdistrict<span className="text-orange-500">,</span>{" "}
                Hua Sai<span className="text-orange-500">,</span> Nakhon Si
                Thammarat 80170
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <ul className="flex-wrap justify-center text-sm sm:text-base grid grid-cols-2 gap-2 list-disc list-inside marker:text-orange-500">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>Python</li>
                <li>GitHub</li>
                <li>WordPress</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 mt-6">INTERNSHIP</h2>
              <h3 className="font-semibold text-base sm:text-lg">
                SOMSRI GARMENT CO., LTD. | December 2022 - April 2023
              </h3>
              <h4 className="text-sm sm:text-base">Programmer</h4>
              <ul className="text-sm sm:text-base list-disc list-inside marker:text-orange-500">
                <li>
                  Improve and develop the website according to the instructions
                  from the team leader<span className="text-orange-500">.</span>
                </li>
                <li>
                  Create an application using Google Sheet
                  <span className="text-orange-500">.</span>
                </li>
                <li>
                  Enhance the accuracy of the shirt pricing calculation system
                  on the website<span className="text-orange-500">.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 mt-6">EDUCATION</h2>
              <ul className="list-disc list-inside marker:text-orange-500">
                <li>
                  <span className="text-base sm:text-lg font-semibold">
                    NOPPHAKHUN PRACHASAN SCHOOL
                  </span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    2014-2017
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    High school
                  </p>
                </li>
                <li>
                  <span className="text-base sm:text-lg font-semibold">
                    NAKHON SI THAMMARAT RAJABHAT UNIVERSITY
                  </span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    2019-2023
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Business Computer GPA : 3
                    <span className="text-orange-500">.</span>53
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        name="PROJECTS"
        className={`w-screen h-screen overflow-auto ${
          currentTab !== "PROJECTS" && "hidden"
        }`}
      >
        <div className="flex items-center justify-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
            <div className="max-w-sm bg-orange-100 rounded-lg shadow-lg my-4">
              <img
                className="w-full h-56 object-cover object-center"
                src="./ScreenshotReactEp1.png"
                alt="avatar"
              />
              <div className="px-6 py-4">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
                  React-ep<span className="text-orange-500">.</span>1
                </h1>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg
                    className="h-6 w-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  <a
                    target="blank"
                    className="text-sm sm:text-base"
                    href="https://github.com/acer-pro13/React-ep.1.git"
                  >
                    Link!
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow-lg my-4 bg-orange-100">
              <img
                className="w-full h-56 object-cover object-center"
                src="./ScreenshotReactPortfolio.png"
                alt="avatar"
              />
              <div className="px-6 py-4">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
                  React Portfolio
                </h1>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg
                    className="h-6 w-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  <a
                    target="blank"
                    className="text-sm sm:text-base"
                    href="https://github.com/acer-pro13/React-ep.1.git"
                  >
                    Link!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
