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
import BackgroundCard from "../component/EducationCard";

const AboutMe = () => {
  return (
    <div
      className="grid place-content-center w-full py-20  ovo-regular"
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
            <h4 className="p-10 roboto md:p-3 text-lg font-light">
              I’m Timi Maliki, though in the dev world, I go by Vermillion.
              Named after the fiery strategist from Black Clover, I bring that
              same intensity to every line of code. I’m a Computer Engineer by
              training and a Frontend Architect by choice. I specialize in
              bridging the gap between low-level analytical depth and high-level
              artistic realism.
            </h4>
          </div>

          {/* Cards */}
          <div className="w-full md:w-full details-about grid grid-cols-1 md:grid-cols-2 gap-3 p-0 md:p-4">
            <div className="card-one p-0 md:p-2">
              <Card
                icon={lang}
                header={"Languages"}
                coreSkill={
                  "Languages/Core: JavaScript (ES6+), TypeScript, HTML5, CSS3."
                }
                frameworks={
                  "Frameworks/Libraries: React.js, Next.js, Redux Toolkit, Context API, GSAP (Animations)."
                }
                styling={`Styling: Tailwind CSS, Material UI, Chakra UI, Bootstrap. `}
                backend={`Backend: Firebase (Firestore/Auth), Appwrite(Database/Storage/Auth), REST APIs.`}
                text={`Platform: Linux, Git, GitHub, Vercel, VS Code.`}
                readmore={"Read more"}
                hide={"Hide"}
                more={`Tools: Figma, WordPress, WIx.`}
              />
            </div>

            <div className="card-two p-0 md:p-2">
              <BackgroundCard
                icon={edu}
                header={"Education"}
                text={`B.Eng in Computer Engineering Michael Okpara University of Agriculture Umudike, Nigeria.`}
                background={"The Intersection of Logic & Design."}
                education={`Engineering is about more than equations; it is the architecture of digital spaces. With a degree in Computer Engineering, I bridge the gap between Hardware and Software, bringing a holistic understanding of how physical systems and digital logic converge.
From low-level memory efficiency to high-level cloud orchestration, my background ensures every platform is optimized for performance, security, and scale. I don't just build functional websites—I engineer brand experiences. By merging disciplined logic with sophisticated UI/UX, 
I transform abstract concepts into high-performance digital products that are as visually compelling as they are technically sound.`}
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
