import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'revisao',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    // Here you would typically send the data to a backend
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <FadeIn direction="up">
              <h2 className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2">Fale Conosco</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Agende seu serviço hoje mesmo</h3>
              <p className="text-slate-500 mb-8">
                Não espere o problema piorar. Traga seu veículo para uma avaliação gratuita e tome um café conosco.
              </p>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="up" delay={100}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-50 rounded-lg text-gold-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Endereço</h4>
                    <p className="text-slate-600">Av. das Nações Unidas, 1500<br />São Paulo - SP</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-50 rounded-lg text-gold-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telefone</h4>
                    <p className="text-slate-600">(11) 99999-9999<br />(11) 3333-3333</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-50 rounded-lg text-gold-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">contato@simasturbo.com.br</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-50 rounded-lg text-gold-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Horário de Funcionamento</h4>
                    <p className="text-slate-600">Seg - Sex: 08:00 - 18:00<br />Sáb: 08:00 - 12:00</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form */}
          <FadeIn direction="left" delay={200}>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Solicitar Orçamento</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Serviço</label>
                  <select 
                    name="service"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-white"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="revisao">Revisão Geral</option>
                    <option value="oleo">Troca de Óleo</option>
                    <option value="mecanica">Mecânica Geral</option>
                    <option value="eletrica">Elétrica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder="Descreva o problema do seu veículo..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-gold-500 text-white font-bold rounded-lg hover:bg-gold-600 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-gold-500/20"
                >
                  <Send size={18} />
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};