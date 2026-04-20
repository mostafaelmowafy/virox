import type { Metadata } from "next";
import Image from "next/image";
import { Info } from "@deemlol/next-icons";
import Button from "./Button";

import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Clinical Results — KREVA GEL",
  description: "النتائج السريرية لVIROX — إحصاءات وشهادات حقيقية",
};

const weeklyResults = [
  {
    period: "الأسبوع الأول",
    length: "من 3.5 سم الى 4.5 سم",
    duration: "من 15 دقيقة الى 30 دقيقة",
  },
  {
    period: "الأسبوع الثاني",
    length: "من 6 الى 8 سم",
    duration: "من 30 دقيقة الى 55 دقيقة",
  },
];

export default function Results() {
  return (
    <>
      <main className="pt-24">
        {/* Weekly results table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-headline font-bold text-center text-[#1c1b1b] mb-4">
              لا تتردد في طلب المنتج لإسعاد زوجتك
            </h2>
            <p className="text-center text-[#4d4635] mb-16">نتائج سريرية</p>
            <div className="flex md:flex-row flex-col items-center gap-12  ">
              <Image
                src="/product.jpeg"
                alt="نتائج سريرية لVIROX"
                width={200}
                height={200}
                className="mx-auto mb-12 rounded-lg shadow-lg"
              />
              <div className="overflow-hidden rounded-2xl border border-yellow-100 shadow-xl">
                <table className="w-full text-right border-collapse">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th className="p-5 text-[#d4af37] text-sm font-bold uppercase">
                        الفترة
                      </th>
                      <th className="p-5 text-[#4d4635] text-sm font-medium">
                        زيادة الطول
                      </th>
                      <th className="p-5 text-[#4d4635] text-sm font-medium">
                        مدة العلاقة
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-yellow-50">
                    {weeklyResults.map((row) => (
                      <tr
                        key={row.period}
                        className="hover:bg-yellow-50/40 transition-colors"
                      >
                        <td className="p-5 font-bold text-[#d4af37]">
                          {row.period}
                        </td>
                        <td className="p-5 text-[#1c1b1b]">{row.length}</td>
                        <td className="p-5 text-[#1c1b1b]">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-50 border-r-4 border-[#d4af37] rounded-lg">
              <svg
                className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-[#4d4635] flex items-center gap-2">
                <Info color="#FFFFFF" strokeWidth={1.5} />
                تنوية: المنتج امن وصحي على مرضى القلب والضغط والسكر وبدون اي
                اثار جانبية
              </p>
            </div>
            <Button />
          </div>
        </section>
      </main>
    </>
  );
}
