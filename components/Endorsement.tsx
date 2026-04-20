import { Award, CheckSquare, Slack, Sparkles2 } from "@deemlol/next-icons";
import Button from "./Button";

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science — KREVA GEL",
  description: "العلم وراء VIROX — المكونات الفعالة وآلية العمل",
};

import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });

export default function Endorsement() {
  return (
    <section
      className={`${cairo.className} min-h-screen bg-[#fafafa] py-16 px-4`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-20 leading-tight">
          لماذا ينصح %90 من أطباء العالم باستخدام VIROX
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative">
          {/* تأثير الإضاءة الخلفية (Glow Effect) */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200/40 rounded-full blur-[100px]"></div>
          </div>

          {/* الجهة اليمنى: المميزات */}
          <div className="space-y-16 z-10 order-2 lg:order-1">
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
          <div className="flex justify-center z-20 order-1 lg:order-2">
            <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/product2.jpeg" // تأكد من وضع صورة الطبيب في مجلد public
                alt="Doctor recommending Criva Gel"
                fill
                priority
              />
            </div>
          </div>

          {/* الجهة اليسرى: المميزات */}
          <div className="space-y-16 z-10 order-3 lg:order-3">
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
        <div className="text-center mt-20">
          <h2 className="text-xl font-bold text-[#c29b3c] mb-6">
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
  isLeft?: boolean;
}) {
  return (
    <div className={`flex items-start gap-4 lg:flex-row md:justify-center `}>
      <div className="text-[#c29b3c] p-2 rounded-lg shadow-sm">
        <span className="material-icons text-3xl">{icon}</span>
      </div>
      <div className="max-w-[250px] md:w-[350px] md:max-w-none">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
