import { Award, CheckSquare, Slack, Sparkles2 } from '@deemlol/next-icons';
import Button from './Button';

import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Science — VIROX GEL',
  description: 'العلم وراء VIROX — المكونات الفعالة وآلية العمل',
};

import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] });

export default function Endorsement() {
  return (
    <section className={`${cairo.className} bg-[#fafafa] py-4`} dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4 leading-tight">
          لماذا ينصح %90 من أطباء العالم
          <span className=" block text-primary tracking-widest">
            {' '}
            باستخــــــــــــدام VIROX
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* الجهة اليمنى: المميزات */}
          <div className=" space-y-4 md:space-y-16 z-10 order-2 md:order-1 ">
            <FeatureItem
              title="استعادة الحيوية"
              desc="يجعلك تشعر وكأنك شاب في سن الـ20 من عمره"
              icon=<Sparkles2
                strokeWidth={1.5}
                className="text-primary text-3xl"
              />
            />
            <FeatureItem
              title="أحدث التقنيات"
              desc="لأنه أحدث ما توصل له الطب خلال هذا العام"
              icon=<Slack strokeWidth={1.5} className="text-primary text-3xl" />
            />
          </div>

          {/* المنتصف: صورة الطبيب */}
          <div className="flex justify-center z-20 order-1 md:order-2">
            <div className="relative w-full h-[350px] md:w-[350px] md:h-[450px] md:rounded-3xl overflow-hidden shadow-2xl md:border-4 border-white">
              <Image
                src="/hero.jpeg"
                alt="..."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 350px"
              />
            </div>
          </div>

          {/* الجهة اليسرى: المميزات */}
          <div className="space-y-4 md:space-y-16 z-10 order-3 md:order-3">
            <FeatureItem
              title="فعالية مثبتة"
              desc="لأنه أثبت قوة فاعليته في علاج حالات ضعف الانتصاب"
              icon=<Award strokeWidth={1.5} className="text-primary text-3xl" />
            />
            <FeatureItem
              title="الحل النهائي"
              desc="لا تجعل صغر حجم القضيب يحرمك من تجربة أوضاع أكثر"
              icon=<CheckSquare
                strokeWidth={1.5}
                className="text-primary text-3xl"
              />
            />
          </div>
        </div>

        {/* الجزء السفلي: زر الطلب */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-[#c29b3c] my-6">
            الحل الآن بين يديك
          </h2>
          <Button />
        </div>
      </div>
    </section>
  );
}

// مكون فرعي للميزة الواحدة لتقليل تكرار الكود
function FeatureItem({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-gradient-to-r from-[#c29b3c]/10 to-transparent p-4 rounded-lg w-full">
      <div className="text-[#c29b3c] p-2 rounded-lg shadow-sm flex-shrink-0">
        <span className="material-icons text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
