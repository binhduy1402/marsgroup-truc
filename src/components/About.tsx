import { COMPANY_STATS } from "../data";
import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { MapPin, Building2, Gift, Award, Sparkles } from "lucide-react";

// Chọn icon theo nội dung label — khớp với 4 chỉ số hiện có, có fallback an toàn
const getStatIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("tỉnh") || l.includes("thành")) return MapPin;
  if (l.includes("doanh nghiệp")) return Building2;
  if (l.includes("quà")) return Gift;
  if (l.includes("năm") || l.includes("kinh nghiệm")) return Award;
  return Sparkles;
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="reveal relative overflow-hidden bg-[#f8f5f0] py-20 sm:py-24"
    >
      {/* Đường pulse trang trí, lấy cảm hứng từ logo MARS — chỉ hiện ở desktop, mờ nhẹ phía sau */}
      <svg
        className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 opacity-[0.05] md:block"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 H340 L375 15 L410 105 L445 60 H1200"
          stroke="#7c142b"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
            <span className="h-px w-6 bg-[#7c142b]/40" />
            Năng Lực Thực Tế
            <span className="h-px w-6 bg-[#7c142b]/40" />
          </span>

          <h2 className="text-charcoal-text mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Fesgift Qua Những Con Số
          </h2>

          <p className="text-charcoal-text/70 mx-auto mt-4 max-w-2xl text-sm leading-relaxed">
            Những con số tiêu biểu phản ánh năng lực triển khai, kinh nghiệm
            vận hành và mức độ tin tưởng của khách hàng doanh nghiệp trên
            toàn quốc.
          </p>
        </div>

        {/* Panel thống nhất — số liệu ngăn bởi vạch mảnh, không phải các ô rời rạc */}
        <div className="reveal relative overflow-hidden rounded-[28px] border border-[#7c142b]/10 bg-white shadow-[0_30px_70px_rgba(124,20,43,0.08)]">
          {/* Viền gradient maroon - gold phía trên, điểm nhấn thương hiệu */}
          <div className="h-1 bg-gradient-to-r from-[#7c142b] via-[#d4af37] to-[#7c142b]" />

          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 lg:grid-cols-4 lg:divide-y-0">
            {COMPANY_STATS.map((item, index) => {
              const Icon = getStatIcon(item.label);
              return (
                <div
                  key={item.label}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className="reveal group relative px-4 py-8 text-center transition-colors duration-300 hover:bg-[#7c142b]/[0.03] sm:px-6 sm:py-10"
                >
                  <Icon
                    className="mx-auto mb-3 h-6 w-6 text-[#d4af37] transition-transform duration-300 group-hover:scale-110 sm:mb-4"
                    strokeWidth={1.75}
                  />

                  <div
                    className={`font-['Cormorant_Garamond'] font-bold leading-none tracking-tight text-[#7c142b] ${
                      item.value.length >= 9
                        ? "text-3xl xl:text-4xl"
                        : "text-4xl xl:text-5xl"
                    }`}
                  >
                    <CountUp value={item.value} start={startCount} />
                  </div>

                  <div className="text-charcoal-text/70 mt-3 text-xs font-medium leading-snug sm:text-sm">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}