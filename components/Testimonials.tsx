import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn direction="right">
            <h2 className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2">Depoimentos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">O que dizem nossos clientes</h3>
          </FadeIn>
          <FadeIn direction="left">
            <p className="text-slate-400 max-w-md text-right md:text-left">
              A satisfação dos nossos clientes é o combustível que move a nossa oficina todos os dias.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 150}>
              <div className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700 hover:border-gold-500/50 transition-colors">
                <Quote className="absolute top-6 right-6 text-slate-700 w-10 h-10" />
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-gold-500 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gold-500 text-xs uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.content}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};