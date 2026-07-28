import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/hero01.avif";
import hero2 from "../assets/hero02.avif";
import hero3 from "../assets/hero03.jpg";
import hero4 from "../assets/hero04.jpg";

import zaloQR from "../assets/zalo-qr.png";

const heroImages = [hero1, hero2, hero3, hero4];

const avatarColors = ["#7c142b", "#a63a52", "#c9a227", "#5a3d40"];

interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({
  onDiscoverClick,
  onConsultClick,
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const handleAnimationIteration = () => {
      setPreviousImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    };

    element.addEventListener("animationiteration", handleAnimationIteration);

    return () => {
      element.removeEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    };
  }, [currentImage]);

  return (
    <section className="gold-pattern relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#faf7f2] to-white pt-24 pb-16 md:pt-28 md:pb-24">

      <div className="absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#7c142b]/8 blur-3xl pointer-events-none" />
      <div className="absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">

          <div className="lg:col-span-6">

            <div className="flex w-full items-center justify-between rounded-2xl border border-[#c49b47]/20 bg-gradient-to-r from-white to-[#faf8f4] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_25px_rgba(124,20,43,0.1)]">
              <div className="flex flex-1 flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8d8d]">
                  Hotline tư vấn
                </span>

                <a
                  href="tel:0903731769"
                  className="mt-1 text-[1.3rem] font-bold leading-none text-[#7c142b]"
                >
                  0903 731 769
                </a>
              </div>

              <a
                href="https://zalo.me/2446504417439174890"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-8 flex shrink-0 flex-col items-center gap-1"
              >
                <img
                  src={zaloQR}
                  alt="QR Zalo"
                  className="h-[52px] w-[52px] rounded-xl border border-[#c49b47]/20 bg-white p-1"
                />
              </a>
            </div>

            {/* Kicker line */}
            <div className="mt-7 flex items-center gap-2.5">
              <span className="h-px w-8 bg-gradient-to-r from-[#7c142b] to-[#d4af37]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7c142b]">
                Mars Group
              </span>
              <span className="text-[11px] text-[#c9a227]">•</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8d8d8d]">
                Quà tặng doanh nghiệp
              </span>
            </div>

            <h1 className="mt-3">
              <span className="block font-['Lora'] font-bold text-[#222] leading-[1] text-[2.35rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem]">
                Giải Pháp Quà Tặng
              </span>

              <span className="mt-3 block font-['Lora'] italic font-semibold text-[#7c142b] leading-[1.05] tracking-[-0.04em] text-[2.15rem] sm:text-[2.45rem] md:text-[3.1rem] lg:text-[4rem] drop-shadow-[0_2px_8px_rgba(124,20,43,0.15)]">
                Nhanh Trong Tư Vấn
                <br />
                Chắc Trong Thực Thi
              </span>
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white/70 backdrop-blur-sm px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Tư vấn miễn phí
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white/70 backdrop-blur-sm px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Thiết kế theo thương hiệu
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white/70 backdrop-blur-sm px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Sản xuất theo yêu cầu
              </span>

              <span className="flex items-center justify-center rounded-full border border-[#7c142b]/10 bg-white/70 backdrop-blur-sm px-2 py-2 text-center text-[11px] font-semibold text-[#7c142b] shadow-sm">
                ✓ Giao hàng toàn quốc
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <button
                onClick={onConsultClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#7c142b] px-8 py-3.5 text-sm font-semibold tracking-[0.2em] uppercase text-white shadow-[0_18px_45px_rgba(124,20,43,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(124,20,43,0.35)]"
              >
                Nhận Báo Giá Ngay
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>


          </div>

          <div className="lg:col-span-6 mt-10 lg:mt-0">
            <div ref={heroRef} className="relative hero-float">

              <div className="overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-white p-2 shadow-[0_35px_70px_-20px_rgba(124,20,43,0.35)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-gradient-to-t from-[#7c142b]/25 via-transparent to-white/15" />
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Hero ${index + 1}`}
                      className={`hero-image absolute inset-0 h-full w-full rounded-xl object-cover ${
                        currentImage === index
                          ? "hero-image--active z-10"
                          : "hero-image--inactive z-0"
                      }`}
                    />
                  ))}

                  <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
                    {heroImages.map((_, index) => (
                      <span
                        key={index}
                        className={
                          currentImage === index
                            ? "h-1.5 w-6 rounded-full bg-white transition-all duration-300"
                            : "h-1.5 w-1.5 rounded-full bg-white/50 transition-all duration-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Gold corner brackets - gallery frame effect */}
              <svg
                className="pointer-events-none absolute -left-2.5 -top-2.5 h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M2 14V2H14" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                className="pointer-events-none absolute -right-2.5 -top-2.5 h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M30 14V2H18" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                className="pointer-events-none absolute -left-2.5 -bottom-2.5 h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M2 18V30H14" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                className="pointer-events-none absolute -right-2.5 -bottom-2.5 h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M30 18V30H18" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}