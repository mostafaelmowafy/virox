"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Storytelling() {
  return (
    <Link href="/productsells">
      <main
        className="bg-[#fcfcfc] text-gray-900 overflow-x-hidden font-sans"
        dir="rtl"
      >
        {/* 1. Hero Section - The Hook */}
        <div className=" h-svh">
          <Image
            src="/doctor.jpeg"
            alt="Dr. Safaa"
            fill
            priority // ← هذه الصورة هي LCP، تُحمَّل أولاً
            className="opacity-90 max-w-3xl mx-auto "
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-[#1c1b1b]/90" />
        </div>

        <section className="relative bg-[#1a1918] py-20 text-white border-b-4 border-[#d4af37]">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1 bg-yellow-900/30 text-[#d4af37] border border-yellow-700/40 rounded-full text-sm font-bold mb-6 animate-bounce">
              مرخص من وزارة الصحة المصرية ✅
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              للرجال المتزوجين.. <br />
              <span className="text-[#d4af37]">ارجـع عريس من جديد</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              استعد ثقتك بنفسك وودع الإحراج للأبد مع الحل الطبيعي والنهائي.
            </p>
            <div className="bg-[#d4af37] hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-xl transition-all shadow-xl hover:scale-105 inline-block">
              احصل على العرض الآن
            </div>
          </div>
        </section>
        {/* 2. The Guide - Dr. Safaa Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3">
              {/* استبدل dr-safaa.jpg بالصورة الحقيقية */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <Image
                  src="/button.png" // تأكد من وضع صورة الطبيب في مجلد public
                  alt="Dr. Safaa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                معاكم دكتورة صفاء..
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  زهقت من البرشام اللي أضراره أكتر من فوايده؟ جربت حاجات كتير
                  ولسه انتصابك ضعيف؟
                </p>
                <p className="font-semibold text-red-600">
                  شكلك بيبقى وحش قدام مراتك من كتر الفشل؟
                </p>
                <p>
                  من الطبيعي مع تقدم العمر إن أول حاجة بتأثر عليك هي الضعف..
                  وصعوبة الانتصاب بتخليك تهرب من القعدة في البيت وتفضل الشغل أو
                  القهوة.
                </p>
                <p className="bg-yellow-50 p-4 border-r-4 border-[#d4af37] italic">
                  &quot;الحل مش في المسكنات الكيميائية، الحل في العودة للطبيعة
                  بشكل علمي مدروس.&quot;
                </p>
              </div>
            </div>
          </div>
          <Button />
        </section>

        {/* 3. The Villain - Why Pills are Bad */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              ليه لازم تبعد عن &quot;البرشام&quot;؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  t: "خطر على القلب",
                  d: "يؤثر بشكل مباشر على ضغط الدم ومرضى السكر.",
                },
                {
                  t: "مفعول مؤقت",
                  d: "بمجرد انتهاء المفعول تعود المشكلة أسوأ من قبل.",
                },
                {
                  t: "أعراض جانبية",
                  d: "صداع شديد، زغللة في العين، وإرهاق عام.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-4 text-red-500">❌</div>
                  <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                  <p className="text-gray-600">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Hero - Dravon Solution */}
        <section className="py-20 bg-[#1a1918] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">
              الحل هو: <span className="text-[#d4af37]">VIROX</span>
            </h2>
            <Image
              src="/product.jpeg"
              alt="Virox Product"
              width={300}
              height={300}
              className="mx-auto mb-8"
            />
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-loose">
              شاب وزيوت طبيعية بنسب دقيقة لتحقيق أقصى استفادة. آمن تماماً على
              مرضى السكر والضغط والقلب. بمجرد أول دهنة هتلاقي انتصابك بقى
              فولاذي.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
              {[
                "آمن 100% بدون أعراض جانبية",
                "حل نهائي مش مجرد مؤقت",
                "بيوصلك للمستوى المطلوب فوراً",
                "مناسب لجميع الأعمار",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#252423] p-6 rounded-xl border-r-4 border-[#d4af37]"
                >
                  <p className="font-bold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Transformation Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-black mb-8 text-gray-900 leading-snug">
              خليك دايما <span className="text-[#d4af37] underline">أسـد</span>{" "}
              في بيتك <br /> واستعد رجولتك من جديد
            </h2>
            <p className="text-2xl text-gray-600 mb-10">
              بعد شهر واحد من الاستخدام، المشكلة هتختفي تماماً وهتبهرها بقوتك.
            </p>
            <div className="flex justify-center gap-4 text-4xl mb-12">
              🦁 🔥 💪
            </div>
            <Button />
          </div>
        </section>
      </main>
    </Link>
  );
}
