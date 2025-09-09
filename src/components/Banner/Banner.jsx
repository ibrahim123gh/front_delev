import React, { useState } from "react";
import { FaDownload, FaPlay, FaSearch, FaTimes } from "react-icons/fa";
import { bannerAssets } from "../../assets/dummydata";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { bannerImage, orbitImages, video } = bannerAssets;
  const [showVideo, setShowVideo] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <div className="relative bg-gradient-to-br from-amber-900 to-amber-700 text-white py-16 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-700/10 " />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-8 relative md:pr-8 lg:pr-16 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md">
              We're Here <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">
                For Food & Delivery
              </span>
            </h1>
            <p className="text-lg md:text-lg lg:text-xl font-playfair italic sm:text-xl text-amber-100 max-w-xl opacity-90 mx-auto md:mx-0">
              Best cooks and best delivery guys all at your service. Not tasty
              food will reach you in 60 minutes.
            </p>

            <form
              onSubmit={handleSearch}
              className="relative group max-w-2xl mx-auto md:mx-0"
            >
              <div className="relative flex items-center rounded-xl bg-amber-900/30 border-2 border-amber-500/30 shadow-2xl transition-all duration-300 hover:bg-amber-400/50">
                <div className="pl-6 pr-3 py-4">
                  <FaSearch className="text-xl text-amber-400/80" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Discover your next favorite meal..."
                  className="w-full py-4 pr-6 bg-transparent outline-none placeholder-amber-200/70 text-lg font-medium tracking-wide "
                />
                <button
                  type="submit"
                  className="mr-4 px-6 py-3 bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg text-amber-900 transition-all duration-300 shadow-lg font-semibold hover:shadow-amber-300/20 hover:from-amber-300 hover:to-amber-300"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="flex flex-row md:justify-start gap-4 mt-6 justify-center">
              <button className="group flex items-center gap-3 bg-amber-800/30 hover:bg-amber-800/50 px-6 py-3 rounded-xl transition-all duration-300 border-2 border-amber-700/50 hover:border-amber-400 backdrop-blur-sm ">
                <FaDownload className="text-xl group-hover:animate-bounce text-amber-400" />
                <span className="text-lg">Download app</span>
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-300/30"
              >
                <FaPlay className="text-lg text-amber-900" />
                <span className="text-lg text-amber-900 font-semibold">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Container with orbitle image */}
          <div className="flex-1 relative group mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px]">
            <div className="relative rounded-full p-1 bg-gradient-to-br from-amber-800 to-amber-500 via-amber-800 shadow-2xl z-20 w-[250px] xs:w-[300px] sm:w-[250px] h-[250px] xs:h-[300px] sm:h-[350px] mx-auto">
              <img
                src={bannerImage}
                className="rounded-full border-2 xs:border-8 border-amber-900/50 w-full h-full object-cover object-top"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-900/40 mix-blend-multiply" />
            </div>
            {orbitImages.map((imgSrc, index) => (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  index === 0 ? "orbit" : `orbit-delay-${index * 5}`
                } w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-amber-800/50 flex items-center justify-center`}
              >
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full h-full border border-amber-500/30 shadow-lg bg-amber-900/20 p-1 object-cover rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed w-full inset-0 p-4 h-full bg-black/90 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="w-full max-w-4xl mx-auto">
            <video
              className="w-full shadow-2xl object-contain aspect-video rounded-lg"
              autoPlay
              controls
            >
              <source src={video} type="video/mp4"/>
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 text-amber-400 hover:text-amber-300 text-3xl transition-all duration-300"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
