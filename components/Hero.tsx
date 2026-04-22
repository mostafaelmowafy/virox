'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-[#1a1918]">
      <main className="relative min-h-[36vh] max-w-5xl mx-auto pt-24 overflow-hidden">
        {/* Background Image — priority=true for LCP optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/product2.jpeg"
            alt="VIROX GEL - منتج طبي فاخر"
            fill
            priority // ← هذه الصورة هي LCP، تُحمَّل أولاً
            className="opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-[#1c1b1b]/60" />
        </div>

        {/* Content */}
        <div className="  z-10 container mx-auto text-center flex flex-col items-center ">
          <h1 className="font-headline absolute bottom-0 right-0 font-extrabold text-white text-xl mb-8 leading-tight tracking-tight max-w-lg px-4 text-right border-r-2 border-primary mr-4">
            وداعاً لضعف الانتصاب <br /> واستعيد ثقتك وفحولتك
            <span className="tracking-[0.5em] text-primary block">
              مــــــــــــن جديـــــــــــد
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
