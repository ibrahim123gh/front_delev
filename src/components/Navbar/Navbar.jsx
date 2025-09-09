import React, { useEffect, useState } from "react";
import { GiChefToque, GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiStar,
  FiPhone,
  FiShoppingCart,
  FiLogOut,
  FiKey,
} from "react-icons/fi";
import { useCart } from "../../CartContext/CartContext";
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const [showLoginModel, setShowLoginModel] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("loginData"))
  );

  useEffect(() => {
    setShowLoginModel(location.pathname === "/login");
    setIsAuthenticated(Boolean(localStorage.getItem("loginData")));
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/", icon: <FiHome /> },
    { name: "Menu", to: "/menu", icon: <FiBook /> },
    { name: "About", to: "/about", icon: <FiStar /> },
    { name: "Contact", to: "/contact", icon: <FiPhone /> },
  ];

  const handleLoginSuccess = () => {
    localStorage.setItem("loginData", JSON.stringify({ loggedIn: true }));
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setIsAuthenticated(false);
  };

  const renderDesktopAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-600 to-amber-800 text-[#2D1B08] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-center space-x-2 shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm "
      >
        <FiLogOut className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Logout</span>
      </button>
    ) : (
      <button
        onClick={() => navigate("/login")}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-600 to-amber-800 text-[#2D1B08] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-center space-x-2 shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm "
      >
        <FiKey className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Login</span>
      </button>
    );
  };

  const renderMobileAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700 font-semibold text-sm text-[#2D1B08] rounded-xl flex items-center justify-center space-x-2"
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    ) : (
      <button
        onClick={() => {
          navigate("/login");
          setIsOpen(false);
        }}
        className="w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700 font-semibold text-sm text-[#2D1B08] rounded-xl flex items-center justify-center space-x-2"
      >
        <FiKey />
        <span>lOGIN</span>
      </button>
    );
  };
  return (
    <nav className="bg-[#2D1B08] border-b-8 sticky border-amber-900/30 shadow-amber-900/30 top-0 z-50 shadow-[0px_25px_50px_-12px] font-vibes group/nav overflow-x-hidden">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent shadow-[0_0_20px] shadow-amber-500/30">
          <div className="flex justify-between px-6">
            <GiForkKnifeSpoon
              className="text-amber-500/40 -mt-2 -ml-2 -rotate-45"
              size={32}
            />
            <GiForkKnifeSpoon
              className="text-amber-500/40 -mt-2 -mr-2 -rotate-45"
              size={32}
            />
          </div>
        </div>
      </div>
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          <div className="flex-shrink-0 flex items-center space-x-2 group relative md:-translate-x-4 lg:-translate-x-6 ml-0 md:ml-2">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300" />
            <GiChefToque className="text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover/nav:rotate-12 group-hover:text-amber-400 hover:drop-shadow-[0_0_15px] hover:drop-shadow-500/50" />
            <div className="flex flex-col ml-2 relative max-w-[140px] md:max-w-[160px] lg:max-w-none">
              <NavLink
                to={"/"}
                className="text-2xl md:text-xl  lg:text-4xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-monsieur tracking-wider drop-shadow-[0_2px_2px] drop-shadow-black -translate-x-2 truncate md:truncate-none"
              >
                Foodie Frenzy
              </NavLink>
              <div className="h-[3px] w-full mt-1 ml-1 bg-gradient-to-r from-amber-600/30 via-amber-600/30 to-amber-600/30 shadow-[0_2px_5px] shadow-amber-500/20" />
            </div>
          </div>
          <div className="md:flex hidden items-center space-x-2 md:space-x-1 lg:space-x-4 flex-1 justify-end">
            {navLinks.map((link) => {
              return (
                <NavLink
                  to={link.to}
                  key={link.name}
                  className={({ isActive }) =>
                    `group px-3 md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-amber-900/20 rounded-3xl border-2 ${
                      isActive
                        ? "border-amber-600/50 bg-amber-900/20 shadow-[inset_0_0_15px] shadow-amber-500/20"
                        : "border-amber-600/30 hover:border-amber-600/50"
                    } shadow-md shadow-amber-900/20`
                  }
                >
                  <span className="mr-2 text-sm md:text-[15px] lg:text-base text-amber-500 group-hover:text-amber-300 transition-all">
                    {link.icon}
                  </span>
                  <span className="text-amber-100 group-hover:text-amber-300 relative">
                    {link.name}
                    <span className="absolute -bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </NavLink>
              );
            })}
            <div className="flex items-center ml-3 md:ml-3 lg:ml-4 mr-2 md:mr-2 lg:mr-3 space-x-2 md:space-x-3 lg:space-x-4">
              <NavLink
                to={"/cart"}
                className="p-2 md:p-2 text-amber-100 lg:p-4 rounded-xl border-2 transition-all relative border-amber-900/30 hoder:border-amber-600/50 group hover:bg-amber-900/30 hover:shadow-lg hover:shadow-amber-500/30 shadow-md shadow-amber-900/30"
              >
                <FiShoppingCart className="text-base md:text-xl lg:text-lg" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs text-amber-100 bg-amber-600 rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
              {renderDesktopAuthButton()}
            </div>
          </div>
          <div className="md:hidden flex items-center mr-2">
            <button
              className="text-amber-500 hover:text-amber-300 border-2 p-2 focus:outline-none rounded-xl border-amber-900/30 hover:border-amber-600/50 shadow-md shadow-amber-900/20 hover:shadow-lg cursor-pointer  hover:shadow-amber-500/30"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="flex items-center justify-center flex-col gap-[4.5px] cursor-pointer relative">
                <div
                  className={`bg-current w-7 h-[2px] rounded-sm transition-all duration-500 ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  } origin-center`}
                />
                <div
                  className={`bg-current w-7 h-[2px] rounded-sm transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`bg-current w-7 h-[2px] rounded-sm transition-all duration-500 ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  } origin-center`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen?"block":"hidden"} bg-[#2D1B0E] border-t-4 border-amber-900/40 relative shadow-lg shadow-amber-900/30 w-full  `}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) => {
            return (
              <NavLink
                to={link.to}
                key={link.name}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-3 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-amber-600/30 border-amber-600/50 text-amber-400"
                      : "hover:bg-amber-600/20 text-amber-400 border-amber-900/30"
                  } border-2 `
                }
              >
                <span className="mr-3 text-amber-500">{link.icon}</span>
                {link.name}
              </NavLink>
            );
          })}
          <div className="pt-4 border-t-4 border-amber-900/30 space-y-2">
            <NavLink
              to={"/cart"}
              onClick={() => setIsOpen(false)}
              className={
                "w-full px-4 py-3 text-center text-amber-100 rounded-xl border-2 border-amber-900/30 hover:border-amber-600/50 flex items-center justify-center space-x-2 text-sm"
              }
            >
              <FiShoppingCart className="text-lg" />
              {totalItems > 0 && (
                <span className="top-2 right-2 text-xs text-amber-100 bg-amber-600 rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
            {renderMobileAuthButton()}
          </div>
        </div>
      </div>

      {showLoginModel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#2D1B0E] to-[#4a372a] p-6 w-full max-w-[450px] relative border-4 border-amber-700/30 shadow[0_0_30px] shadow-amber-500/30 rounded-xl">
            <button
              onClick={() => navigate("/")}
              className="absolute top-2 right-2 text-amber-500 hover:text-amber-300 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              Foodie-Frenzy
            </h2>
            <Login
              onLoginSuccess={handleLoginSuccess}
              onClose={() => navigate("/")}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
