import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // you can also use any icon lib you like

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 right-0 w-full z-20 bg-black/50 text-white font-arabic">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">مطعم طيبة</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#menu" className="hover:text-yellow-400">القائمة</a>
          <a href="#special" className="hover:text-yellow-400">تخصصنا</a>
          <a href="#contact" className="hover:text-yellow-400">اتصل بنا</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black/70 text-lg">
          <a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">القائمة</a>
          <a href="#special" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">تخصصنا</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">اتصل بنا</a>
        </nav>
      )}
    </header>
  );
}
