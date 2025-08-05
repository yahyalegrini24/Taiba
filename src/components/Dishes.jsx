import React, { useState } from "react";
import { Utensils, Flame } from "lucide-react";

const categories = [
  {
    name: "أطباق تقليدية",
    key: "traditional",
    icon: <Flame size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "كسكس بالخضر",
        description: "كسكس جزائري أصيل مع خضروات مطهية على البخار ومرقة بنينة.",
        price: "900 دج",
        image: "/couscous.jpg",
      },
      {
        name: "شوربة فريك",
        description: "شوربة دافئة بالفريك والتوابل التقليدية، طبق مثالي لبداية الأكل.",
        price: "600 دج",
        image: "/chorba.jpg",
      },
    ],
  },
  {
    name: "أطباق عصرية",
    key: "modern",
    icon: <Utensils size={20} className="text-yellow-500" />,
    dishes: [
      {
        name: "باستا دجاج",
        description: "مكرونة بصوص كريمي مع قطع دجاج مشوي وجبن مبشور.",
        price: "1200 دج",
        image: "/pasta.jpg",
      },
      {
        name: "برغر جزائري",
        description: "خبز طازج، لحم مشوي، صوص حار، ومكونات جزائرية فريدة.",
        price: "1000 دج",
        image: "/burger.jpg",
      },
    ],
  },
];

export default function DishesSection() {
  const [selectedCategory, setSelectedCategory] = useState("traditional");

  const activeCategory = categories.find(
    (cat) => cat.key === selectedCategory
  );

  return (
    <section className="bg-gray-50 py-20 px-6 font-arabic" id="dishes">
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
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {activeCategory.dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-right">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{dish.name}</h3>
              <p className="text-gray-600 mb-3">{dish.description}</p>
              <div className="text-yellow-600 text-xl font-bold">{dish.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
