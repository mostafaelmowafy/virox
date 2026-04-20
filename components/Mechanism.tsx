import Image from "next/image";
import { Cairo } from "next/font/google";
import Button from "./Button";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });

export default function HowItWorks() {
  return (
    <section
      className={`${cairo.className} bg-[#fdfaf5] py-16 px-6 md:px-12`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/anatomy-image.jpeg"
              alt="كيف يعمل جيل كريفا"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -z-10 inset-0 bg-[#cc9933]/10 blur-[80px] rounded-full scale-75"></div>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            كيف تعمل مكونات VIROX المتطورة لعلاج ضعف الانتصاب
          </h2>

          <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-sm border-r-4 border-[#cc9933]">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              يعمل على تنشيط الدورة الدموية وتنشيط الخلايا الخاملة في النسيج
              الكهفي للعضو الذكري وزيادة إفراز هرمون التستوستيرون بكميات كبيرة
              حتى يعطيك انتصاب صلب كالحديد وحجم ضخم لتصل إلى درجة الفحولة التي
              ترضيك أنت وشريكتك، كما يزيد من الرغبة الجنسية للرجال ويرفع مستوى
              الأداء والقوة أثناء العلاقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
