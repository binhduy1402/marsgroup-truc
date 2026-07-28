import logo from "../assets/logo_mars.png";
import { Globe, ShieldCheck, Mail, Phone, MapPin} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-charcoal-text pt-16 pb-8 text-left text-white/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 md:grid-cols-12">

          <div className="space-y-4 md:col-span-4">

            <a
              href="#"
              className="inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/20"
            >
              <img src={logo} alt="MARS Group" className="h-16 w-auto" />
            </a>

            <p className="max-w-sm text-xs font-light leading-relaxed text-white/55">
              Mars Group chuyên cung cấp giải pháp quà tặng doanh nghiệp,
              quà tặng sự kiện và giftset cao cấp mang đậm bản sắc Việt.
            </p>

            <div className="flex items-center gap-4 pt-1 text-[10px] text-white/45">
              <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-muted-gold" />
                Nâng tầm trải nghiệm quà tặng
              </span>
            </div>
          </div>

          <div className="md:col-span-3 md:border-l md:border-white/10 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              VỀ MARS GROUP
            </h4>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#our-story"
                  className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
                >
                  <span className="relative">
                    Câu chuyện thương hiệu
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
                >
                  <span className="relative">
                    Bộ sưu tập
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#capabilities"
                  className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
                >
                  <span className="relative">
                    Dự án tiêu biểu
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 md:border-l md:border-white/10 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              HỖ TRỢ
            </h4>

            <ul className="space-y-2.5 text-xs">
          <li>
            <a
              href="#contact"
              className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
            >
              <span className="relative">
                Liên hệ
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
            >
              <span className="relative">
                Chính sách
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
            >
              <span className="relative">
                Vận chuyển
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </li>
            </ul>
          </div>

          <div className="md:col-span-3 md:border-l md:border-white/10 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              LIÊN HỆ
            </h4>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-gold" />
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">
                    Email
                  </p>
                  <p className="text-white/80">tina@mars-vn.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-gold" />
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">
                    Website
                  </p>
                  <p className="text-white/80">www.mars-vn.com</p>
                  <p className="text-white/80">www.fesgift.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-gold" />
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">
                    Hotline
                  </p>
                  <p className="text-white/80">0903 731 769</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {currentYear} MarsGroup. All Rights Reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Globe className="h-3.5 w-3.5 text-muted-gold" />
              Tiếng Việt
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}