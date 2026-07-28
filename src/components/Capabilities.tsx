import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import caseStudy01 from "../assets/casestudy01.jpg";

const stats = [
  { value: "10K+", label: "Bộ quà tặng" },
  { value: "35", label: "Ngày triển khai" },
  { value: "100%", label: "Đúng tiến độ" },
];

const highlights = [
  "Thiết kế riêng theo thương hiệu",
  "Sản xuất số lượng lớn",
  "Giao hàng toàn quốc",
  "Hoàn thành đúng tiến độ",
];

const processSteps = [
  "Tiếp nhận nhu cầu & tư vấn",
  "Thiết kế theo nhận diện thương hiệu",
  "Sản xuất & kiểm soát chất lượng",
  "Đóng gói & giao hàng",
];

const values = [
  "Giải pháp phù hợp nhu cầu",
  "Đồng bộ hình ảnh thương hiệu",
  "Chất lượng thành phẩm ổn định",
  "Hoàn thành đúng tiến độ cam kết",
];

export default function Capabilities() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="capabilities"
      className="reveal relative overflow-hidden bg-[#fffdf9] py-24"
    >
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#7c142b]/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d4af37]/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card mb-16 overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(124,20,43,0.12)]">
          <div className="grid lg:grid-cols-2">
            <div className="group relative min-h-[320px] overflow-hidden">
              <img
                src={caseStudy01}
                alt="Case Study"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-[#7c142b] shadow-md backdrop-blur-sm">
                Dự án nổi bật
              </div>
            </div>

            <div className="flex flex-col justify-center p-10">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
                CASE STUDY TIÊU BIỂU
              </span>

              <h3 className="mt-3 font-serif text-3xl font-bold text-[#1f1f1f]">
                Dự Án Quà Tặng Tết Doanh Nghiệp
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Triển khai hơn 10.000 bộ quà tặng được thiết kế riêng theo
                nhận diện thương hiệu cho chương trình tri ân khách hàng cuối
                năm.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#7c142b]/10 bg-[#7c142b]/[0.03] px-2 py-4 text-center"
                  >
                    <div className="font-['Lora'] text-2xl font-bold text-[#7c142b]">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[11px] leading-tight text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7c142b]/10 text-[9px] font-bold text-[#7c142b]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {!isExpanded && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="mt-8 w-full cursor-pointer border-t border-[#7c142b]/10 pt-4 text-center text-sm font-semibold tracking-[0.18em] text-[#7c142b] transition-all duration-300 hover:text-[#661126]"
                >
                  <span className="inline-flex items-center gap-2">
                    <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                    Khám phá dự án
                  </span>
                </button>
              )}
            </div>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-500 ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[#7c142b]/10 bg-[#fffdf9] px-6 py-4 sm:px-8 sm:py-5">
                <div className="mb-4 text-center transition-all duration-300">
                  <h4 className="font-serif text-[1.4rem] font-bold leading-tight text-[#1f1f1f] sm:text-[1.6rem]">
                    Từ yêu cầu đến thành phẩm
                  </h4>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex h-full flex-col rounded-xl border border-[#7c142b]/10 bg-[#fffdf9]/60 p-5 sm:p-6">
                    <h5 className="mb-5 text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7c142b]">
                      Quy trình
                    </h5>
                    <div className="relative">
                      <div className="absolute left-[13px] top-1 bottom-1 w-px bg-[#7c142b]/15" />
                      <ul className="space-y-5">
                        {processSteps.map((step, index) => (
                          <li key={step} className="relative flex items-start gap-3.5">
                            <span className="relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7c142b] text-[11px] font-bold text-white">
                              {index + 1}
                            </span>
                            <span className="mt-1 text-sm leading-6 text-gray-700">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex h-full flex-col rounded-xl border border-[#d4af37]/25 bg-gradient-to-br from-[#fffdf9] to-[#faf3e0]/40 p-5 sm:p-6">
                    <h5 className="mb-5 text-[13px] font-semibold tracking-[0.18em] uppercase text-[#7c142b]">
                      Giá trị mang lại
                    </h5>
                    <ul className="space-y-3.5 text-sm leading-7 text-gray-700">
                      {values.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-[0.15rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7c142b] text-[10px] font-bold text-white">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#7c142b]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="w-full cursor-pointer text-center text-sm font-semibold tracking-[0.18em] text-[#7c142b] transition-all duration-300 hover:text-[#661126]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ChevronUp className="h-4 w-4 transition-transform duration-300" />
                      Thu gọn
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}