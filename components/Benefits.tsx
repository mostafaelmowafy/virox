import { Check } from "@deemlol/next-icons";
import Image from "next/image";
import Button from "./Button";

export default function Benefits() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-12 py-16 gap-8">
        <ul className="mt-8 space-y-4 text-lg text-[#4d4635]">
          <li className="flex items-center gap-3 bg-amber-400/45 p-4 rounded-lg">
            {" "}
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1"
            />
            ستحصل علي انتصاب قوي وصلب ليجعل شريكتك تصل لنشوتها اكثر من مرة
          </li>
          <li className="flex items-center gap-3 bg-amber-400/45 p-4 rounded-lg">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1"
            />{" "}
            يعطيك قضيب ضخم وسوف تصل الي درجة الفحولة التي يحبها كل النساء
          </li>
          <li className="flex items-center gap-3 bg-amber-400/45 p-4 rounded-lg">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1"
            />{" "}
            يقضي نهائياً على سرعة القذف المحرجة للرجال لتتمتع انت وشريكتك بعلاقة
            اطول
          </li>
          <li className="flex items-center gap-3 bg-amber-400/45 p-4 rounded-lg">
            <Check
              color="#f59e0b"
              strokeWidth={1.5}
              className="bg-gray-100 rounded-full p-1"
            />{" "}
            حل نهائي وجذري للمشكلة وليس حل مؤقت كباقي المنتجات
          </li>
        </ul>
        <Image
          src="/product.jpeg"
          alt="KREVA GEL - فوائد"
          width={300}
          height={100}
          className="rounded-lg shadow-lg object-cover  "
        />
      </div>
      <Button />
    </>
  );
}
