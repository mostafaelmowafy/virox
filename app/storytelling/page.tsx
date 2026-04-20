import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storytelling — KREVA GEL",
  description: "قصة VIROX — كيف بدأت الرحلة نحو حل حقيقي لضعف الانتصاب",
};

const milestones = [
  {
    year: "2018",
    title: "بداية البحث",
    desc: "بدأ فريق من الأطباء المتخصصين رحلة البحث عن حل جذري لمشكلة ضعف الانتصاب التي تؤثر على ملايين الرجال حول العالم.",
  },
  {
    year: "2020",
    title: "اكتشاف التركيبة",
    desc: "بعد آلاف الساعات من التجارب المعملية، تم اكتشاف التركيبة الفريدة التي تجمع بين تنشيط الدورة الدموية وزيادة إفراز التستوستيرون.",
  },
  {
    year: "2022",
    title: "التجارب السريرية",
    desc: "أُجريت التجارب السريرية على أكثر من 2,000 مريض في مستشفيات معتمدة، وأثبتت النتائج فعالية استثنائية تجاوزت توقعات الفريق الطبي.",
  },
  {
    year: "2023",
    title: "الحصول على الترخيص",
    desc: "حصل VIROX على الترخيص الرسمي من وزارة الصحة بعد اجتياز جميع معايير الجودة والسلامة المطلوبة.",
  },
  {
    year: "2024",
    title: "إطلاق المنتج",
    desc: "وصل VIROX إلى أيدي آلاف الرجال في مختلف المحافظات، مغيراً حياتهم وعلاقاتهم إلى الأبد.",
  },
];

export default function Storytelling() {
  return (
    <>
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 charcoal-bg overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(#d4af37 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="inline-block px-4 py-1 bg-yellow-900/30 text-[#d4af37] border border-yellow-700/40 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="font-headline font-extrabold text-white text-4xl md:text-6xl mb-6 leading-tight max-w-3xl mx-auto">
              رحلة من الاكتشاف إلى التغيير الحقيقي
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              لم يكن VIROX مجرد منتج — كان حلماً بإعادة الثقة والفحولة لكل رجل
              يستحق حياة أفضل.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="relative">
              {/* Center line */}
              <div className="absolute right-1/2 top-0 bottom-0 w-px bg-yellow-200 hidden md:block" />

              <div className="space-y-16">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Year bubble */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative z-10 w-20 h-20 rounded-full luxury-gradient flex items-center justify-center shadow-lg shadow-yellow-400/20 flex-shrink-0">
                        <span className="text-white font-headline font-bold text-sm">
                          {m.year}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div
                      className={`md:w-1/2 text-right ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <div className="bg-[#fdfaf2] border border-yellow-100 rounded-xl p-8">
                        <h3 className="font-headline font-bold text-xl text-[#1c1b1b] mb-3">
                          {m.title}
                        </h3>
                        <p className="text-[#4d4635] leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-[#f8f7f5]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl font-headline font-bold text-[#1c1b1b] mb-8">
              رسالتنا
            </h2>
            <blockquote className="text-2xl text-[#4d4635] leading-loose border-r-4 border-[#d4af37] pr-8 text-right max-w-3xl mx-auto">
              نؤمن بأن كل رجل يستحق أن يعيش حياة جنسية كاملة ومُرضية، بعيداً عن
              الإحراج والقلق. مهمتنا هي تقديم الحل الطبي الأكثر أماناً وفعالية،
              مع الحفاظ على الخصوصية التامة لكل عميل.
            </blockquote>
            <div className="mt-16">
              <Link
                href="/#order"
                className="luxury-gradient text-white px-14 py-5 rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition-transform inline-block"
              >
                ابدأ رحلتك الآن
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
