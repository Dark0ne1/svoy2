import React from "react";
import { ArrowUp, Instagram, Send, MessageCircle, Twitter } from "lucide-react";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-svh w-full snap-start snap-always bg-oasis-primary flex flex-col justify-between py-12 px-8 relative overflow-hidden border-t border-white/5">
      {/* Top Gradient for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center space-y-10">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <div className="inline-block border border-white/20 p-4 px-6 mb-2">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
              S<span className="text-red-500">V</span>OY{" "}
              <span className="text-oasis-accent">FITNESS & SPA</span>
            </h2>
          </div>
          <p className="text-xl font-medium text-white max-w-sm leading-tight">
            Уникальное пространство <br />
            для вашего здороья
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[Instagram, Send, MessageCircle].map((Icon, i) => (
            <button
              key={i}
              className="w-12 h-12 rounded-full bg-oasis-secondary flex items-center justify-center text-gray-400 hover:bg-oasis-accent hover:text-white transition-all duration-300"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-8 pt-4 border-t border-white/5">
          {/* Hours */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Мы открыты
            </h3>
            <div className="flex justify-between max-w-xs text-sm text-gray-200">
              <span>Пнд – Вск</span>
              <span>10:00 - 22:00</span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Адрес
            </h3>
            <p className="text-sm text-gray-200">
              Воронеж, ул. Космонавтов, 17Б
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              Контакты
            </h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between max-w-xs">
                <span className="text-gray-400">Fitness</span>
                <span className="text-white">+7 (473) 222-22-22</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-gray-400">SPA</span>
                <span className="text-white">+7 (473) 333-33-33</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 flex flex-col gap-6">
        {/* Back to Top */}
        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 hover:text-oasis-accent transition-colors"
          >
            НАВЕРХ
            <div className="p-3 bg-oasis-secondary group-hover:bg-oasis-accent group-hover:text-white transition-all rounded-full">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-[10px] text-gray-600 border-t border-white/5 pt-6">
          <div className="flex flex-col gap-2">
            <p>© 2026 SVOY FITNESS & SPA</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Правила клуба
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
