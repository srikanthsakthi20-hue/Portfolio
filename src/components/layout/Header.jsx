
import React from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { scrollToSection } from "../../utils/scrollToSection";
import { NAV_ITEMS } from "../../constants/navigation";

export const Header = ({ isDarkMode, toggleDarkMode }) => {
  const scrolled = useScrolled();

  const headerClass = scrolled
    ? "bg-black/80 backdrop-blur-md shadow-xl border-b border-teal-500/30"
    : "bg-transparent";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-3xl font-extrabold text-teal-400 cursor-pointer">
          <button onClick={() => scrollToSection("hero")}>
            {"<SrikanthSakthi />"}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.target)}
                className="text-gray-300 font-medium cursor-pointer relative group transition-colors hover:text-teal-400"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};