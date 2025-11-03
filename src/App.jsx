import { useState, useRef } from "react";
import brand1 from "./logos/brand1.png"
import brand2 from "./logos/brand2.avif"
import brand3 from "./logos/brand3.png"


function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setShowForm((prev) => {
      const newValue = !prev;
      if (!prev) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
      return newValue;
    });
  };



  const logos = [
    {
      name: "Co-Sponsor & Partner",
      img: brand1,
    },
    {
      name: "Digital Marketing Partner",
      img: brand2,
    },
    {
      name: "Venue Partner",
      img: brand3,
    },
  ];

  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://www.dazed.me/wp-content/uploads/sites/6/2025/04/Copy-of-RJ-17-scaled.webp')",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg tracking-widest">
          KERALA'S
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold drop-shadow-lg tracking-widest">
          LARGEST
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold drop-shadow-lg tracking-widest">
          TRADE EXPO
        </h1>
        {/* <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md">
          BOOK YOUR STALL NOW
        </p> */}

         <button
            onClick={toggleForm}
            className="relative mt-3 px-10 py-3 font-extrabold text-black rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-linear-to-r from-yellow-300 to-green-400 rounded-full transition-transform duration-1500 ease-in-out group-hover:rotate-180"></span>
            <span className="relative z-10 transform scale-100 transition-all duration-1000 ease-in-out group-hover:scale-140 group-hover:tracking-wider">
              BOOK YOUR STALL NOW
            </span>
          </button>
      </section>

      <section>
        <div
          ref={formRef}
          className={`transition-all duration-700 ease-in-out overflow-hidden ${showForm
            ? "max-h-[2500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
            }`}
        >
          <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <h2 className="text-7xl font-extrabold uppercase tracking-tight">
                Booking
              </h2>

              <p className="text-gray-600 md:max-w-md mt-8 md:mt-0 text-sm leading-relaxed">
                Grateful for your interest in Kerala’s Largest Trade Expo — the Gulf Indian Trade Expo.
                Every brand, creator, and visionary joining us adds a spark to this grand celebration of business, innovation, and collaboration.


                <br />
                <br />
                Share your basic details below to connect with us and stay informed about event updates and participation opportunities.
              </p>
            </div>
            {/* Divider */}
            <div className="border-t border-black mt-10 mb-12"></div>

            {/* Form Section */}
            <form
              className="space-y-12">
              {/* Base Information */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
                  • Base Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full border border-gray-400 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full border border-gray-400 px-4 py-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">

                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      Whatsapp Number
                    </label>
                    <input
                      type="number"
                      placeholder="Enter phone number"
                      className="w-full border border-gray-400 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      E-mail Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter e-mail address"
                      className="w-full border border-gray-400 px-4 py-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      Country
                    </label>
                    <select className="w-full border border-gray-400 px-4 py-2 focus:outline-none">
                      <option>Choose City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      State
                    </label>
                    <select className="w-full border border-gray-400 px-4 py-2 focus:outline-none">
                      <option>Choose District</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      District
                    </label>
                    <select className="w-full border border-gray-400 px-4 py-2 focus:outline-none">
                      <option>Choose City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-600 mb-2">
                      City
                    </label>
                    <select className="w-full border border-gray-400 px-4 py-2 focus:outline-none">
                      <option>Choose District</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mt-4">
                  <input type="checkbox" className="border border-black" />
                  <label className="text-xs uppercase">
                    I confirm I’m 18 years of age or older
                  </label>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-black"></div>



              {/* Register Button */}
              <div className="flex justify-end">
                <button className="bg-black text-white text-sm uppercase font-semibold px-10 py-3 hover:bg-gray-800 transition-all">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24 sm:py-36 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          About
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          Our event management platform brings your ideas to life with
          precision, creativity, and care. Whether it's a corporate gathering,
          concert, or private celebration, we craft experiences that leave a
          lasting impression.
        </p>
      </section>

      {/* Stats Section */}
      <section
        className="relative text-white py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://wallpapercat.com/w/full/d/3/1/1419131-3840x2160-desktop-4k-new-york-at-night-background-image.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: "6000+", label: "Visitors" },
            { value: "200+", label: "B2B Stalls" },
            { value: "100000 Sq. Ft.", label: "Programme Hall" },
            { value: "50", label: "Expert Speakers" },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
                {item.value}
              </h3>
              <p className="uppercase text-xs sm:text-sm tracking-wider text-gray-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* Featured Brands Section */}
<section className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4 sm:px-6">
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
    Featured Brands
  </h2>
  <p className="text-gray-600 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl">
    Discover the leading brands and partners joining our event
  </p>

  {/* Logos + Names */}
  <div className="flex flex-wrap justify-center items-end gap-12 sm:gap-32 max-w-6xl">
    {logos.map((logo, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-end w-28 sm:w-72"
      >
        <div className="flex items-end justify-center h-36 sm:h-44">
          <img
            src={logo.img}
            alt={logo.name}
            className="w-full h-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-700 text-center">
          {logo.name}
        </h3>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}

export default App;