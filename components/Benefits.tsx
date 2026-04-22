import { Check } from '@deemlol/next-icons';
import Image from 'next/image';
import Button from './Button';

export default function Benefits() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-4 mt-4 gap-8">
        <ul className=" space-y-4 text-lg text-[#4d4635] font-bold">
          <li className="flex items-center gap-3 rounded-tr-3xl rounded-bl-3xl bg-slate-900 text-white p-2 font-bold">
            {' '}
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1 w-8"
            />
            ستحصل علي انتصاب قوي وصلب ليجعل شريكتك تصل لنشوتها اكثر من مرة
          </li>
          <li className="flex items-center gap-3 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-tr from-amber-700 to-amber-300 font-bold text-black p-2">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1 w-8"
            />{' '}
            يعطيك قضيب ضخم وسوف تصل الي درجة الفحولة التي يحبها كل النساء
          </li>
          <li className="flex items-center gap-3 rounded-tr-3xl rounded-bl-3xl bg-slate-900 text-white p-2">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1 w-8"
            />{' '}
            يقضي نهائياً على سرعة القذف المحرجة للرجال لتتمتع انت وشريكتك بعلاقة
            اطول
          </li>
          <li className="flex items-center gap-3 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-tr from-amber-700 to-amber-300 font-bold text-black p-2">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1 w-8"
            />{' '}
            حل نهائي وجذري للمشكلة وليس حل مؤقت كباقي المنتجات
          </li>
        </ul>
      </div>
      <Button />
    </>
  );
}
