import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <FadeIn direction="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Mechanic working" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1503376763036-066120622c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Clean workshop" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-gold-100 max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-gold-500 mb-1">15+</p>
              <p className="text-slate-600 font-medium">Anos de experiência em mecânica de alta performance.</p>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn direction="up">
              <h2 className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2">Sobre a Simas Turbo</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Compromisso com a qualidade e transparência total.
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Fundada com a missão de elevar o padrão das oficinas mecânicas, a Simas Turbo se destaca pelo ambiente limpo, organizado e pela equipe altamente técnica.
                Não consertamos apenas carros; devolvemos a sua tranquilidade ao dirigir.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                "Peças originais com garantia de fábrica",
                "Equipamentos de diagnóstico de última geração",
                "Orçamento transparente sem surpresas",
                "Sala de espera VIP com Wi-Fi e café"
              ].map((item, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold-500 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={400} className="mt-8">
              <button className="text-gold-600 font-bold hover:text-gold-700 flex items-center gap-2 group">
                Conheça nossa história 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};