const Buttons = ({ icons, text, color, textColor , doc  }) => {
    return (
      <button
        className={` px-3 py-3 md:px-6 md:py-3 ovo-regular rounded-full  gap-4 ${color} ${textColor}`}
      >
        <a href={doc} download>
        <div className="flex justify-center text-center align-middle font-bold gap-3">
          {text}
        {icons} 
        </div>
          </a>  
      </button>
    );
  };
  
  export default Buttons;
  