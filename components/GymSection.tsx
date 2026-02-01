import React, { useRef } from "react";
import { motion } from "framer-motion";

// 1. ИМПОРТИРУЕМ КАРТИНКИ
// (Убедитесь, что пути правильные: ../assets/ если папка выше, или ./assets/ если рядом)
import gymImg from "../assets/zal.webp";
import crossfitImg from "../assets/crossfit.avif";
import groupImg from "../assets/group.webp";
import spaImg from "../assets/spa.avif";

// 2. ИСПОЛЬЗУЕМ ПЕРЕМЕННЫЕ В МАССИВЕ
const equipmentImages = [
  {
    id: 1,
    src: gymImg, // Переменная вместо строки
    title: "Тренажерный зал",
  },
  {
    id: 2,
    src: crossfitImg, // Переменная вместо строки
    title: "Зона кроссфита",
  },
  {
    id: 3,
    src: groupImg, // Переменная вместо строки
    title: "Групповые занятия",
  },
  {
    id: 4,
    src: spaImg, // Переменная вместо строки
    title: "Body & Soul Spa",
  },
];

export const GymSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="gym"
      className="h-svh w-full snap-start snap-always bg-oasis-secondary flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full p-8 z-10 bg-gradient-to-b from-oasis-secondary to-transparent">
        {/* Поправил опечатку: было "Напрвления", стало "Направления" */}
        <h2 className="text-3xl font-bold text-oasis-text mb-1">Направления</h2>
        <p className="text-oasis-accent text-sm tracking-widest uppercase">
          Все в одном месте
        </p>
      </div>

      <div
        ref={carouselRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={carouselRef}
          className="flex gap-4 items-center h-[60svh] w-max px-8"
        >
          {equipmentImages.map((item) => (
            <motion.div
              key={item.id}
              className="relative min-w-[280px] h-[450px] rounded-3xl overflow-hidden shrink-0 group shadow-2xl shadow-black/50"
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={item.src} // Здесь подставится путь, сгенерированный сборщиком
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.6] grayscale-[30%] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <div className="h-0.5 w-12 bg-oasis-accent mt-2"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-32 left-8 text-white/20 text-xs flex items-center gap-2">
        <div className="w-12 h-px bg-white/10"></div>
        <span>Листайте вправо </span>
      </div>
    </section>
  );
};
