import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/2e3e79a7-fb82-4c3e-933d-5043a4a461c0/files/9223dab1-9054-4027-b2dc-b017e973aac4.jpg"
            alt="Brain neural network"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-0" />
      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest opacity-70">
        Влияние на организм
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 max-w-3xl">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
          ПАВ воздействуют на мозг, меняя его химию навсегда.
        </p>
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          Психоактивные вещества захватывают систему вознаграждения мозга: уровень дофамина резко возрастает, 
          формируя непреодолимую тягу. С каждым употреблением мозг требует большей дозы — развивается толерантность. 
          Без вещества наступает ломка: тревога, боль, депрессия.
        </p>
      </div>
    </div>
  );
}