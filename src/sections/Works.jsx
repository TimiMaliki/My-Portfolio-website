import {FaArrowAltCircleRight } from "react-icons/fa";
import Buttons from "../component/buttons";
import Header from "../component/Headers";
import { Link } from "react-router-dom";
import hospital from "../img/projects/hospital/Screenshot from 2025-04-23 03-05-54.png"
import women from "../img/projects/women-fashion/Screenshot from 2025-04-23 03-12-04.png"
import light from "../img/projects/light/41.png"

const LatestWorks = () => {
  const projects = [
    {
      title: "Dental Hospital landing page",
      description:`a modern dental hospital dedicated to providing exceptional oral care in a comfortable and patient-centered environment.`,
      image:hospital,
      tags: ["Html", "Css", "Bootstrap"],
      year: "2023",
      link: "/projects/jobbazar",
    },
    {
      title: "X Fashion",
      description: `We specialize in curated women’s fashion that blends quality, comfort, and sophistication—designed to empower confidence in every step`,
      image:women,
      tags: ["Html", "Css", "TailwindCss"],
      year: "2022",
      link: "/projects/slepp",
    },
    {
      title: "LightRun",
      description:`The ultimate blogging hub for storytellers, trend-watchers, and digital voices. Designed for modern bloggers, our platform makes 
      it easy to share news, celebrity updates, lifestyle insights, and thought-provoking content with a wide and engaged audience.`,
      image: light,
      tags: ["ReactJs", "TailwindCss"],
      year: "2023",
      link: "/projects/costa",
    },
  ];

  return (
    <section className="py-20 ovo-regular" id="work">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <Header intro={"Portfolio showcase"} title={"My Work"} id=""/>
        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative  p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100  "
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-base font-light">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-">{project.title}</h3>
              <p className=" text-sm mb-4">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center align-middle py-8">
            <Link to="/projects">
            <Buttons color={"border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"} textColor={""} icons={<FaArrowAltCircleRight  className="w-5 h-5 mt-1 "/>} text={"view more"} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
