import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { FacebookPixel } from '@/components/FacebookPixel';
import { Suspense } from 'react';

// next/font loads fonts with zero layout shift, hosted on Vercel CDN

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VIROX GEL - استعيد ثقتك وفحولتك',
  description:
    'VIROX - الحل الطبي المتطور لعلاج ضعف الانتصاب وتعزيز الأداء الجنسي. مرخص من وزارة الصحة. شحن مجاني لجميع المحافظات. الدفع عند الاستلام.',
  keywords: ['VIROX', 'ضعف الانتصاب', 'علاج طبي', 'VIROX gel'],
  openGraph: {
    title: 'VIROX GEL - استعيد ثقتك وفحولتك',
    description: 'الحل الطبي المتطور لعلاج ضعف الانتصاب',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="bg-white text-[#1c1b1b] font-body selection:bg-yellow-100 antialiased">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
