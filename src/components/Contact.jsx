import React from "react";
import {
  Phone,
  Truck,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 px-6 text-center font-arabic"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 تواصل معنا</h2>
      <p className="text-lg text-gray-300 mb-10">
        نحن هنا لخدمتكم عبر جميع قنوات التواصل: الاتصال، التوصيل، والمراسلة
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {/* الاتصال المباشر */}
        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3">
          <Phone size={32} className="text-yellow-400" />
          <p className="text-xl font-bold">اتصال مباشر</p>
          <p className="text-lg">0555 55 55 55</p>
        </div>

        {/* التوصيل */}
        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3">
          <Truck size={32} className="text-green-400" />
          <p className="text-xl font-bold">خدمة التوصيل</p>
          <p className="text-lg">0777 77 77 77</p>
        </div>

        {/* رسائل / WhatsApp */}
        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3">
          <MessageCircle size={32} className="text-blue-400" />
          <p className="text-xl font-bold">المراسلة</p>
          <p className="text-lg">على WhatsApp أو Messenger</p>
        </div>

        {/* وسائل التواصل */}
        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3">
          <Instagram size={32} className="text-pink-500" />
          <p className="text-xl font-bold">تابعنا</p>
          <p className="text-lg">@tayba_dz</p>
        </div>

      </div>
    </section>
  );
}
