import React from "react";
import { Flame, Drumstick } from "lucide-react";

const specialties = [
  {
    title: "دجاج مشوي",
    description: "دجاج متبّل بتوابل سرية ومشوِي على الفحم ليعطي نكهة أصيلة لا تقاوم. يقدم مع خبز تقليدي وسلطة طازجة.",
    price: "1300 دج",
    icon: <Flame className="text-yellow-500 w-6 h-6" />,
    image: "/machwi.jpeg",
  },
  {
    title: "دجاج محمّر",
    description: "دجاج مطيب بزبدة وتوابل جزائرية، محمّر في الفرن حتى يصبح ذهبي ومقرمش. يقدم مع صوص منزلي وبطاطا مقلية.",
    price: "1100 دج",
    icon: <Drumstick className="text-yellow-500 w-6 h-6" />,
    image: "/bg.png",
  },
];

export default function SpecialtiesSection() {
  return (
    <section
      id="special"
      className="bg-white py-20 px-4 text-center font-arabic scroll-mt-20"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-yellow-600">
        تخصصنا
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 max-w-6xl mx-auto">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-white border border-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-right">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <span className="text-yellow-600 text-xl font-semibold">
                  {item.price}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

              <div className="text-center">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full text-sm transition">
                  أطلب الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
