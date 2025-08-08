import Header from "../component/Headers";
import Card from "../component/card";
import webDesign from "../img/tool/globe_17267121.png";
import teaching from "../img/tool/teacher_12770608.png";
import behance from "../img/tool/behance_220615.png";
import gallery from "../img/tool/drawing_7347268.png";

const Services = () => {
    return ( 
        <div className="max-w-7xl grid place-content-center mx-auto w-full py-8 ovo-regular" id="service">
            <Header intro={"What I offer"} title={"My Services"}/>
            <div className="text-center">
                <h2 className="text-xl p-5 md:p-10">
            "I aim to contribute to the success of your company by <br /> leveraging my technical skills and problem-solving mindset to build impactful web solutions."
                </h2>
            </div>

            <div className="cards grid md:grid-cols-4 grid-cols-1 gap-4 md:p-0 p-5 py-7">
            <div className="card-one">
            <Card
                icon={webDesign}
                header={"Web design"}
                text={
                  "I craft beautiful, user-friendly websites that not only look great but actually work. Think sleek layouts, smooth navigation, and a sprinkle of magic to keep your users hooked."
                }
                readmore={"readmore"}
                more={`I design clean, responsive, and user-centered websites that align with your 
                brand and business goals. My focus is on creating intuitive layouts and seamless experiences that engage users and drive results.`}
              />
            </div>


            <div className="card-two">
            <Card
                icon={teaching}
                header={"Teaching"}
                text={
                  `Beyond development, I’m passionate about sharing knowledge.`
                }
                readmore={"readmore"}
                more={`
                I enjoy mentoring junior developers, 
                  simplifying complex concepts, and fostering growth within teams. Whether through pair programming, documentation, or training sessions, 
                  I believe teaching is a powerful way to reinforce collaboration and drive collective success
                `}
              />
            </div>


            <div className="card-three">
            <Card
                icon={behance}
                header={"UI/UX"}
                text={
                  "I care a lot about how things look and feel. I design clean, user-friendly interfaces that make websites easy to use and enjoyable to navigate."
                }
                readmore={"readmore"}
                more={`With a deep understanding of UI/UX principles, I craft user interfaces that are not only visually 
                engaging but also highly functional—ensuring seamless, accessible, and intuitive experiences across all devices`}
              />
            </div>



            <div className="card-four">
            <Card
                icon={gallery}
                header={"Graphics design"}
                text={
                  "I also create eye-catching graphics—from social media posts to brand assets—that help your message stand out and leave a lasting impression"
                }
                readmore={"readmore"}
                more={"Need cool visuals? I whip up scroll-stopping designs that make your brand pop and your audience say ‘wow!"}
              />
            </div>

            </div>
        </div>
     );
}
 
export default Services;