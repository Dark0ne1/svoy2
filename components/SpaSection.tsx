import React from "react";
import { motion } from "framer-motion";
import { Wind, Waves } from "lucide-react";

export const SpaSection: React.FC = () => {
  return (
    <section
      id="spa"
      className="relative h-svh w-full snap-start snap-always overflow-hidden bg-oasis-primary"
    >
      {/* Background with slow zoom effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: [1, 1.15] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <img
          src="./assets/spa.avif"
          className="w-full h-full object-cover opacity-60 grayscale-[40%]"
          alt="Spa Interior"
        />
      </motion.div>

      <div className="absolute inset-0 bg-oasis-primary/40 backdrop-blur-[2px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm bg-oasis-secondary/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] text-center shadow-2xl"
        >
          <div className="flex justify-center gap-6 mb-6 text-oasis-accent">
            <Waves size={50} />
          </div>

          <h2 className="text-4xl font-light text-oasis-text mb-2 font-serif italic">
            SPA
          </h2>
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">
            Отдых душой и телом
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Погрузитесь в мир релаксации с нашими профессиональными услугами.
            Наслаждайтесь отдыхом и заботой о себе в нашем уютном спа-центре.
          </p>

          <button className="text-oasis-text border-b border-oasis-accent pb-1 text-sm tracking-widest hover:text-oasis-accent transition-colors">
            Показать все услуги
          </button>
        </motion.div>
      </div>
    </section>
  );
};
