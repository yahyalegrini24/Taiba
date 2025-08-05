import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero Content */}
      <div className="z-10 max-w-3xl mt-20 sm:mt-28 md:mt-36 lg:mt-44 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          مرحباً بكم في <span className="text-yellow-400">مطعم طيبة</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          ذوق أصيل و نكهات جزائرية لا مثيل لها — دجاج مشوي ومحمّر على أصولو 🍗🔥
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-base sm:text-lg rounded-full shadow-lg transition w-full sm:w-auto">
            عرض القائمة
          </button>
          <button className="border-2 border-white text-white px-8 py-3 text-base sm:text-lg rounded-full hover:bg-white hover:text-black font-bold transition w-full sm:w-auto">
            احجز طاولة
          </button>
        </div>
      </div>
    </section>
  );
}
