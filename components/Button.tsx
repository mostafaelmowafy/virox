"use client";

import Image from "next/image";

export default function Button() {
  return (
    // استخدام group عشان لما نعمل hover على أي جزء، التأثير يطبق على الشكل كله
    <button
      onClick={() => {
        document
          .getElementById("order")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="flex flex-row justify-center items-center mt-12 group cursor-pointer w-fit mx-auto"
      dir="ltr"
    >
      {/* الجزء الأول: الصورة بالشكل السداسي */}
      <div
        className=" relative z-10 w-28 h-32 bg-white border flex items-center justify-center transition-all group-hover:scale-105 duration-300"
        style={{
          // ده الكود المسؤول عن عمل الشكل السداسي
          clipPath:
            "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 50%)",
        }}
      >
        <Image
          src="/button2.png"
          alt="أيقونة"
          width={100}
          height={100}
          className="object-contain "
        />
      </div>

      {/* الجزء الثاني: زر النص */}
      <div className="relative -ml-10 pl-14 pr-12 py-4 bg-gradient-to-r from-neutral-900 to-black text-white text-3xl font-bold rounded-r-full border-y-[3px] border-r-[3px] border-orange-500 shadow-xl transition-all">
        أطلب الأن
      </div>
    </button>
  );
}
