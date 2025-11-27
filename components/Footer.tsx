import React from 'react';
import { Car, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-full bg-gold-500 text-slate-900">
                  <Car size={20} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">
                  SIMAS <span className="text-gold-500">TURBO</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Excelência mecânica e atendimento premium. Cuidando do seu carro como se fosse nosso.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-gold-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-gold-500 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Diagnóstico Computadorizado</li>
              <li>Revisão Preventiva</li>
              <li>Freios e Suspensão</li>
              <li>Mecânica de Motores</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Receba dicas de manutenção e ofertas exclusivas.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-slate-900 border border-slate-700 rounded-l-lg px-4 py-2 w-full outline-none focus:border-gold-500 text-sm"
              />
              <button className="bg-gold-500 text-slate-900 px-4 py-2 rounded-r-lg font-bold hover:bg-gold-600 transition-colors">
                OK
              </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Simas Turbo Auto Center. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};