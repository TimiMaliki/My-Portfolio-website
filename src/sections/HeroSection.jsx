import {ArrowRightIcon } from "@heroicons/react/24/solid";
import Buttons from "../component/buttons";
import myPic from "../img/timi-pictures/timi1.jpeg";
import resume from "../resume/Timi.pdf"
import { FaDownload} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full ovo-regular grid place-content-center mt-20 md:mt-28">
      <div className="flex justify-center mb-4">
        <img
          src={myPic}
          alt="Timi maliki"
          className="w-40 h-40 object-cover"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div
        className="myName flex justify-center gap-4 mb-3 md:mb-5"
        style={{ letterSpacing: "2px" }}
      >
        <h3 className="font-normal text-lg">Hi! I'm Timi Maliki</h3>{" "}
        <h2 className="text-2xl animate-wave -mt-2"> 👋</h2>
      </div>

      <div className="job-description text-3xl md:text-5xl font-medium text-center  md-2 mb-2 md:mb-5">
        <h1>frontend Web developer</h1>
        <h1> based in Nigeria.</h1>
      </div>
      <div className="intro p-5 lg:p-2 mb-4 md:mb-8">
       <h4 className="text-base md:text-lg font-light">I am a frontend developer from Ebonyi, Nigeria with 5 years of experience</h4>
      </div>

      <div className="btns flex justify-center gap-2">
        <Buttons color={"bg-black"} textColor={"text-white"} icons={<ArrowRightIcon className="w-5 h-5 mt-1"/>} text={"contact me"} doc={"https://wa.me/qr/RJYG6ACYJUUGB1"}/>
        <Buttons color={"border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"} textColor={""} icons={<FaDownload  className="w-5 h-5 mt-1 "/>} text={"my resume"} doc={resume}/>
      </div>
    </div>
  );
};

export default Hero;
