import Card from "../component/card";
import Header from "../component/Headers";


import profilePicture from "../img/timi-pictures/timi4.jpeg";
import lang from "../img/tool/meeting_15644311.png";
import edu from "../img/tool/graduated_13305391.png";
import project from "../img/tool/briefcase_12090562.png";


import vsLight from "../img/tool/logoLight.png";
import figmaLight from "../img/tool/figmaLight.png";
import gitLight from "../img/tool/gitLight.png";
import stackLight from "../img/tool/stackIcon.png";



const AboutMe = () => {
 
  return (
    <div className="max-w-7xl grid place-content-center mx-auto w-full py-24" id="about">
    <Header intro={"Introduction"} title={"About me"}/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="profile-picture mb-4 p-5 md:p-0">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="w-full md:w-[350px] md:h-[450px] object-cover rounded-xl"
          />
        </div>

        <div className="w-full details ovo-regular">
          <div className="intro">
            <h4 className=" p-5 md:p-5 text-base font-semibold">
            With 5 years of professional experience as a Frontend Developer,
             I’ve had the privilege of working alongside talented teams to build impactful digital products.
             My focus has always been on creating clean, responsive, and user-friendly interfaces that contribute to business success and user satisfaction.
            </h4>
          </div>
          <div className="w-full details-about  md:flex md:justify-center gap-2 md:gap-4">
            <div className="card-one p-5 md:p-0">
              <Card
                icon={lang}
                header={"Languages"}
                text={"Html, Css, JavaScript, ReactJs, NextJs"}
                readmore={"readmore"}
                more={"TailwindCss , BootStrap,WordPress,Wixx,GSAP , Firebase"}
              />
            </div>

            <div className="card-two p-5 md:p-0">
              <Card
                icon={edu}
                header={"Education"}
                text={
                  "BSc in Computer Engineering Michael Okpara University of Agriculture Umudike , Nigeria"
                }
                readmore={"readmore"}
                more={"CGPA - 3.54"}
              />
            </div>

            <div className="card-three p-5 md:p-0">
              <Card
                icon={project}
                header={"Experience"}
                text={"One Year Internship"}
                readmore={"readmore"}
                more={"One Year Internship at Achota Limited , Ebonyi State Nigeria"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tools py-0 md:py-10 ovo-regular">
        <div className="intro flex justify-center text-center  p-9">
          <h2 className="text-lg font-medium">Tools I use</h2>
        </div>
        <div className="tools-box flex justify-center md:flex md:justify-center gap-4">
        <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={vsLight} alt="vscode" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={gitLight} alt="github" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={figmaLight} alt="figma" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-one rounded-lg border  w-[60px] h-[60px] flex align-middle justify-center text-center p-2 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
            <img src={stackLight} alt="stack" className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
