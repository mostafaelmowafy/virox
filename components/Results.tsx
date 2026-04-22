import type { Metadata } from 'next';
import Image from 'next/image';
import { Info } from '@deemlol/next-icons';
import Button from './Button';

import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Clinical Results — VIROX GEL',
  description: 'النتائج السريرية لVIROX — إحصاءات وشهادات حقيقية',
};

const weeklyResults = [
  {
    period: 'الأسبوع الأول',
    length: 'من 3.5 سم الى 4.5 سم',
    duration: 'من 15 دقيقة الى 30 دقيقة',
  },
  {
    period: 'الأسبوع الثاني',
    length: 'من 6 الى 8 سم',
    duration: 'من 30 دقيقة الى 55 دقيقة',
  },
];

export default function Results() {
  return (
    <section className="py-8 bg-[#1a1918] text-white" dir="rtl">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-headline font-bold text-center text-white mb-4 w-fit mx-auto">
          لا تتردد في طلب المنتج{' '}
          <span className=" block mt-2 pb-1 text-black bg-gradient-to-tr from-amber-700 to-amber-300 rounded-sm">
            لإسعــــــــاد زوجتـــــــــك
          </span>
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-12 justify-center ">
          <div className="overflow-hidden rounded-2xl border border-yellow-900/40 shadow-xl">
            <table className="w-full text-right border-collapse">
              <thead className="bg-yellow-950/60">
                <tr>
                  <th className="p-5 text-amber-400 text-sm font-bold uppercase">
                    الفترة
                  </th>
                  <th className="p-5 text-amber-200/60 text-sm font-medium">
                    زيادة الطول
                  </th>
                  <th className="p-5 text-amber-200/60 text-sm font-medium">
                    مدة العلاقة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-900/30">
                {weeklyResults.map((row) => (
                  <tr
                    key={row.period}
                    className="hover:bg-yellow-900/20 transition-colors"
                  >
                    <td className="p-5 font-bold text-amber-400">
                      {row.period}
                    </td>
                    <td className="p-5 text-amber-100/80">{row.length}</td>
                    <td className="p-5 text-amber-100/80">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-950/40 border-r-4 border-amber-500 rounded-lg w-fit mx-auto">
          <p className="text-sm text-amber-200/70 flex items-center gap-2">
            <Info color="#f59e0b" strokeWidth={1.5} />
            تنوية: المنتج امن وصحي على مرضى القلب والضغط والسكر وبدون اي اثار
            جانبية
          </p>
        </div>

        <Button />
      </div>
    </section>
  );
}
