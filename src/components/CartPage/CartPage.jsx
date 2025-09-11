import React, { useState } from "react";
import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTimes, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, remaveToCart, UpdateToCart, cartTotal } = useCart();
  const [selectedImages, setSelectedImages] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d]">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-amber-100 text-center mb-12 font-serif animate-fade-in-out">
          <span className="font-dancingscript block text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
            Your Cart
          </span>
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center animate-fade-in">
            <p className="text-amber-100/80 text-xl mb-4">Your cart is empty</p>
            <Link
              to={"/menu"}
              className="bg-amber-900/40 text-amber-100 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 font-cinzel px-6 py-2 rounded-full text-sm upercase hover:bg-amber-800/50"
            >
              Browser All Items
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cartItems.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="group bg-amber-900/20 p-4 rounded-2xl border-4 border-dashed border-amber-500 backdrop-blur-sm flex flex-col items-center gap-4 transition-all duration-300 hover:border-solid hover:shadow-lg hover:shadow-amber-900/10 transform hover:-translate-y-1 animate-fade-in"
                    >
                      <div
                        className="w-24 h-24 flex-shrink-0 cursor-pointer relative overflow-hidden rounded-lg transition-transform duration-300"
                        onClick={() => setSelectedImages(item.image)}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full text-center ">
                        <h3 className="text-xl font-dancingscript text-amber-100">
                          {item.name}
                        </h3>
                        <p className="text-amber-100/80 font-cinzel mt-1">
                          ₹{item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            UpdateToCart(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/40 transition-all duration-300 active:scale-95"
                        >
                          <FaMinus className="w-4 h-4 text-center text-amber-100 font-cinzel" />
                        </button>
                        <span className="w-8 text-center text-amber-100 font-cinzel">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            UpdateToCart(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/40 transition-all duration-300 active:scale-95"
                        >
                          <FaPlus className="w-4 h-4 text-center text-amber-100 font-cinzel" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <button
                          className="bg-amber-900/40 px-3 py-1 rounded-full font-cinzel text-sm uppercase transition-all duration-300 hover:bg-amber-800/50 flex items-center gap-1 active:scale-95 "
                          onClick={() => remaveToCart(item.id)}
                        >
                          <FaTrash className="w-4 h-4 text-amber-100" />
                          <span className="text-amber-100">Remove</span>
                        </button>
                        <p className="text-sm font-dancingscript text-amber-300">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="mt-12 pt-8 border-t border-amber-800/30 animate-fade-in-up">
              <div className="flex flex-col items-center justify-between sm:flex-row gap-8">
                <Link
                  to={"/menu"}
                  className="bg-amber-900/40 px-8 py-3 rounded-full uppercase font-cinzel tracking-wide hover:bg-amber-800/50 inline-flex transition-all duration-300 text-amber-100 items-center gap-2 hover:gap-3 active:scale-95"
                >
                  Continue Shopping
                </Link>
                <div className="flex items-center gap-8">
                  <h2 className="text-3xl font-dancingscript text-amber-100">
                    Totale: ₹{cartTotal}
                  </h2>
                  <button className="bg-amber-900/40 px-8 py-3 rounded-full uppercase font-cinzel tracking-wide hover:bg-amber-800/50 flex transition-all duration-300 text-amber-100 items-center gap-2 active:scale-95">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {selectedImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-amber-900/40 bg-opacity-75 backdrop-blur-2xl p-4 overflow-auto"
          onClick={() => setSelectedImages(null)}
        >
          <div className="relative max-w-full max-h-screen">
            <img
              src={selectedImages}
              alt="Full All"
              className="max-w-[90vh] max-h-[90vh] rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImages(null)}
              className="absolute top-1 right-1 bg-amber-900/80 rounded-full p-2 text-black hover:bg-amber-800/90 transition-all duration-300 active:scale-90"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
