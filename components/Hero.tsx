import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Luxury Car Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <FadeIn direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 backdrop-blur-sm mb-6">
              <Star size={14} className="text-gold-400 fill-gold-400" />
              <span className="text-gold-100 text-xs font-semibold tracking-wider uppercase">Excelência em Automotivos</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              A Potência que o seu veículo <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">merece.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Na Simas Turbo, unimos tecnologia de ponta com a tradição de quem entende de motores. 
              Cuidado premium para carros que exigem o melhor.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex justify-center items-center px-8 py-4 bg-gold-500 text-white font-bold rounded-lg hover:bg-gold-600 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/30 group"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
};