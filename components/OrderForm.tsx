'use client';
import { useState, FormEvent } from 'react'; // تأكد أنها هكذا
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

// declare global {
//   interface Window {
//     fbq: any;
//   }
// }

// تعريف شكل الأخطاء لـ TypeScript
interface FormErrors {
  name?: string;
  phone?: string;
  otherPhone?: string;
}

const perks = [
  { icon: '🔒', text: 'المنتج يصلك في سرية تامة منعاً لأي احراج' },
  { icon: '🚚', text: 'الشحن مجاني لجميع المحافظات' },
  { icon: '💳', text: 'الدفع عند استلام المنتج' },
  { icon: '↩️', text: 'سياسة الأسترجاع ضمان 14 يوم' },
];

export default function OrderForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // إضافة النوع string للمدخل str
  const convertArabicNumsToEnglish = (str: string) => {
    return str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
  };

  // إضافة النوع FormData
  const validateForm = (formData: FormData) => {
    const newErrors: FormErrors = {};
    const phoneRegex =
      /^(?:(?:010|011|015)[0-9]{8}|(?:0127|0128|0120|0121)[0-9]{7})$/;

    const rawPhone = ((formData.get('phone') as string) || '').trim();
    const phone = convertArabicNumsToEnglish(rawPhone);

    if (!formData.get('name')) newErrors.name = 'يجب إدخال الاسم بالكامل';
    if (!phone) {
      newErrors.phone = 'يجب إدخال رقم الهاتف';
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone =
        '❌ من فضلك أدخل رقم هاتف صحيح يبدأ بـ 010 - 011 - 015 - 0127 - 0128 - 0120 - 0121 ويتكون من 11 رقم';
    }

    const rawOtherPhone = ((formData.get('otherPhone') as string) || '').trim();

    const otherPhone = convertArabicNumsToEnglish(rawOtherPhone);

    if (otherPhone && !phoneRegex.test(otherPhone)) {
      newErrors.otherPhone =
        '❌ من فضلك أدخل رقم هاتف بديل صحيح يبدأ بـ 010 - 011 - 015 - 0127 - 0128 - 0120 - 0121 ويتكون من 11 رقم';
    }

    return newErrors;
  };
  // إضافة النوع FormEvent للحدث e
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Contact');
    }

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const orderData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      otherPhone: formData.get('otherPhone') || 'لا يوجد',
    };

    try {
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbzPp2xsfiRF3QiMrqOaE8-CALOLUwdXp9jR5qNGHz8au98GJfhpxpwSFMMlE5StxdVB/exec';

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(orderData),
      });

      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Purchase', {
          value: 420,
          currency: 'EGP',
          content_name: 'VIROX GEL',
          content_type: 'product',
        });
      }

      toast.success('تم إرسال طلبك بنجاح!');
      router.push('/ThankYouPage');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('❌ حدث خطأ، يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-8 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 bg-[#252423] rounded-3xl overflow-hidden shadow-2xl border border-yellow-900/40">
          <div className="p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-[#252423] to-[#111]">
            <div className="relative w-full mb-6 aspect-square transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/product.jpeg"
                alt="Product Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
              />
            </div>

            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-yellow-900/30 text-[#d4af37] border border-yellow-700/40 rounded-full text-sm font-bold mb-4">
                عرض حصري لفترة محدودة
              </span>
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl font-bold text-[#d4af37]">
                  420 ج.م
                </span>
                <span className="text-xl text-white/40 line-through">
                  500 ج.م
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {perks.map((perk, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 justify-end text-sm text-white/70"
                >
                  <span>{perk.text}</span>
                  <span className="text-lg">{perk.icon}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-16 bg-white">
            <h3 className="text-2xl font-bold mb-2 text-right text-gray-900">
              سجل بياناتك الآن
            </h3>
            <p className="text-gray-500 text-right mb-10">
              سيقوم فريق العمل بالتواصل معك لتأكيد الطلب
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="الاسم بالكامل"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#d4af37] outline-none text-gray-800"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full p-4 border rounded-xl outline-slate-600 text-right"
                  maxLength={11}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* هاتف بديل */}
              <div className="col-span-2">
                <input
                  name="otherPhone"
                  type="tel"
                  placeholder="رقم هاتف بديل (اختياري)"
                  className="w-full p-4 border rounded-xl outline-slate-600 text-right"
                  maxLength={11}
                />
                {errors.otherPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.otherPhone}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 text-white rounded-2xl font-bold text-xl shadow-lg transition-all ${loading ? 'bg-gray-400' : 'bg-slate-800 hover:bg-black active:scale-95'}`}
              >
                {loading ? 'جاري الإرسال...' : 'تأكيد الطلب الآن'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
