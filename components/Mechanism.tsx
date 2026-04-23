import Image from 'next/image';
import { Cairo } from 'next/font/google';
import Button from './Button';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] });

export default function HowItWorks() {
  return (
    <section
      className={`${cairo.className} bg-[#1a1918] py-6 px-6 md:px-12`}
      dir="rtl"
    >
      <div className="max-w-7xl justify-center mx-auto grid grid-cols-1 gap-12 items-center">
        <div className="space-y-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight text-center tracking-widest">
            كيف تعمل مكونات
            <br /> VIROX المتطورة
            <span className=" block bg-gray-500 pb-1 px-6 mt-2 text-white rounded-sm w-fit mx-auto">
              {' '}
              لعلاج ضعف الانتصاب
            </span>
          </h2>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[500px] h-[300px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/anatomy-image.jpeg"
                alt="كيف يعمل جيل كريفا"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -z-10 inset-0 bg-[#cc9933]/10 blur-[80px] rounded-full scale-75"></div>
          </div>

          <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-sm border-r-4 border-[#cc9933] max-w-3xl mx-auto">
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
      <Button />
    </section>
  );
}
