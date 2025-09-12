import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FiArrowRight,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";
import { contactFormFields } from "../../assets/dummydata";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dish: "",
    query: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Your query has been submitted successfully!", {
      style: {
        border: "2px solid #f5990b",
        padding: "15px",
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: { primary: "#f5990b", secondary: "#fff" },
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      dish: "",
      query: "",
    });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-900 to-gray-900 via-amber-900 animate-gradiant-x py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-[poppins] overflow-hidden relative">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-40 w-16 h-16 bg-green-500/20 rounded-full animate-float-delayed" />
      <div className="max-w-7xl relative mx-auto z-50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
            Connect With Use
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-amber-500 hover:border-amber-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center z-10 relative mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-xl">
                  <FiMapPin className="text-2xl text-amber-400 animate-pulse" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold">
                  Our Headquater
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-amber-100 font-light text-lg">Lucknow, Up</p>
              </div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-green-500 hover:border-green-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center z-10 relative mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl">
                  <FiPhone className="text-2xl text-green-400 animate-ping" />
                </div>
                <h3 className="ml-4 text-green-100 text-xl font-semibold">
                  Contact Number
                </h3>
              </div>
              <div className="pl-12 relative space-y-2 z-10">
                <p className="text-green-100 font-light flex items-center ">
                  <FiGlobe className="text-green-400 text-xl mr-2" />
                  +961 71932604
                </p>
              </div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] animate-card-float border-l-4 border-orange-500 hover:border-orange-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center z-10 relative mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500/30 to-orange-700/30 rounded-xl">
                  <FiMail className="text-2xl text-orange-400 animate-pulse" />
                </div>
                <h3 className="ml-4 text-orange-100 text-xl font-semibold">
                  Email Address
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-orange-100 font-light text-lg">
                  ibrahimghourani541@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-slide-in-right border-amber-500/30 hover:border-amber-500/50 transform-border duration-300">
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-amber-500/30 animate-ping-slow" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {contactFormFields.map(
                ({ label, name, type, placeholder, Icon, pattren }) => (
                  <div key={name}>
                    <label className="mb-2 block font-medium text-sm text-amber-100">
                      {label}
                    </label>
                    <div className="relative">
                      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                        <Icon className="text-amber-500 text-xl animate-pulse" />
                      </div>
                      <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="w-full pl-10 py-3 pr-4 bg-white/10 border-2 border-amber-500/30 rounded-xl text-amber-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-200/50"
                        pattern={pattren}
                        required
                      />
                    </div>
                  </div>
                )
              )}
              <div className="">
                <label className="mb-2 block font-medium text-sm text-amber-100">
                  Your query
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4">
                    <FiMessageSquare className="text-amber-500 text-xl animate-pulse" />
                  </div>
                  <textarea
                    name="query"
                    rows={"4"}
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full pl-10 py-3 pr-4 bg-white/10 border-2 border-amber-500/30 rounded-xl text-amber-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-amber-200/50"
                    placeholder="Type Your Message Here..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/20 flex items-center justify-center space-x-2 group"
              >
                <span>Submit query</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
