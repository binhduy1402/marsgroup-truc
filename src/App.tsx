import { useState, useEffect, useRef } from "react";

import LuxuryBackground from "./components/LuxuryBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Collections from "./components/Collections";
import Capabilities from "./components/Capabilities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import { Collection } from "./types";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { stories } from "./data/stories";

export default function App() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [prefilledProduct, setPrefilledProduct] = useState("");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentStoryImage, setCurrentStoryImage] = useState(0);
  const [storyImageLoaded, setStoryImageLoaded] = useState(false);
  const touchStartX = useRef(0);

  const story = stories.find((s) => s.id === selectedStory) ?? null;
  const totalSlides =
    (story?.images.length ?? 0) +
    (story?.videos?.length ?? 0);
  useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

useEffect(() => {
  if (selectedStory) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedStory]);

const handleCollectionInquire = (title: string) => {
  setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
  setSelectedCollection(null);
  scrollToContact();
};

const closeStory = () => {
  setSelectedStory(null);
  setCurrentStoryImage(0);
};

const nextStoryImage = () => {
  if (!story) return;

  setCurrentStoryImage((prev) =>
    (prev + 1) % totalSlides
  );
};

const prevStoryImage = () => {
  if (!story) return;

  setCurrentStoryImage((prev) =>
    prev === 0
      ? totalSlides - 1
      : prev - 1
  );
};

const changeStoryImage = (index: number) => {
  if (index === currentStoryImage) return;
  setCurrentStoryImage(index);
};

const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
  const distance =
    touchStartX.current - e.changedTouches[0].clientX;

  if (Math.abs(distance) < 50) return;

  if (distance > 0) {
    nextStoryImage();
  } else {
    prevStoryImage();
  }
};

useEffect(() => {
  if (!story || totalSlides <= 1) return;

  // Nếu đang phát video thì không dùng timer
  if (story.videos && currentStoryImage > 0) return;

  const timer = setTimeout(() => {
    nextStoryImage();
  }, 2000);

  return () => clearTimeout(timer);
}, [story, totalSlides, currentStoryImage]);

useEffect(() => {
  setStoryImageLoaded(false);
  const timer = window.setTimeout(() => {
    setStoryImageLoaded(true);
  }, 20);

  return () => window.clearTimeout(timer);
}, [currentStoryImage]);

  return (
    <div className="relative min-h-screen bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">
      <LuxuryBackground />
      <Navbar onInquireClick={scrollToContact} />
      <Hero
        onDiscoverClick={() => {
          const section = document.getElementById("collections");
          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        onConsultClick={scrollToContact}
      />

      <Collections onSelectCollection={setSelectedCollection} />

      <About />

      <Philosophy
        onOpenStory={(storyId) => {
          setSelectedStory(storyId);
          setCurrentStoryImage(0);
        }}
      />

      <Capabilities />

      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      <Footer />
      <BackToTop />
      {/* Collection Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/70 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-3xl
              overflow-hidden
              rounded-2xl
              border
              border-[#7c142b]/10
              bg-white
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedCollection(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                rounded-full
                bg-white/90
                p-2
                transition-colors
                hover:bg-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    mb-3
                    inline-block
                    rounded-full
                    bg-[#7c142b]
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Bộ Sưu Tập Nổi Bật
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 p-8">
              <p className="text-sm leading-relaxed text-charcoal-text/75">
                {selectedCollection.description}
              </p>

              {selectedCollection.highlights && (
                <div>
                  <h4
                    className="
                      mb-4
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#7c142b]
                    "
                  >
                    Điểm Nổi Bật
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCollection.highlights.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-charcoal-text/80
                          "
                        >
                          <Check className="h-4 w-4 text-[#7c142b]" />
                          {item}
                        </div>
                      )
                    )}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-charcoal-text/80
                      "
                    >
                      <ShieldCheck className="h-4 w-4 text-[#7c142b]" />
                      Kiểm soát chất lượng đầu ra
                    </div>
                  </div>
                </div>
              )}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#7c142b]/10
                  pt-6
                  sm:flex-row
                "
              >
                <button
                  onClick={() =>
                    handleCollectionInquire(
                      selectedCollection.title
                    )
                  }
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary-brand
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Yêu Cầu Báo Giá

                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={selectedCollection.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#7c142b]/15
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#7c142b]
                    transition-all
                    hover:bg-[#7c142b]/5
                  "
                >
                  Xem Trang Sản Phẩm
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Story Modal */}
      {story && (
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 p-4 sm:p-6"
          onClick={closeStory}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-2xl items-center justify-center"
          >
            <div className="w-full overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
              <div className="px-5 pb-6 pt-7 sm:px-7 sm:pb-7 sm:pt-8">
                <div className="mb-5 text-center">
                  <h2 className="text-[2rem] font-bold leading-tight text-[#7c142b] sm:text-[2.15rem]">
                    {story.title}
                  </h2>
                  <div className="mx-auto mt-4 h-px w-[70%] bg-[#7c142b]/10" />
                </div>

                {totalSlides > 0 ? (
                  <>
                    <div
                      style={{
                        touchAction: "pan-y",
                        overscrollBehavior: "contain",
                      }}
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      className="relative -mx-2 aspect-[4/3] overflow-hidden rounded-xl bg-[#f7f5f2] sm:-mx-3"
                    >
                      {story.videos && story.videos.length > 0 ? (
                        currentStoryImage === 0 ? (
                          <img
                            src={story.images[0]}
                          alt={story.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        ) : (
                        <video
                          key={currentStoryImage}
                          src={story.videos[currentStoryImage - 1]}
                          className="absolute inset-0 h-full w-full object-cover"
                          autoPlay
                          muted
                          playsInline
                          preload="auto"
                          disablePictureInPicture
                          controlsList="nodownload nofullscreen noremoteplayback"
                          style={{ pointerEvents: "none" }}
                          onEnded={nextStoryImage}
                        />
                      )
                    ) : (
                      <img
                        src={story.images[currentStoryImage]}
                        alt={story.title}
                        className={`absolute inset-0 h-full w-full ${
                          story.imageFit === "contain"
                            ? "object-contain bg-[#f7f5f2]"
                            : "object-cover"
                        }`}
                      />
                    )}
                    </div>

                    <div className="mt-3 flex justify-center gap-2 py-1">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => changeStoryImage(index)}
                          className={`rounded-full transition-all duration-300 ${
                            currentStoryImage === index
                              ? "h-2 w-8 bg-[#7c142b] shadow-[0_0_0_4px_rgba(124,20,43,0.12)]"
                              : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex h-[320px] items-center justify-center rounded-[22px] bg-[#f7f5f2] sm:h-[390px] md:h-[420px]">
                    <span className="text-gray-400">Hình sẽ cập nhật</span>
                  </div>
                )}

                <div className="mt-4 px-3 sm:px-5">
                  <p className="text-[15px] leading-8 text-[#555] sm:text-[16px]">
                    {story.description}
                  </p>
                </div>

                <div className="mt-4 h-px w-full bg-[#7c142b]/10" />

                <div className="mt-4 flex justify-center">
                  <button
                    onClick={closeStory}
                    className="w-[50%] rounded-xl bg-[#7c142b] py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#661126] active:scale-[0.99]"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
