import React, { useState } from "react";
import { Utensils, Flame, Salad } from "lucide-react";

const categories = [
  {
    name: "أطباق تقليدية",
    key: "traditional",
    icon: <Flame size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "كسكس بالخضر",
        description: "كسكس جزائري أصيل مع خضروات ومرقة بنينة.",
        price: "900 دج",
        image: "/koskos.jpg",
      },
      {
        name: "شوربة فريك",
        description: "شوربة دافئة بالفريك والتوابل التقليدية.",
        price: "600 دج",
        image: "/chorba.jpg",
      },
      {
        name: "ملوخية",
        description: "ملوخية جزائرية خضراء مطهية ببطء مع اللحم والبهارات.",
        price: "950 دج",
        image: "/mloukhiya.jpg",
      },
      {
        name: "كمونية",
        description: "طبق تونسي الأصل بنكهة الكمون واللحم في صوص أحمر.",
        price: "1000 دج",
        image: "/kamouniya.jpg",
      },
      {
        name: "عجة مرقاز",
        description: "عجة شهية مع نقانق مرقاز، بيض وخضروات مطهية في الفرن.",
        price: "800 دج",
        image: "/ajja.jpg",
      },
      {
        name: "شخشوخة",
        description: "ورق رقيق مرحي بالمرق الأحمر والدجاج أو اللحم.",
        price: "1100 دج",
        image: "/chakhchokha.jpg",
      },
      {
        name: "كبدة مشرملة",
        description: "كبدة مطهية مع الفلفل والطماطم والزيتون بتوابل جزائرية.",
        price: "850 دج",
        image: "/Kebda.jpg",
      },
      {
        name: "شكشوكة",
        description: "بيض مطهو فوق خليط من الطماطم والفلفل والثوم.",
        price: "750 دج",
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
      price: "850 دج",
      image: "/rouz.jpg",
    },
    {
      name: "غراتان",
      description: "بطاطا مغطاة بالجبن وصوص بشاميل مشوية في الفرن.",
      price: "950 دج",
      image: "/gratin.jpg",
    },
    {
      name: "بطاطا كوشة",
      description: "بطاطا في الفرن مع توابل وزيت الزيتون ونكهات جزائرية.",
      price: "800 دج",
      image: "/koucha.jpg",
    },
    {
      name: "صحن شاورما",
      description: "شاورما دجاج متبلة، خبز طري، صوص وثومية، بطاطا مقلية.",
      price: "950 دج",
      image: "/shawarma.jpg",
    },
    {
      name: "رولي",
      description: "عجينة محشوة بالدجاج والخضار، مطهية ومقرمشة.",
      price: "900 دج",
      image: "/roule.jpg",
    },
    {
      name: "لابيري",
      description: "طبق مكرونة محشي بالجبن واللحم في صوص لذيذ.",
      price: "1000 دج",
      image: "/laperi.jpg",
    },
    {
      name: "مقارونة",
      description: "طبق مقارونة بصوص أحمر تقليدي ولحم مفروم.",
      price: "850 دج",
      image: "/macarona.jpg",
    },
    {
      name: "سكالوب في لاكرام",
      description: "شرائح دجاج مطهوة في صوص كريمي مع فطر وبهارات.",
      price: "1200 دج",
      image: "/scalope.jpg",
    },
  ],
}
,
  {
    name: "السلطات",
    key: "salads",
    icon: <Salad size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "سلطة طيبة",
        description: "سلطة مشكّلة بالخضروات الطازجة، زيت زيتون، توابل سرية.",
        price: "500 دج",
        image: "/salad1.jpg",
      },
      {
        name: "سلطة دجاج",
        description: "قطع دجاج مشوي، خس، طماطم، صوص رانش بنين بزاف.",
        price: "700 دج",
        image: "/salad2.jpg",
      },
    ],
  },
];

export default function DishesSection() {
  const [selectedCategory, setSelectedCategory] = useState("traditional");
  const activeCategory = categories.find((cat) => cat.key === selectedCategory);

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 font-arabic" id="dishes">
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

      {/* Dishes Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {activeCategory?.dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded-full shadow">
                {dish.price}
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow text-right">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{dish.description}</p>
              <div className="mt-auto text-sm text-yellow-600 font-semibold">
                {/* Optional: repeat price or remove */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
