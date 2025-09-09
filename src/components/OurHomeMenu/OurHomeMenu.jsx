import React, { useState } from "react";
import { useCart } from "../../CartContext/CartContext";
import { dummyMenuData } from "../../assets/OmhDD";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Mexican",
  "Italian",
  "Dessert",
  "Drinks",
];

const OurHomeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const displayItem = (dummyMenuData[activeCategory] || []).slice(0, 4);

  const getQuantity = (id) => {
    return cartItems.find((ci) => ci.id === id)?.quantity || 0;
  };

  const { addToCart, remaveToCart, cartItems } = useCart();

  return (
    <div className="bg-gradient-to-r from-[#1a120b] via-[#2a1e14] to-[#3e2b1d] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text mb-12 text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
          <span className="font-dansing script block text-5xl sm:text-6xl md:text-7xl mb-2">
            Our Exquisite Menu
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl block font-cinzel mt-4 text-amber-100/80">
            A Symphony of flavours
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-sm sm:text-lg tracking-wide backdrop-blur-sm ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-xl shadow-amber-900/30 "
                  : "bg-amber-900/30 border-amber-800/30 text-amber-100/80 hover:border-amber-800/40 hover:scale-95"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {displayItem.map((item, i) => {
            const quantity = getQuantity(item.id);

            return (
              <div
                key={item.id}
                className="relative bg-amber-900/20 rounded-2xl overflow-hidden border border-amber-800/30 backdrop-blur-sm flex flex-col transition-all duration-500"
                style={{ "--index": i }}
              >
                <div className="relative h-48 sm:h-56 md:h-60 flex items-center justify-center bg-black/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain transition-all duration-700"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-800/50 to-transparent opacity-50 transition-all duration-300" />
                  <h3 className="text-xl font-dangcinscript text-amber-100 sm:text-2xl transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-100/80 text-xs sm:text-sm mb-4 font-cinzel leading-relaxed ">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-auto justify-between gap-4">
                    <div className="bg-amber-100/10 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg ">
                      <span className="text-xl font-bold text-amber-300 font-dancingscript">
                        ₹{item.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {quantity > 0 ? (
                        <>
                          <button
                            onClick={() => {
                              quantity > 1
                                ? addToCart(item.id, quantity - 1)
                                : remaveToCart(item.id);
                            }}
                            className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                          >
                            <FaMinus className="text-amber-100" />
                          </button>
                          <span className="text-amber-100 text-center w-8">
                            {quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item, quantity + 1)}
                            className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                          >
                            <FaPlus className="text-amber-100" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => addToCart(item, 1)}
                            className="bg-amber-900/30 px-4 py-1.5 rounded-full font-cinzel text-xs sm:text-sm uppercase tracking-wider transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-900/30 relative overflow-hidden border border-amber-800/50 "
                          >
                            <span className="relative z-10 text-xs text-black ">
                              Add To Cart
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-16">
          <Link
            to={"/menu"}
            className="bg-amber-900/30 border-2 border-amber-800/30 text-amber-100 px-8 sm:px-10 py-3 rounded-full font-cinzel uppercase tracking-widest transition-all duration-300 hover:bg-amber-800/40 hover:text-amber-50 hover:scale-105 hover:shadow-lg hover:shadow-amber-900/20 backdrop-blur-md"
          >
            Explor Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurHomeMenu;
