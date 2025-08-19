import {ArrowRightIcon } from "@heroicons/react/24/solid";
import Buttons from "../component/buttons";
import myPic from "../img/timi-pictures/timi1.jpeg";
import resume from "../resume/Timi Maliki-resume.pdf"
import { FaDownload} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full ovo-regular grid place-content-center mt-10 md:mt-20">
      <div className="flex justify-center mb-4">
        <img
          src={myPic}
          alt="Timi maliki"
          className="w-40 h-40 object-cover"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div
        className="myName flex justify-center gap-4 mb-1 md:mb-3"
        style={{ letterSpacing: "2px" }}
      >
        <h3 className="font-normal text-lg">Hi! I'm Timi Maliki</h3>
        <h2 className="text-2xl animate-wave -mt-2"> 👋</h2>
      </div>

      <div className="job-description text-lg p-2 md:p-0 md:text-4xl font-medium text-center  mb-2 md:mb-5 ">
        <h1>I am a Frontend Web developer from Ebonyi State  Nigeria</h1>
      </div>
  

      <div className="btns flex justify-center gap-2">
       <a href="#contact">
       <Buttons color={"bg-black  hover:bg-blue-600 hover:text-white transition-all duration-300"} textColor={"text-white border border-white"} icons={<ArrowRightIcon className="w-5 h-5 mt-1"/>} text={"contact me"}/>
        </a> 
        <Buttons color={"border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] hover:bg-red-600 hover:text-white transition-all duration-300"} textColor={""} icons={<FaDownload  className="w-5 h-5 mt-1 "/>} text={"my resume"} doc={resume}/>
      </div>
    </div>
  );
};

export default Hero;
