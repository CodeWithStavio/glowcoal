"use client";

export default function VideoShowcase() {
  return (
    <section className="relative h-screen max-h-[900px] min-h-[600px] bg-black overflow-hidden">
      {/* Full-screen video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/glowcoal-promo.mp4" type="video/mp4" />
      </video>

      {/* Cinematic letterbox effect */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Minimal corner branding */}
      <div className="absolute bottom-8 right-8 text-right">
        <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Glow Coal</p>
        <p className="text-white/60 text-sm">صناعة سورية</p>
      </div>

      {/* Subtle side accent line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-orange/50 to-transparent" />
    </section>
  );
}
