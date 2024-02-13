import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./index.css";

function Home() {
  let Links = [{ name: "HOME" }, { name: "ABOUT ME" }, { name: "PROJECTS" }];

  let [isOpen, setisOpen] = useState(false);
  let [currentTab, setCurrentTab] = useState("HOME");

  return (
    <div className="h-full w-auto relative overflow-y-auto max-h-screen">
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
        className={`w-screen h-screen justify-center ${
          currentTab !== "HOME" && "hidden"
        }`}
      >
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="text-center">
            <div class="flex justify-center mb-16">
              <img src="./DSC08324.jpg" class="w-60 " alt="Image" />
            </div>

            <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              SIRISAK MAISUDJAI
            </h6>

            <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              JUNIOR DEVELOPER
            </h1>

            <p class="font-normal text-gray-600 text-md md:text-xl mb-16">
              I have a passion for software
              <span className="text-orange-500">.</span> I enjoy creating tools
              that make life easier for people
              <span className="text-orange-500">.</span>
            </p>
            <a
              href="https://drive.google.com/file/d/1KFrpr4JRLz42FIlnwozmT08tjgtggZq6/view?usp=sharing"
              class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold  text-md rounded-md hover:bg-orange-500 hover:text-white transition ease-linear duration-500"
              target="_blank"
            >
              Get my Resume
            </a>
          </div>
        </div>
      </div>
      <div
        name="ABOUT ME"
        className={`w-screen h-screen overflow-y-auto max-h-screen ${
          currentTab !== "ABOUT ME" && "hidden"
        }`}
      >
        {/* ABOUT ME */}
        <div class="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex items-center justify-center">
                <img
                  src="./DSC08324.JPG"
                  alt="Profile Picture"
                  class="w-auto h-80 rounded-lg"
                />
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div>
                <h2 class="text-2xl font-bold mb-2">ABOUT MYSELF</h2>
                <p class="text-gray-700">
                  I am a recent graduate with some programming experience
                  <span className="text-orange-500">,</span> and I have a strong
                  passion for learning and self-improvement in the field of web
                  and software development
                  <span className="text-orange-500">.</span> I am deeply
                  committed to problem-solving and thrive in creative team
                  collaboration to contribute to the success of the organization
                  <span className="text-orange-500">.</span>
                </p>
              </div>
            </div>
            <div class="mt-6">
              <h1 class="text-3xl font-bold mb-2">Sirisak Maisudjai</h1>
              <h1 class="text-lg font-bold mb-2">Junior Developer</h1>
              <p class="text-gray-700">
                Email: taaesirisakmaisudjai@gmail
                <span className="text-orange-500">.</span>com
              </p>
              <p class="text-gray-700">Phone: 082-602-2609</p>
              <p class="text-gray-700">
                Address: 16/4 Moo 9<span className="text-orange-500">,</span>{" "}
                Tha Sorm Subdistrict<span className="text-orange-500">,</span>{" "}
                Hua Sai<span className="text-orange-500">,</span> Nakhon Si
                Thammarat 80170
              </p>
            </div>
            <div class="mt-6">
              <h2 class="text-2xl font-bold mb-2">Skills</h2>
              <ul class="flex-wrap justify-center grid grid-cols-2 gap-2 list-disc list-inside marker:text-orange-500">
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
              <h2 class="text-2xl font-bold mb-2 mt-6">INTERNSHIP</h2>
              <h3 class="text-lg font-semibold">
                SOMSRI GARMENT CO., LTD. | December 2022 - April 2023
              </h3>
              <h4 class="text-md">Programmer</h4>
              <ul class="list-disc list-inside marker:text-orange-500">
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
              <h2 class="text-2xl font-bold mb-2 mt-6">EDUCATION</h2>
              <ul class="list-disc list-inside marker:text-orange-500">
                <li>
                  <span class="text-lg font-semibold">
                    NOPPHAKHUN PRACHASAN SCHOOL
                  </span>
                  <p class="text-gray-700 font-normal">2014-2017</p>
                  <p class="text-gray-700">High school</p>
                </li>
                <li>
                  <span class="text-lg font-semibold">
                    NAKHON SI THAMMARAT RAJABHAT UNIVERSITY
                  </span>
                  <p class="text-gray-700">2019-2023</p>
                  <p class="text-gray-700">
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
        className={`w-screen h-auto flex items-center justify-center ${
          currentTab !== "PROJECTS" && "hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
          <div className="max-w-sm bg-orange-100 rounded-lg shadow-lg my-4">
            <img
              className="w-full h-56 object-cover object-center"
              src="./ScreenshotReactEp1.png"
              alt="avatar"
            />
            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800">
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
              <h1 className="text-xl font-semibold text-gray-800">
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
  );
}

export default Home;
