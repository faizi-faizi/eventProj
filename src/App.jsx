

function App() {
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
    <>
      <div className="w-full h-full">
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
          style={{
            backgroundImage:
              "url('https://www.dazed.me/wp-content/uploads/sites/6/2025/04/Copy-of-RJ-17-scaled.webp')",
          }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg tracking-widest">
            EVENT
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl px-4 drop-shadow-md">
            Experience unforgettable moments with our exclusive events where
            creativity meets celebration.
          </p>
          <button className="relative mt-8 px-10 py-3 font-semibold text-black rounded-full overflow-hidden group">
  {/* Gradient background */}
  <span className="absolute inset-0 bg-linear-to-r from-yellow-300 to-green-400 rounded-full transition-transform duration-2000 ease-in-out group-hover:rotate-180"></span>

  {/* Expanding text */}
  <span className="relative z-10 transform scale-100 transition-all duration-2000 ease-in-out group-hover:scale-140 group-hover:tracking-wider">
    Book Now
  </span>
</button>
        </section>

        {/* About Section */}
        <section className="bg-white py-36 px-6 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Our event management platform brings your ideas to life with
            precision, creativity, and care. Whether it's a corporate gathering,
            concert, or private celebration, we craft experiences that leave a
            lasting impression. From concept to execution, our team ensures
            seamless organization and vibrant energy in every event.
          </p>
        </section>


        {/* Stats Section */}
        <section
          className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://wallpapercat.com/w/full/d/3/1/1419131-3840x2160-desktop-4k-new-york-at-night-background-image.jpg')",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">200+</h3>
              <p className="uppercase text-sm tracking-wider text-gray-200">Speakers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-500">5</h3>
              <p className="uppercase text-sm tracking-wider text-gray-200">Days</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-500">9</h3>
              <p className="uppercase text-sm tracking-wider text-gray-200">Workshops</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-500">200+</h3>
              <p className="uppercase text-sm tracking-wider text-gray-200">Participants</p>
            </div>
          </div>
        </section>


       {/* Artist Section */}
<section
  className="h-screen bg-white flex flex-col justify-center items-center text-center px-6"
  id="artists"
>
  <div>
    <h2 className="text-5xl font-bold text-gray-900 mb-3">
      Who Will Be There
    </h2>
    <p className="text-gray-600 mb-16 text-lg">
      Experience live performances from your favorite artists
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-14">
    {artists.map((artist, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg transition-transform duration-500 transform group-hover:scale-110 group-hover:shadow-2xl">
          <img
            src={artist.img}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
          {artist.name}
        </h3>
        <p className="text-gray-500 text-sm">{artist.role}</p>
      </div>
    ))}
  </div>
</section>
      </div>
    </>
  )
}

export default App
