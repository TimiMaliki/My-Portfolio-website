const Header = ({intro , title}) => {
    return ( 
        <div>
              <div className="intro mb-5 md:mb-8">
        <h4 className="text-lg font-bold flex justify-center text-center ovo-regular mb-3">
        {intro}
        </h4>
        <h2 className="text-center text-4xl font-medium">{title}</h2>
      </div>
        </div>
     );
}
 
export default Header;