import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/2e3e79a7-fb82-4c3e-933d-5043a4a461c0/files/91c8f039-d971-42c9-bd5b-7e4342e5e250.jpg"
          alt="Dramatic landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4 opacity-70">Школьный проект · Профилактика зависимостей</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ЛОВУШКА<br/>ПАВ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Причины, последствия и влияние психоактивных веществ на организм человека. Знание — первый шаг к защите.
        </p>
      </div>
    </div>
  );
}