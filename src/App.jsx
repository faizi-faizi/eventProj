import { useState, useRef } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const artists = [
    {
      name: "Hanumankind",
      role: "Rapper & Performer",
      img: "https://c.saavncdn.com/artists/Hanumankind_001_20250313025806_500x500.jpg",
    },
    {
      name: "Hanumankind",
      role: "Rapper & Performer",
      img: "https://c.saavncdn.com/artists/Hanumankind_001_20250313025806_500x500.jpg",
    },
    {
      name: "Hanumankind",
      role: "Rapper & Performer",
      img: "https://c.saavncdn.com/artists/Hanumankind_001_20250313025806_500x500.jpg",
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
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold drop-shadow-lg tracking-widest">
          EVENT
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md">
          Experience unforgettable moments with our exclusive events where
          creativity meets celebration.
        </p>

        <button onClick={toggleForm} className="relative mt-8 px-10 py-3 font-semibold text-black rounded-full overflow-hidden group">
          {/* Gradient background */}
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-green-400 rounded-full transition-transform duration-1000 ease-in-out group-hover:rotate-180"></span>

          {/* Expanding text */}
          <span className="relative z-10 transform scale-100 transition-all duration-[2000ms] ease-in-out group-hover:scale-125 group-hover:tracking-wider">
            Book Now
          </span>
        </button>
      </section>

      {/* Registration Form */}
      <div
        ref={formRef}
        className={`transition-all duration-700 ease-in-out overflow-hidden ${showForm
          ? "max-h-[2500px] opacity-100 visible"
          : "max-h-0 opacity-0 invisible"
          }`}
      >
        <div className="bg-white w-full flex justify-center py-12 sm:py-16 px-4 sm:px-6 md:px-10">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white w-full max-w-4xl space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center">
                Register for the Event
              </h2>

              {/* Full Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Whatsapp Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Whatsapp Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                />
              </div>

              {/* Register Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Register
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-20 px-4 sm:px-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Registering!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                We’ve received your details and will get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md hover:bg-gray-800 transition-all text-sm sm:text-base"
              >
                Back to Form
              </button>
            </div>
          )}
        </div>
      </div>

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
            { value: "200+", label: "Speakers" },
            { value: "5", label: "Days" },
            { value: "9", label: "Workshops" },
            { value: "200+", label: "Participants" },
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

      {/* Artist Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
          Who Will Be There
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg max-w-md">
          Experience live performances from your favorite artists
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-14">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg transition-transform duration-500 transform group-hover:scale-110 group-hover:shadow-2xl">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                {artist.name}
              </h3>
              <p className="text-gray-500 text-sm">{artist.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;