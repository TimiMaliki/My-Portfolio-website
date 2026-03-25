import Card from "../component/card";
import Header from "../component/Headers";

import profilePicture from "../img/timi-pictures/Timi-gym.jpeg";
import lang from "../img/tool/meeting_15644311.png";
import edu from "../img/tool/graduated_13305391.png";
import project from "../img/tool/briefcase_12090562.png";

import vsLight from "../img/tool/logoLight.png";
import figmaLight from "../img/tool/figmaLight.png";
import gitLight from "../img/tool/gitLight.png";
import stackLight from "../img/tool/stackIcon.png";
import wordprss from "../img/tool/wordpress_14063231.png";
import wix from "../img/tool/wix_5968753.png";

const AboutMe = () => {
  return (
    <div
      className="max-w-7xl grid place-content-center mx-auto w-full py-20  ovo-regular"
      id="about"
    >
      <Header intro={"Introduction"} title={"About me"} />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 p-0">
        {/* Image */}
        <div className="profile-picture flex justify-center items-center mb-2 md:mb-0 p-2 md:p-0">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="w-full max-w-[350px] h-auto md:h-[450px] md:-mt-[528px] object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="w-full details ovo-regular">
          <div className="intro">
            <h4 className="p-2 roboto md:p-3 text-lg font-light">
              I’m Timi Maliki, though in the dev world, I go by Vermillion. Named
              after the fiery strategist from Black Clover, I bring that same
              intensity to every line of code. I’m a Computer Engineer by
              training and a Frontend Architect by choice. I specialize in
              bridging the gap between low-level analytical depth and high-level
              artistic realism.
            </h4>
          </div>

          {/* Cards */}
          <div className="w-full details-about grid grid-cols-1 md:grid-cols-2 gap-3 p-0 md:p-4">
            <div className="card-one p-2 md:p-0">
              <Card
                icon={lang}
                header={"Languages"}
                text={`Html, Css, JavaScript, TypeScript, ReactJs, NextJs`}
                readmore={"Read more"}
                hide={"Hide"}
                more={`React Redux, React Context API,Chakra UI, Material UI, TailwindCss, BootStrap, GSAP, Firebase`}
              />
            </div>

            <div className="card-two p-2 md:p-0">
              <Card
                icon={edu}
                header={"Education"}
                text={
                  "B.Eng in Computer Engineering Michael Okpara University of Agriculture Umudike, Nigeria"
                }
                readmore={"Read more"}
                hide={"Hide"}
                more={"CGPA - 3.54"}
              />
            </div>

            <div className="card-three p-2 md:p-0">
              <Card
                icon={project}
                header={"Experience"}
                text={"One Year Internship"}
                readmore={"Read more"}
                hide={"Hide"}
                more={"Achota Limited, Ebonyi State Nigeria"}
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
          <div className="box-one">
            <img src={vsLight} alt="vscode" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-two">
            <img src={gitLight} alt="github" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-three">
            <img src={figmaLight} alt="figma" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-three">
            <img src={stackLight} alt="stack" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-four">
            <img src={wordprss} alt="stack" className="w-[40px] h-[40px]" />
          </div>
          <div className="box-five border border-white rounded-full">
            <img src={wix} alt="stack" className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
