import Buttons from "../component/buttons";
import { FaArrowDown } from "react-icons/fa";
import rwd from "../img/achievement/responsiveWebDesign.png";
import Js from "../img/achievement/JavaScript.png";
import dora from "../img/achievement/dora.jpg";
import gsap from "../img/achievement/udemy-certification.jpg";
import adp from "../img/achievement/1000-mentorship-minutes.pdf";

const Achievement = () => {
  return (
    <div className="w-full" id="achievement">
      {/* Achievement Section */}
      <div className="relative py-2 md:py-0 px-4 lg:px-8 overflow-hidden ovo-regular text-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl lg:text-9xl font-bold md:font-extrabold mb-6 p-3 md:p-0">
            Achievements
          </h1>
          <p className="text-xl lg:text-2xl  max-w-4xl mx-auto text-center">
            "Milestones That Reflect My Journey"
          </p>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-7xl mx-auto py-4 md:py-16 px-4 lg:px-8">
        <div className="relative">
          {/* Timeline Line */}
          {/* <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-pink-300 -ml-px"></div> */}

          {/* Achievement One */}
          <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
              <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 font-bold rounded-full p-5 w-12 h-12 flex items-center justify-center align-items mr-4">
                    1
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                    FreeCodeCamp - Responsive Web Design 2022
                  </h3>
                </div>
                <p className=" mb-4">Projects Built :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Survey Form – A responsive form with structured input
                      fields and accessibility in mind.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Tribute Page – A clean, semantic HTML page honoring a
                      notable figure E.g chadwick boseman.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Technical Documentation Page – Structured documentation
                      layout with a sticky navigation bar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Product Landing Page – A responsive promotional page with
                      call-to-action sections.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Personal Portfolio Website – A showcase of projects with
                      responsive design and smooth navigation.
                    </span>
                  </li>
                </ul>
                <div className="flex justify-center align-middle gap-2">
                  <p className="text-md md:text-lg">
                    {" "}
                    Download Certification :{" "}
                  </p>
                  <div className="download -my-1 md:-my-3">
                    <Buttons
                      color={
                        "border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
                      }
                      textColor={""}
                      icons={<FaArrowDown className="w-5 h-5 mt-1 " />}
                      text={"Document"}
                      doc={rwd}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2"></div>
          </div>

          {/* Achievement Two */}
          <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-2">
              <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 font-bold p-5 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    2
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                    FreeCodeCamp - JavaScript Algorithms and Data Structures
                    2024
                  </h3>
                </div>
                <p className=" mb-4">Projects Built :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Palindrome Checker – Determines if a given string reads
                      the same forward and backward.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Roman Numeral Converter – Converts numbers to Roman
                      numeral representation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Telephone Number Validator – Validates U.S. phone number
                      formats.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Cash Register – Simulates a cash register that returns
                      change based on available currency.
                    </span>
                  </li>
                </ul>
                <div className="flex justify-center align-middle gap-2">
                  <p className="text-md md:text-lg">
                    {" "}
                    Download Certification :{" "}
                  </p>
                  <div className="download -my-1 md:-my-3">
                    <Buttons
                      color={
                        "border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
                      }
                      textColor={""}
                      icons={<FaArrowDown className="w-5 h-5 mt-1 " />}
                      text={"Document"}
                      doc={Js}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-1"></div>
          </div>

          {/* Achievement Three */}
          <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
              <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 text-pink-600 font-bold p-5 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    3
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                    Udemy - Dora Master Course 2024
                  </h3>
                </div>
                <h4 className="mb-4"> What Is Dora?</h4>
                <p className="mb-2">
                  Dora is an intuitive, AI-assisted, no-code website builder
                  that empowers users to design, animate, and launch interactive
                  3D websites without needing programming skills. It’s built to
                  feel familiar—like Figma—but enhanced with motion, dimension,
                  and AI-driven suggestions for layouts and responsiveness
                </p>
                <p className=" mb-4">Key Learnings :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-pink-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Mastered both the core features and advanced capabilities
                      of the Dora platform to create optimized, user-friendly
                      designs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-8 h-8 md:w-6 md:h-6 text-pink-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Learnt the basic features of Dora and the advanced
                      features of the platform
                    </span>
                  </li>
                </ul>

                <div className="flex justify-center align-middle gap-2">
                  <p className="text-md md:text-lg">
                    {" "}
                    Download Certification :{" "}
                  </p>
                  <div className="download -my-1 md:-my-3">
                    <Buttons
                      color={
                        "border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
                      }
                      textColor={""}
                      icons={<FaArrowDown className="w-5 h-5 mt-1 " />}
                      text={"Document"}
                      doc={dora}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2"></div>
          </div>

          {/* Achievement Four */}
          <div className="flex flex-col lg:flex-row items-center mb-24 lg:mb-32">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-2">
              <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 font-bold  p-5 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    4
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                    Udemy - Web JavaScript Animations with GreenSock 2025
                  </h3>
                </div>
                <p className=" mb-4">Projects built :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                    Alabi AutoMobile – Interactive automotive website with smooth GSAP-powered animations . : {" "}
                    <a href="https://github.com/TimiMaliki/GSAP_PROJECTS">
                        View Project
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                    International Home Decoration – Stylish home décor site featuring engaging scroll-based effects. :{" "}
                      <a href="https://github.com/TimiMaliki/GSAP_PROJECTS">
                      View Project
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                    Studio-i.O – Minimalist creative studio site enhanced with dynamic animations. :{" "}
                      <a href="https://github.com/TimiMaliki/GSAP_PROJECTS">
                      View Project
                      </a>
                    </span>
                  </li>
                </ul>
                <div className="flex justify-center align-middle gap-2">
                  <p className="text-md md:text-lg">
                    {" "}
                    Download Certification :{" "}
                  </p>
                  <div className="download -my-1 md:-my-3">
                    <Buttons
                      color={
                        "border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
                      }
                      textColor={""}
                      icons={<FaArrowDown className="w-5 h-5 mt-1 " />}
                      text={"Document"}
                      doc={gsap}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-1"></div>
          </div>

          {/* Achievement Five */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1 lg:order-1">
              <div className=" p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 p-5 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    5
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                    ADPList - Community Achievement
                  </h3>
                </div>
                <p className=" mb-4">Achieved 1,000+ mentorship minutes,
                 providing guidance, sharing knowledge,
                  and fostering community learning within the ADPList network.</p>
                <div className="flex justify-center align-middle gap-2">
                  <p className="text-md md:text-lg">
                    {" "}
                    Download Certification :{" "}
                  </p>
                  <div className="download -my-1 md:-my-3">
                    <Buttons
                      color={
                        "border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
                      }
                      textColor={""}
                      icons={<FaArrowDown className="w-5 h-5 mt-1 " />}
                      text={"Document"}
                      doc={adp}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16 order-2 lg:order-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
