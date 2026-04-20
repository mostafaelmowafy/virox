import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شكراً لطلبك — VIROX",
};

export default function ThankYouPage() {
  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* خلفية صورة المنتج */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/button.png" // تأكد من مسار الصورة الصحيح في مجلد public
            alt="Virox Background"
            fill
            className="object-cover" // التحكم في الشفافية لجعل النص واضحاً
            priority
          />
          {/* طبقة تظليل إضافية (Overlay) لضمان قراءة النص */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        {/* المحتوى */}
        <div className="relative z-10 text-center px-6 max-w-lg ">
          {/* أيقونة النجاح */}

          <div className="bg-white/80 border border-yellow-200 rounded-2xl p-6 mb-10 text-right space-y-4 shadow-sm flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#cc9933] to-[#efd48e] flex items-center justify-center mx-auto shadow-xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-[#1c1b1b] mb-4 text-center">
              تم استلام طلبك بنجاح!
            </h1>
            <p className="text-[#4d4635] pb-2 leading-relaxed font-medium text-center ">
              شكراً لثقتك بنا. سيتواصل معك فريقنا خلال دقائق قليلة لتأكيد الطلب
              وترتيب الشحن.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#1c1b1b] text-white rounded-full font-bold hover:bg-[#080808] transition-colors shadow-lg"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
