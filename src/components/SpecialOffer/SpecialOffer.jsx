import React, { useState } from "react";
import { additionalData, cardData } from "../../assets/dummydata";
import { useCart } from "../../CartContext/CartContext";
import { FaChevronUp, FaFire, FaHeart, FaPlus, FaStar } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi";
import FloatingParticle from "../FloatingParticle/FloatingParticle";

const SpecialOffer = () => {
  const [showAll, setShowAll] = useState(false);

  const initialState = [...cardData, ...additionalData];

  const { addToCart, remaveToCart, UpdateToCart, cartTotal, cartItems } =
    useCart();

  return (
    <div className="bg-gradient-to-br from-[#1a1212] to-[#2a1e1e] text-white py-16 px-4 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl transform font-bold mb-4 transition-all duration-300 bg-gradient-to-r from-amber-400 to-red-500 text-transparent bg-clip-text font-[Playfair_Display] italic">
            Today's <span className="text-strok-gold">Special</span> Offers
          </h1>
          <p className="text-lg mx-auto max-w-3xl text-gray-300 tracking-wide leading-relaxed">
            Savor the extraordinary with our culinary masterpieces crafted to
            perfection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(showAll ? initialState : initialState.slice(0, 4)).map(
            (item, index) => {
              const cartItem = cartItems.find((ci) => ci.id === item.id);
              const quantity = cartItem?.quantity ? cartItem.quantity : 0;

              return (
                <div
                  key={`${item.id} - ${index}`}
                  className="relative group bg-[#4b3b3b] rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500 hover:shadow-red-900/40 border-2 border-transparent hover:border-amber-500/20 before:absolute before:inset-0 hover:before:opacity-20 "
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 " />
                    <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center bg-black/40 backdrop-blur-sm px4 py-2 rounded-full">
                      <span className="flex items-center gap-2 text-amber-400">
                        <FaStar className="text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                        <span className="font-bold">{item.rating}</span>
                      </span>
                      <span className="flex items-center gap-2 text-red-400">
                        <FaHeart className="text-xl animate-heartbeat" />
                        <span className="font-bold">{item.hearts}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent italic font-[Playfair_Display]">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-5 text-sm leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        {item.price}
                      </span>
                      {cartItem ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              quantity > 1
                                ? UpdateToCart(item.id, quantity - 1)
                                : remaveToCart(item.id);
                            }}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-900/50 hover:bg-amber-800/50 transition-all duration-300 hover:scale-95"
                          >
                            <HiMinus className="w-4 h-4 text-amber-100" />
                          </button>
                          <span className="w-8 text-center text-amber-100 font-cinzal">
                            {quantity}
                          </span>
                          <button
                            onClick={() => UpdateToCart(item.id, quantity + 1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-900/50 hover:bg-amber-800/50 transition-all duration-300 hover:scale-95"
                          >
                            <HiPlus className="w-4 h-4 text-amber-100" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            addToCart(
                              {
                                ...item,
                                name: item.title,
                                price: parseFloat(item.price.replace("₹", "")),
                              },
                              1
                            )
                          }
                          className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-[#2D1B0E] font-bold rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                        >
                          <div className="absolute  bg-gradient-to-r from-amber-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                          <FaPlus className="transition-transform text-lg" />
                          <span className="z-10 relative">Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border-0 border-transparent hover:border-amber-500/30 transition-all duration-300" />
                  <div className="opacity-0 group-hover:opacity-100">
                    <FloatingParticle count={40} />
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 bg-gradient-to-r from-red-700 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:gap-4 hover:shadow-xl hover:shadow-amber-500/20 group border-2 border-amber-400/30 relative overflow-hidden  transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r fill-amber-500/20 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaFire className="text-xl animate-pulse" />
            <span className="">{showAll ? "Show Less" : "Show All"}</span>
            <div className="h-full w1 bg-amber-400/30 absolute top-0 right-0 group-hover:animate-border-pulse"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
