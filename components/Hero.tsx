"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-[100vh] flex items-center justify-center pt-24 overflow-hidden charcoal-bg">
      {/* Background Image — priority=true for LCP optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="KREVA GEL - منتج طبي فاخر"
          fill
          priority // ← هذه الصورة هي LCP، تُحمَّل أولاً
          className="opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-[#1c1b1b]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-headline font-extrabold text-white text-4xl md:text-7xl mb-8 leading-tight max-w-4xl mx-auto tracking-tight">
          وداعاً لضعف الانتصاب واستعيد ثقتك وفحولتك
        </h1>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              const orderSection = document.getElementById("order");
              if (orderSection) {
                orderSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="luxury-gradient bg-primary text-white text-xl px-12 py-5 rounded-lg font-bold shadow-xl hover:shadow-yellow-400/30 transition-all hover:scale-105"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </header>
  );
}
