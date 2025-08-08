const Contact = () => {
  return (
    <div className="contact py-8 grid grid-cols-1 lg:grid-cols-2 gap-12  mx-auto px-4 max-w-7xl ovo-regular" id="contact">
      {/* Contact Information */}
      <div className="form space-y-8">
        <div className=" p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-6">Contact</h3>

          <div className="flex items-start mb-8">
            <div className="bg-purple-100 p-3 rounded-full mr-6">
              <svg
                className="w-6 h-6 text-green-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium">No 4 Odi Nwankwo Street</p>
              <p className="">Mile 50, Abakaliki, Nigeria</p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <div className="bg-blue-100 p-3 rounded-full mr-6">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium">+234 906 737 6592</p>
              <p className="">+234 916 321 8075</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-pink-100 p-3 rounded-full mr-6">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium">malikitimi@gmail.com</p>
              <p className="">timilehinmaliki@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-6">Socials</h3>
          <div className="flex space-x-4">
            <div className="bg-gray-100  hover:bg-gray-200 p-3 rounded-full transition-colors">
              <a href="https://wa.me/qr/RJYG6ACYJUUGB1">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.01 3C9.38 3 4 8.383 4 15.015c0 2.638.843 5.08 2.272 7.086L4 29l7.141-2.252A11.98 11.98 0 0016.01 27C22.642 27 28 21.617 28 14.985 28 8.383 22.642 3 16.01 3zm0 21.85a9.794 9.794 0 01-4.966-1.346l-.355-.207-4.233 1.335 1.364-4.124-.23-.367a9.754 9.754 0 01-1.533-5.241c0-5.388 4.388-9.775 9.778-9.775 5.386 0 9.772 4.387 9.772 9.775 0 5.388-4.386 9.775-9.772 9.775zm5.35-7.294c-.295-.147-1.748-.863-2.02-.963-.271-.099-.469-.148-.666.148s-.764.963-.936 1.16c-.171.197-.342.221-.637.074-.295-.148-1.246-.46-2.373-1.466-.876-.782-1.467-1.748-1.64-2.043-.171-.296-.018-.455.13-.602.134-.133.295-.345.444-.518.149-.174.197-.296.296-.494.098-.197.049-.37-.025-.518-.074-.148-.666-1.605-.913-2.199-.24-.577-.485-.498-.666-.508l-.567-.01c-.198 0-.519.074-.791.37s-1.04 1.016-1.04 2.48 1.065 2.875 1.213 3.074c.148.198 2.096 3.198 5.08 4.48.71.306 1.263.488 1.694.625.712.227 1.36.195 1.871.119.571-.086 1.748-.715 1.996-1.404.246-.689.246-1.28.172-1.404-.074-.123-.27-.198-.566-.345z" />
                </svg>
              </a>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
              <a href="https://www.threads.com/@alabi_codes/post/DIuF8zVo9TE?xmt=AQF0DNtYKDt3d99rPKlxhjR754Dlza82kbaQef_iWLohAw">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
              <a href="https://www.linkedin.com/in/timimaliki">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
         title="Google Map of Abakaliki Mile 50"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15861.660157423237!2d8.087519509732987!3d6.340255924939082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAbakaliki%20mile%2050!5e0!3m2!1sen!2sng!4v1753578622596!5m2!1sen!2sng"
           className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
