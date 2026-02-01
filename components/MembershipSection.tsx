import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "ESSENTIAL",
    price: "$120",
    features: ["Access to Gym Floor", "Locker Room Access", "1 Guest Pass/Month"],
  },
  {
    name: "ELITE",
    price: "$250",
    features: ["All Essential Features", "Unlimited Classes", "Spa Access", "Towel Service"],
    recommended: true,
  },
  {
    name: "SIGNATURE",
    price: "$400",
    features: ["All Elite Features", "Private Locker", "Personal Training (2x)", "Laundry Service"],
  }
];

export const MembershipSection: React.FC = () => {
  return (
    <section id="membership" className="h-svh w-full snap-start snap-always bg-oasis-primary flex flex-col relative">
       <div className="pt-12 px-8 mb-4">
        <h2 className="text-3xl font-bold text-oasis-text mb-2">JOIN OASIS</h2>
        <p className="text-gray-500 text-sm">Select your level of commitment.</p>
      </div>

      {/* Horizontal Scroll Container for Cards */}
      <div className="flex-1 overflow-x-auto flex items-center snap-x snap-mandatory px-8 pb-32 gap-6 no-scrollbar touch-pan-x">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              snap-center shrink-0 w-[85vw] max-w-[320px] p-8 rounded-[2rem] border flex flex-col relative
              ${plan.recommended 
                ? 'bg-oasis-secondary border-oasis-accent shadow-[0_0_30px_rgba(229,9,20,0.15)]' 
                : 'bg-oasis-secondary/50 border-white/5'}
            `}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-oasis-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-red-900/50">
                Most Popular
              </div>
            )}

            <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${plan.recommended ? 'text-oasis-accent' : 'text-gray-500'}`}>
              {plan.name}
            </h3>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-oasis-text">{plan.price}</span>
              <span className="text-gray-600 text-sm">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-oasis-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
              plan.recommended 
                ? 'bg-oasis-accent text-white hover:bg-white hover:text-black' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}>
              SELECT PLAN
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};