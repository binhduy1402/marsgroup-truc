import { stories } from "../data/stories";

interface PhilosophyProps {
  onOpenStory: (storyId: number) => void;
}

export default function Philosophy({ onOpenStory }: PhilosophyProps) {
  return (
    <section id="philosophy" className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#7c142b]/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-4xl mx-auto text-center reveal delay-150">
          <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#7c142b]">
            <span className="h-px w-6 bg-[#7c142b]/50" />
            CÂU CHUYỆN THƯƠNG HIỆU
            <span className="h-px w-6 bg-[#7c142b]/50" />
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] text-[#2c2c2c]">
            Mỗi Món Quà
            <span className="block bg-gradient-to-r from-[#7c142b] to-[#c9a227] bg-clip-text text-transparent">
              Là Một Trải Nghiệm
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-charcoal-text/70">
            Mars Group không chỉ cung cấp quà tặng doanh nghiệp. Chúng tôi
            giúp doanh nghiệp truyền tải giá trị thương hiệu thông qua những
            sản phẩm được thiết kế riêng, chỉn chu và phù hợp với từng đối
            tượng nhận quà.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 reveal delay-300">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onOpenStory(story.id)}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#7c142b]/30"
            >
              {/* Ảnh + overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={story.cardImage}
                  alt={story.cardTitle}
                  className="h-full w-full object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              </div>

              {/* Nội dung */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="min-h-[4.5rem] text-lg sm:text-xl font-bold leading-snug text-[#7c142b] line-clamp-3">
                  {story.cardTitle}
                </h3>

                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-sm text-gray-500 transition-transform duration-300 group-hover:translate-x-1">
                    Xem câu chuyện
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c142b]/5 text-[#7c142b] transition-all duration-300 group-hover:bg-[#7c142b] group-hover:text-white group-hover:translate-x-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}