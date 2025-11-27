import React from 'react';
import { SERVICES } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2">Nossos Serviços</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluções completas para seu veículo</h3>
            <p className="text-slate-500">
              Da manutenção preventiva aos reparos mais complexos, nossa equipe está pronta para atender qualquer necessidade do seu automóvel com excelência.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-gold-500/10 hover:border-gold-200 transition-all duration-300 h-full group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon className="text-gold-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};