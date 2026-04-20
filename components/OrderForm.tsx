"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const perks = [
  { icon: "🔒", text: "المنتج يصلك في سرية تامة منعاً لأي احراج" },
  { icon: "🚚", text: "الشحن مجاني لجميع المحافظات" },
  { icon: "💳", text: "الدفع عند استلام المنتج" },
  { icon: "↩️", text: "سياسة الأسترجاع ضمان 14 يوم" },
];

export default function OrderForm() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const product = { name: "VIROX" };
  const selectedOffer = { price: 420, label: "عرض العلبة الواحدة" };
  const packQuantity = 1;

  const convertArabicNumsToEnglish = (str) => {
    return str.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const phoneRegex =
      /^(?:(?:010|011|015)[0-9]{8}|(?:0127|0128|0120|0121)[0-9]{7})$/;

    const rawPhone = (formData.get("phone") || "").trim();
    const phone = convertArabicNumsToEnglish(rawPhone);

    if (!formData.get("name")) newErrors.name = "يجب إدخال الاسم بالكامل";
    if (!phone) {
      newErrors.phone = "يجب إدخال رقم الهاتف";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone =
        "❌ من فضلك أدخل رقم هاتف صحيح يبدأ بـ 010 - 011 - 015 - 0127 - 0128 - 0120 - 0121 ويتكون من 11 رقم";
    }

    const rawOtherPhone = (formData.get("otherPhone") || "").trim();

    const otherPhone = convertArabicNumsToEnglish(rawOtherPhone);

    if (otherPhone && !phoneRegex.test(otherPhone)) {
      newErrors.otherPhone =
        "❌ من فضلك أدخل رقم هاتف بديل صحيح يبدأ بـ 010 - 011 - 015 - 0127 - 0128 - 0120 - 0121 ويتكون من 11 رقم";
    }

    if (!formData.get("governorate"))
      newErrors.governorate = "يجب إدخال المحافظة";
    if (!formData.get("address"))
      newErrors.address = "يجب إدخال العنوان بالتفصيل";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formData = new FormData(formElement);
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const orderData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      otherPhone: formData.get("otherPhone") || "لا يوجد",
      governorate: formData.get("governorate"),
      address: formData.get("address"),
      details: `${product.name} - ${selectedOffer.label}`,
      total: selectedOffer.price * packQuantity,
      timestamp: new Date().toLocaleString("ar-EG"),
    };

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxM8FvezFArGbVsHxxAOfpP1dH0A7cnSNtXeIh7MPsDanhZ71zLZn1JTEQYPIhNhq84/exec";

      // إرسال البيانات لجوجل شيت
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // جوجل سكريبت يتطلب no-cors في أغلب الأحيان
        body: JSON.stringify(orderData),
      });

      // --- إصلاح كود الفيسبوك بكسل ---
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Purchase", {
          value: selectedOffer.price * packQuantity,
          currency: "EGP",
          content_name: product.name,
          content_category: "Health",
          num_items: packQuantity,
        });
        console.log("Pixel Purchase Tracked");
      }

      toast.success("تم إرسال طلبك بنجاح!");

      router.push("/ThankYouPage");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("❌ حدث خطأ، يرجى المحاولة مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-24 bg-[#1a1918] relative overflow-hidden">
      {/* الخلفية والتصميم */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#d4af37 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 bg-[#252423] rounded-3xl overflow-hidden shadow-2xl border border-yellow-900/40">
          {/* الجانب الأيسر: عرض المنتج */}
          <div className="p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-[#252423] to-[#111]">
            <div className="relative w-full aspect-square mb-8 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/lion-product.png"
                alt="Product Image"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
              />
            </div>

            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-yellow-900/30 text-[#d4af37] border border-yellow-700/40 rounded-full text-sm font-bold mb-4">
                عرض حصري لفترة محدودة
              </span>
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl font-bold text-[#d4af37]">
                  {selectedOffer.price} ج.م
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

          {/* الجانب الأيمن: الفورم */}
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

              <div className="col-span-2">
                <input
                  name="phone"
                  type="tel"
                  placeholder="رقم الهاتف (عليه واتساب للتأكيد)"
                  className="w-full p-4 border rounded-xl outline-slate-600 text-right"
                  maxLength={11}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  name="otherPhone"
                  type="tel"
                  placeholder="رقم هاتف بديل (لسهولة التأكيد اختياري)"
                  className="w-full p-4 border rounded-xl outline-slate-600 text-right"
                  maxLength={11}
                />
                {errors.otherPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.otherPhone}
                  </p>
                )}
              </div>
              <div>
                <select
                  name="governorate"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#d4af37] outline-none bg-white text-gray-800"
                >
                  <option value="">اختر المحافظة</option>
                  {[
                    "القاهرة",
                    "الجيزة",
                    "الإسكندرية",
                    "الدقهلية",
                    "الغربية",
                  ].map((gov) => (
                    <option key={gov} value={gov}>
                      {gov}
                    </option>
                  ))}
                </select>
                {errors.governorate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.governorate}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  name="address"
                  placeholder="العنوان بالتفصيل"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#d4af37] outline-none text-gray-800 h-24"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 text-white rounded-2xl font-bold text-xl shadow-lg transition-all ${loading ? "bg-gray-400" : "bg-slate-800 hover:bg-black active:scale-95"}`}
              >
                {loading ? "جاري الإرسال..." : "تأكيد الطلب الآن"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
