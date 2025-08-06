import React, { useState, useRef } from "react";
import { Utensils, Flame, Salad, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "أطباق تقليدية",
    key: "traditional",
    icon: <Flame size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "كسكس بالخضر",
        description: "كسكس جزائري أصيل مع خضروات ومرقة بنينة.",
        price: "500 دج",
        image: "/koskos.jpg",
      },
      {
        name: "شوربة فريك",
        description: "شوربة دافئة بالفريك والتوابل التقليدية.",
        price: "400 دج",
        image: "/chorba.jpg",
      },
      {
        name: "ملوخية",
        description: "ملوخية جزائرية خضراء مطهية ببطء مع اللحم والبهارات.",
        price: "400 دج",
        image: "/mloukhiya.jpg",
      },
      {
        name: "كمونية",
        description: "طبق تونسي الأصل بنكهة الكمون واللحم في صوص أحمر.",
        price: "500 دج",
        image: "/kamouniya.jpg",
      },
      {
        name: "عجة مرقاز",
        description: "عجة شهية مع نقانق مرقاز، بيض وخضروات مطهية في الفرن.",
        price: "600 دج",
        image: "/ajja.jpg",
      },
      {
        name: "شخشوخة",
        description: "ورق رقيق مرحي بالمرق الأحمر والدجاج أو اللحم.",
        price: "800 دج",
        image: "/chakhchokha.jpg",
      },
      {
        name: "كبدة مشرملة",
        description: "كبدة مطهية مع الفلفل والطماطم والزيتون بتوابل جزائرية.",
        price: "600 دج",
        image: "/Kebda.jpg",
      },
      {
        name: "شكشوكة",
        description: "بيض مطهو فوق خليط من الطماطم والفلفل والثوم.",
        price: "300 دج",
        image: "/chakchoka.jpg",
      },
    ],
  },
  {
    name: "أطباق عصرية",
    key: "modern",
    icon: <Utensils size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "روز بالخضر",
        description: "أرز مطبوخ مع خضروات موسمية وتوابل جزائرية.",
        price: "300 دج",
        image: "/rouz.jpg",
      },
      {
        name: "غراتان",
        description: "بطاطا مغطاة بالجبن وصوص بشاميل مشوية في الفرن.",
        price: "400 دج",
        image: "/gratin.jpg",
      },
      {
        name: "بطاطا كوشة",
        description: "بطاطا في الفرن مع توابل وزيت الزيتون ونكهات جزائرية.",
        price: "300 دج",
        image: "/koucha.jpg",
      },
      {
        name: "صحن شاورما",
        description: "شاورما دجاج متبلة، خبز طري، صوص وثومية، بطاطا مقلية.",
        price: "400 دج",
        image: "/chawarma.jpg",
      },
      {
        name: "رولي",
        description: "عجينة محشوة بالدجاج والخضار، مطهية ومقرمشة.",
        price: "500 دج",
        image: "/rouli.jpg",
      },
      {
        name: "لابيري",
        description: "طبق مكرونة محشي بالجبن واللحم في صوص لذيذ.",
        price: "300 دج",
        image: "/lapiri.jpg",
      },
      {
        name: "مقارونة",
        description: "طبق مقارونة بصوص أحمر تقليدي ولحم مفروم.",
        price: "300 دج",
        image: "/ma9arouna.jpg",
      },
      {
        name: "سكالوب في لاكرام",
        description: "شرائح دجاج مطهوة في صوص كريمي مع فطر وبهارات.",
        price: "600 دج",
        image: "/scalope.jpg",
      },
    ],
  },
  {
    name: "السلطات",
    key: "salads",
    icon: <Salad size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "سلطة مشوية",
        description: "سلطة مشكّلة بالخضروات الطازجة، زيت زيتون، توابل سرية.",
        price: "200 دج",
        image: "/7mis.jpg",
      },
      {
        name: "صلاطة جزائرية ",
        description: "قطع دجاج مشوي، خس، طماطم، صوص رانش بنين بزاف.",
        price: "300 دج",
        image: "/salade-al.jpg",
      },
    ],
  },
];

export default function DishesSection() {
  const [selectedCategory, setSelectedCategory] = useState("traditional");
  const activeCategory = categories.find((cat) => cat.key === selectedCategory);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 font-arabic" id="menu">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-600 mb-2">أطباقنا</h2>
        <p className="text-gray-600 text-lg">اختار النوع اللي يعجبك 👇</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 transition font-semibold
              ${selectedCategory === cat.key
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white text-gray-800 border-gray-300 hover:border-yellow-400"
              }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mobile Scroll Buttons (Positioned over the carousel) */}
      <div className="relative sm:hidden">
        <div className="overflow-x-auto sm:overflow-visible scrollbar-hide" ref={scrollRef}>

          <div
            className="flex gap-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {activeCategory?.dishes.map((dish, index) => (
              <div
                key={index}
                className="min-w-full scroll-snap-align-start"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded-full shadow">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                    <p className="text-gray-600 text-sm">{dish.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons (centered vertically on sides) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-yellow-100 rounded-full shadow mx-2"
          >
            <ChevronLeft className="text-yellow-600" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-yellow-100 rounded-full shadow mx-2"
          >
            <ChevronRight className="text-yellow-600" />
          </button>
        </div>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {activeCategory?.dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded-full shadow">
                {dish.price}
              </div>
            </div>
            <div className="p-4 text-right">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
              <p className="text-gray-600 text-sm">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
