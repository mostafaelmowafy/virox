import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen pt-24 flex items-center justify-center charcoal-bg">
        <div className="text-center px-6">
          <div className="text-8xl font-headline font-extrabold text-[#d4af37] mb-4">
            404
          </div>
          <h1 className="text-3xl font-headline font-bold text-black mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-black/50 mb-10">
            الصفحة التي تبحث عنها غير متاحة أو تم نقلها.
          </p>
          <Link
            href="/"
            className="luxury-gradient text-black px-10 py-4 rounded-lg font-bold hover:scale-105 transition-transform inline-block"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    </>
  );
}
