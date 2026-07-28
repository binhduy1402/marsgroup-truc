import { useEffect, useRef, useState } from "react";
import { COLLECTIONS } from "../data";
import { Collection } from "../types";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  CalendarDays,
  Crown,
  UsersRound,
  MoveHorizontal,
} from "lucide-react";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

const STACK_DEPTH = 2;
const SWIPE_THRESHOLD = 80;
const DRAG_DEADZONE = 6; // px kéo tối thiểu trước khi xác định hướng, tránh giật khi vừa chạm

export default function Collections({ onSelectCollection }: CollectionsProps) {
  const total = COLLECTIONS.length;

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startXRef = useRef(0);

  const current = COLLECTIONS[index];

  const getIcon = (icon?: string) => {
    switch (icon) {
      case "Users":
        return <Users className="h-5 w-5" />;
      case "CalendarDays":
        return <CalendarDays className="h-5 w-5" />;
      case "Crown":
        return <Crown className="h-5 w-5" />;
      case "UsersRound":
        return <UsersRound className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  // Khoảng cách "về phía trước" (theo mảng, dùng cho stack lúc đứng yên)
  const getForwardPos = (i: number) => (i - index + total) % total;

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + total) % total);
    setDragX(0);
  };

  const goNext = () => go(1);
  const goPrev = () => go(-1);

  // Hướng đang kéo: "left" = tiến tới card kế tiếp, "right" = lùi về card trước đó
  const dragDir: "left" | "right" | null =
    dragging && Math.abs(dragX) > DRAG_DEADZONE
      ? dragX < 0
        ? "left"
        : "right"
      : null;

  // Card sẽ thực sự hiện ra nếu thả tay ngay lúc này, theo đúng hướng đang kéo
  const revealIndex =
    dragDir === "left"
      ? (index + 1) % total
      : dragDir === "right"
      ? (index - 1 + total) % total
      : null;

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: PointerEvent) => {
      setDragX(e.clientX - startXRef.current);
    };

    const handleUp = (e: PointerEvent) => {
      const finalDragX = e.clientX - startXRef.current;
      setDragging(false);

      if (finalDragX <= -SWIPE_THRESHOLD) {
        go(1);
      } else if (finalDragX >= SWIPE_THRESHOLD) {
        go(-1);
      } else {
        setDragX(0);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    startXRef.current = e.clientX;
    setDragging(true);
  };

  // Style card đứng yên trong ngăn xếp (chỉ dùng khi KHÔNG kéo)
  const getIdleStackStyle = (pos: number): React.CSSProperties => {
    const capped = Math.min(pos, STACK_DEPTH + 1);
    const translateX = capped * 16;
    const translateY = capped * 10;
    const rotate = capped * 3.5;
    const scale = 1 - capped * 0.035;
    const opacity = pos <= STACK_DEPTH ? 1 - pos * 0.18 : 0;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      zIndex: total - pos,
      boxShadow:
        pos === 0
          ? "0 30px 70px rgba(124,20,43,0.12)"
          : "0 15px 35px rgba(15,15,15,0.06)",
      transition:
        "transform 400ms ease-out, opacity 400ms ease-out, box-shadow 400ms ease-out",
    };
  };

  // Style card lộ ra phía sau đúng theo hướng kéo hiện tại
  const revealStyle: React.CSSProperties = {
    transform: "translateX(16px) translateY(10px) rotate(3.5deg) scale(0.965)",
    opacity: 1,
    zIndex: total - 1,
    boxShadow: "0 20px 45px rgba(15,15,15,0.08)",
    transition: "opacity 200ms ease-out",
  };

  const hiddenStyle: React.CSSProperties = {
    transform: "translateX(16px) translateY(10px) rotate(3.5deg) scale(0.95)",
    opacity: 0,
    zIndex: 0,
    boxShadow: "0 15px 35px rgba(15,15,15,0.06)",
    transition: "opacity 200ms ease-out",
  };

  const renderNav = () => (
    <>
      <button
        onClick={goPrev}
        aria-label="Bộ sưu tập trước"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b] transition-colors hover:bg-[#7c142b] hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        onClick={goNext}
        aria-label="Bộ sưu tập tiếp theo"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b] transition-colors hover:bg-[#7c142b] hover:text-white"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
      <span className="text-xs font-semibold tracking-widest text-gray-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </>
  );

  return (
    <section id="collections" className="luxury-section reveal bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
              4 NHÓM SẢN PHẨM
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2c2c2c] sm:text-4xl">
              Giải Pháp Quà Tặng Theo Từng Mục Tiêu
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:gap-10 md:grid-cols-2 md:items-center">
          <div className="order-3 flex flex-col md:order-1">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">
                {getIcon(current.icon)}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2c2c2c]">
                  {current.title}
                </h3>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#A8741A]">
                  {current.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              {current.description}
            </p>

            {current.highlights && (
              <ul className="mt-5 space-y-2.5">
                {current.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c142b]/10 text-[#7c142b]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => onSelectCollection(current)}
              className="group mt-8 flex w-fit flex-col items-start gap-1.5"
            >
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#7c142b] uppercase transition-colors duration-300 group-hover:text-[#A8741A] group-active:text-[#A8741A]">
                Khám Phá Bộ Sưu Tập
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
              </span>
              <span className="h-[1.5px] w-8 bg-[#7c142b] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[#d4af37] group-active:w-full group-active:bg-[#d4af37]" />
            </button>

            <div className="mt-10 hidden items-center gap-4 md:flex">
              {renderNav()}
            </div>
          </div>

          <div className="order-2 flex items-center gap-4 md:hidden">
            {renderNav()}
          </div>

          <div className="order-1 relative flex justify-center pr-10 pb-6 md:order-2 md:justify-end md:pr-12">
            <div className="absolute -top-8 right-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
              Trượt để xem
              <MoveHorizontal className="h-3.5 w-3.5" />
            </div>

            <div className="relative h-[360px] w-full max-w-[280px] select-none overflow-visible">
              {COLLECTIONS.map((collection, i) => {
                const isFront = i === index;
                const isDraggingFront = isFront && dragging;
                const isRevealCard = dragging && i === revealIndex;

                let style: React.CSSProperties;

                if (isDraggingFront) {
                  style = {
                    transform: `translateX(${dragX}px) rotate(${dragX / 24}deg)`,
                    opacity: 1,
                    zIndex: total + 1,
                    boxShadow: "0 30px 70px rgba(124,20,43,0.12)",
                    transition: "none",
                  };
                } else if (isFront) {
                  style = getIdleStackStyle(0);
                } else if (dragging) {
                  // Trong lúc kéo: chỉ card đúng-hướng mới lộ ra, các card khác ẩn hẳn
                  style = isRevealCard ? revealStyle : hiddenStyle;
                } else {
                  // Đứng yên: hiện ngăn xếp các card kế tiếp như bình thường
                  const pos = getForwardPos(i);
                  style = getIdleStackStyle(pos);
                }

                return (
                  <div
                    key={collection.id ?? i}
                    onPointerDown={isFront ? handlePointerDown : undefined}
                    className={`absolute inset-0 overflow-hidden overscroll-contain rounded-[28px] border border-gray-100 bg-white ${
                      isFront
                        ? "cursor-grab touch-none active:cursor-grabbing"
                        : "pointer-events-none"
                    }`}
                    style={{
                      ...style,
                      touchAction: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="h-full w-full object-cover"
                      draggable={false}
                      referrerPolicy="no-referrer"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {isFront && collection.badge && (
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-[#7c142b] shadow-sm">
                          {collection.badge}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}