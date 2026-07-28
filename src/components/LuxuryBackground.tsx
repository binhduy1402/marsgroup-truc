export default function LuxuryBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#f8f4ee]" />

      {/* Gold Glow */}
      <div
        className="
          fixed
          top-[-200px]
          right-[-180px]
          -z-40
          h-[520px]
          w-[520px]
          rounded-full
          blur-[150px]
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,.12), transparent 70%)",
        }}
      />

      {/* Burgundy Glow */}
      <div
        className="
          fixed
          bottom-[-250px]
          left-[-180px]
          -z-40
          h-[620px]
          w-[620px]
          rounded-full
          blur-[80px]
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,20,43,.08), transparent 70%)",
        }}
      />
    </>
  );
}
