import { useState } from "react";

const BackgroundCard = ({
  icon,
  header,
education,
background,
  text,
  more,
  readmore,
  hide,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-full md:w-full rounded-xl border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] roboto">
      <div className="icon flex justify-center md:flex md:text-start p-9">
        <img src={icon} alt="icons" className="w-14 h-14" />
      </div>
      <div className="header flex roboto justify-center md:flex md:text-start text-md  md:text-lg font-light md:font-semibold">
        {header}
      </div>
      <div className="text p-10 roboto">
        <p className="text-md md:text-lg font-normal flex md:flex justify-center md:justify-center align-middle text-center mb-4">
          {text}
        </p>
        <p className="text-md md:text-lg flex md:flex justify-center md:justify-center  font-normal align-middle text-center mb-2 underline">
          {background}
        </p>
        <p className="text-md w-full md:text-lg font-normal flex md:flex justify-center md:justify-center align-middle text-center">
          {education}
        </p>
     
        {readMore && (
          <div className="w-full rounded-lg text-md md:text-lg flex  text-center align-middle justify-center bg-white p-2 text-black">
            {more}
          </div>
        )}
      </div>

      <div className="read-more w-full flex text-center align-middle justify-center ">
        {!readMore ? (
          <button
            onClick={() => setReadMore(!readMore)}
            className="underline inline-flex text-md md:text-lg ovo-regular items-center justify-center relative outline-none cursor-pointer  hover:text-blue-600 select-none touch-manipulation font-bold  h-10 px-4 py-2.5 rounded-lg  transition-colors duration-300"
          >
            {readmore}
          </button>
        ) : (
          <button
            onClick={() => setReadMore(!readMore)}
            className="inline-flex text-md md:text-lg ovo-regular items-center justify-center relative outline-none cursor-pointer  hover:text-blue-600  select-none touch-manipulation font-bold  h-10 px-4 py-2.5 rounded-lg  transition-colors duration-300"
          >
            {hide}
          </button>
        )}
      </div>
    </div>
  );
};

export default BackgroundCard;
