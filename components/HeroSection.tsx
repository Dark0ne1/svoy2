import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import videoBG from "../assets/video.mp4";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-svh w-full snap-start snap-always overflow-hidden bg-oasis-primary"
    >
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          src={videoBG}
          className="w-full h-full object-cover opacity-60 grayscale-[50%]"
          alt="Dark Gym Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oasis-primary via-oasis-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-oasis-accent tracking-[0.2em] text-sm font-bold uppercase mb-2">
            Добро пожаловать в SVOY
          </h2>
          <h1 className="text-5xl font-extrabold text-oasis-text leading-[0.95] tracking-tight mb-6">
            FITNESS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oasis-accent to-oasis-text">
              & SPA <br />
            </span>
          </h1>

          <p className="text-gray-400 text-sm max-w-[80%] mb-8 leading-relaxed">
            Премиальный фитнес и спа — расположенный в сердце города.
          </p>

          <button className="flex items-center gap-3 bg-oasis-accent text-oasis-text px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300 w-full justify-center sm:w-auto">
            Узнать цену карты
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
