const Footer = () => {
    return ( 
        <footer className="px-6 py-10 ovo-regular">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Timi</h2>
          </div>
  
          {/* Navigation Links */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline" >About me</a></li>
              <li><a href="#achievement" className="hover:underline" id="achievement">Little Achievements</a></li>
              <li><a href="#work" className="hover:underline">My Works</a></li>
              <li><a href="#service" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
  
        
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-8 border-t  pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()}  Timi. All rights reserved.
        </div>
      </footer>
     );
}
 
export default Footer;