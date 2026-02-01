import React from "react";
import { Home, Dumbbell, Droplets, MapPin } from "lucide-react";
import { NavItem } from "../types";

interface NavigationDockProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const navItems: NavItem[] = [
    { id: "hero", label: "Главная", icon: Home },
    { id: "gym", label: "Fitness", icon: Dumbbell },
    { id: "spa", label: "Spa", icon: Droplets },
    { id: "contact", label: "Контакты", icon: MapPin },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <nav className="flex justify-between items-center px-6 py-4 rounded-3xl bg-oasis-glass backdrop-blur-xl border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex flex-col items-center gap-1 transition-all duration-300"
            >
              <div
                className={`p-2 rounded-full transition-all duration-300 ${isActive ? "bg-oasis-accent text-white" : "text-gray-500 group-hover:text-oasis-text"}`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors ${isActive ? "text-oasis-text" : "text-gray-600"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
