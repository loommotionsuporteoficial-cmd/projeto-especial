import { Wrench, Car, Gauge, Fuel, ShieldCheck, Cog } from 'lucide-react';
import { ServiceItem, TestimonialItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Diagnóstico Computadorizado',
    description: 'Utilizamos tecnologia de ponta para identificar falhas no sistema eletrônico do seu veículo com precisão milimétrica.',
    icon: Gauge,
  },
  {
    id: '2',
    title: 'Revisão Geral',
    description: 'Inspeção completa de freios, suspensão, óleo e filtros para garantir a sua segurança e a longevidade do motor.',
    icon: ShieldCheck,
  },
  {
    id: '3',
    title: 'Mecânica de Motor',
    description: 'Especialistas em retífica, troca de correias e reparos complexos em motores nacionais e importados.',
    icon: Cog,
  },
  {
    id: '4',
    title: 'Injeção Eletrônica',
    description: 'Limpeza de bicos, troca de velas e calibração do sistema de injeção para máxima eficiência de combustível.',
    icon: Fuel,
  },
  {
    id: '5',
    title: 'Suspensão e Freios',
    description: 'Manutenção corretiva e preventiva em amortecedores, pastilhas e discos para uma direção suave.',
    icon: Car,
  },
  {
    id: '6',
    title: 'Troca de Óleo Premium',
    description: 'Trabalhamos apenas com lubrificantes sintéticos de alta performance e filtros originais.',
    icon: Wrench,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Roberto Almeida',
    role: 'Cliente VIP',
    content: 'A Simas Turbo transformou meu carro. O atendimento é impecável e a oficina parece um laboratório de tão limpa. Recomendo!',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Fernanda Costa',
    role: 'Empresária',
    content: 'Confiança é tudo quando se trata de mecânica. Aqui eu deixo meu carro e sei que não vou ter surpresas na conta e nem no serviço.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Carlos Oliveira',
    role: 'Colecionador',
    content: 'Tenho carros antigos e a equipe da Simas Turbo tratou minhas relíquias com um cuidado impressionante. Profissionalismo puro.',
    image: 'https://picsum.photos/100/100?random=3',
  },
];