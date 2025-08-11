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
import wordprss from "../img/tool/wordpress_14063231.png";
import wix from "../img/tool/wix_5968753.png";

const AboutMe = () => {
  return (
    <div
      className="max-w-7xl grid place-content-center mx-auto w-full py-24  ovo-regular"
      id="about"
    >
      <Header intro={"Introduction"} title={"About me"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="profile-picture flex justify-center align-middle mb-4 p-5 md:p-0">
          <img
            src={profilePicture}
            alt="profilepicture"
            className="w-full md:w-[350px] md:h-[450px] object-cover rounded-xl"
          />
        </div>

        <div className="w-full details ovo-regular">
          <div className="intro">
            <h4 className=" p-5 md:p-5 text-lg font-light md:font-semibold">
              I am a frontend developer with three years of experience creating
              clean, user-friendly websites that deliver exceptional
              experiences. My learning journey, though challenging, has been
              immensely rewarding, equipping me with strong problem-solving
              skills and the ability to approach challenges with efficiency.
              Over the years, I have honed the capacity to quickly learn and
              adapt to new tools and technologies, ensuring I stay ahead in a
              fast-evolving digital landscape.
            </h4>
          </div>
          <div className="w-full details-about grid grid-cols-1 md:grid-cols-2 p-0 md:p-10">
            <div className="card-one p-5 md:p-0">
              <Card
                icon={lang}
                header={"Languages"}
                text={`Html, Css, JavaScript, ReactJs,  NextJs `}
                readmore={"readmore"}
                more={` TailwindCss , BootStrap,
                GSAP , Firebase`}
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
                more={"Achota Limited , Ebonyi State Nigeria"}
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
          <div className="box-five">
            <img src={wix} alt="stack" className="w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
