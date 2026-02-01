import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import mapAsset from "../assets/map.avif";

export const MapSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="h-svh w-full snap-start snap-always bg-oasis-primary flex flex-col relative overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-8 z-20 bg-gradient-to-b from-oasis-primary to-transparent pointer-events-none">
        <h2 className="text-3xl font-bold text-oasis-text mb-1">
          СДЕСЬ БУДЕТ ИНТЕРАКТИВНАЯ КАРТА
        </h2>
      </div>

      {/* Map Background - Stylized Dark Map */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={mapAsset}
          alt="Map Background"
          className="w-full h-full object-cover opacity-50 grayscale invert"
        />
        <div className="absolute inset-0 bg-oasis-primary/30 mix-blend-multiply" />

        {/* Animated Pulse on Location */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-oasis-accent opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-oasis-accent border-2 border-white"></span>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-32 px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-oasis-secondary/95 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-oasis-text">
                S<span className="text-red-500">V</span>OY
              </h3>
            </div>
            <div className="bg-oasis-accent/10 p-3 rounded-full border border-oasis-accent/20">
              <MapPin className="text-oasis-accent" size={24} />
            </div>
          </div>

          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-oasis-accent/10 transition-colors">
                <Navigation size={18} className="text-oasis-accent" />
              </div>
              <span className="text-sm font-medium">
                Воронеж, ул. Космонавтов, 17Б
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-oasis-accent/10 transition-colors">
                <Clock size={18} className="text-oasis-accent" />
              </div>
              <span className="text-sm font-medium">Пнд-Вск: 10:00-22:00</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-oasis-accent/10 transition-colors">
                <Phone size={18} className="text-oasis-accent" />
              </div>
              <span className="text-sm font-medium">+7 (473) 200-00-00</span>
            </div>
          </div>

          <button className="w-full bg-oasis-accent text-oasis-text font-bold py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
            Проложить маршрут
            <Navigation size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
