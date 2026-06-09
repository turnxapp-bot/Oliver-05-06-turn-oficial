/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  ShieldCheck, 
  Target, 
  Handshake, 
  TrendingUp, 
  Calendar, 
  Coffee, 
  Trophy, 
  MinusCircle, 
  ChevronRight,
  Menu,
  X,
  Lock,
  Globe,
  Plus
} from 'lucide-react';

// --- Constants ---
const HERO_MOCKUP = "https://lh3.googleusercontent.com/d/1SqQ6ZUaVMgoq5XNWipji34GcWRUp_Ug_";

const FLOATING_LAYERS = [
  { tag: "Vínculos de Longo Prazo", text: "Membros se mantém conectados durante toda vida." },
  { tag: "Networking de Valor", text: "Relacionamentos que abrem portas em nível estratégico." },
  { tag: "Ecossistema Forte", text: "O peso de uma rede que escala resultados concretos." },
  { tag: "Inteligência Coletiva", text: "Solucionando desafios de maneira integrada." },
  { tag: "Parcerias Reais", text: "Conectando os líderes e os decisores." }
];

const PARA_QUEM_IMAGES = [
  "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200"
];

// --- Components ---

const Navbar = ({ onJoinClick }: { onJoinClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/d/1s97m17sy_lFgb_t2x1c16GfLZOFHphHP" 
            alt="TURN Logo" 
            className="h-12 w-auto object-contain transition-all"
          />
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.1em] text-slate-500">
          <a href="#posicionamento" className="hover:text-brand-accent transition-colors">Posicionamento</a>
          <a href="#para-quem" className="hover:text-brand-accent transition-colors">PARA QUEM</a>
          <a href="#entrega" className="hover:text-brand-accent transition-colors">Entregáveis</a>
          <a href="#planos" className="hover:text-brand-accent transition-colors">Planos</a>
          <a href="#connect" className="hover:text-brand-accent transition-colors">Conexão</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a 
            href="https://turnu.site/turn-oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors flex items-center justify-center cursor-pointer"
          >
            JÁ SOU MEMBRO
          </a>
          <a 
            href="https://turnu.site/turn-oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 bg-brand-primary text-white text-[13px] font-bold uppercase tracking-widest border border-brand-accent/20 hover:bg-slate-800 transition-all flex items-center justify-center cursor-pointer"
          >
            QUERO FAZER PARTE
          </a>
        </div>

        <button className="lg:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-slate-100 p-8 flex flex-col gap-6 text-[13px] font-bold uppercase tracking-widest text-slate-600"
          >
            <a href="#posicionamento" onClick={() => setIsOpen(false)}>Posicionamento</a>
            <a href="#para-quem" onClick={() => setIsOpen(false)}>PARA QUEM</a>
            <a href="#entrega" onClick={() => setIsOpen(false)}>Entregáveis</a>
            <a href="#planos" onClick={() => setIsOpen(false)}>Planos</a>
            <a href="#connect" onClick={() => setIsOpen(false)}>Conexão</a>
            <button 
              onClick={() => { setIsOpen(false); onJoinClick(); }}
              className="w-full py-4 bg-brand-primary text-white font-bold tracking-widest"
            >
              QUERO FAZER PARTE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, className = "", centered = false }: { title: string; subtitle?: string; className?: string, centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : 'text-center md:text-left'} ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-medium mb-8 text-brand-primary leading-[1.1] tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg md:text-xl text-slate-500 font-light leading-relaxed ${centered ? 'mx-auto' : 'mx-auto md:mx-0'} max-w-3xl`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, text, delay = 0 }: { icon: any, title: string, text: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-10 luxury-card hover:border-brand-accent/50 transition-all duration-500 group flex flex-col h-full text-center md:text-left items-center md:items-start"
  >
    <div className="w-10 h-10 flex items-center justify-center mb-8 text-brand-accent">
      <Icon size={24} strokeWidth={1} />
    </div>
    <h3 className="text-2xl font-display font-medium mb-4 text-brand-primary">{title}</h3>
    <p className="text-slate-500 text-[15px] font-light leading-relaxed flex-grow">{text}</p>
  </motion.div>
);

const PlanCard = ({ tier, title, subtitle, price, benefits, featured = false, onClick }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-6 md:p-8 xl:p-10 flex flex-col h-full transition-all duration-500 border text-center lg:text-left items-center lg:items-start ${featured ? 'bg-brand-primary text-white border-brand-accent shadow-2xl scale-[1.03] z-10' : 'bg-white border-slate-100'}`}
  >
    <div className="mb-10 w-full">
      <span className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block ${featured ? 'text-brand-accent' : 'text-brand-accent'}`}>{tier}</span>
      <h3 className="text-2xl xl:text-3xl font-display font-medium mb-3">{title}</h3>
      <p className={`text-sm font-light leading-relaxed min-h-[64px] ${featured ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>
    </div>
    
    <div className="mb-10 flex items-baseline justify-center lg:justify-start gap-1 w-full">
      <span className="text-3xl xl:text-4xl font-display font-medium">{price}</span>
    </div>

    <div className="flex-1 space-y-5 mb-10 w-full">
      {benefits.map((benefit: string, i: number) => (
        <div key={i} className="flex gap-4 text-[13px] font-light items-start justify-center lg:justify-start">
          <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${featured ? 'text-brand-accent' : 'text-brand-accent'}`} strokeWidth={1.5} />
          <span className={`text-left ${featured ? 'text-slate-200' : 'text-slate-600'}`}>{benefit}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReferral, setIsReferral] = useState(false);
  const [floatingIndex, setFloatingIndex] = useState(0);
  const [paraQuemIndex, setParaQuemIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const featuredCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setFloatingIndex((prev) => (prev + 1) % FLOATING_LAYERS.length);
      setParaQuemIndex((prev) => (prev + 1) % PARA_QUEM_IMAGES.length);
    }, 5000);

    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 selection:bg-brand-accent/20 selection:text-brand-primary">
      {/* Preloader overlay with turning logo */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="relative flex flex-col items-center">
              <motion.img
                src="https://lh3.googleusercontent.com/d/15aro5izoT-nmMxiHOcltB79MfDqOLjFN"
                alt="TURN Logo Loading"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-24 w-24 md:h-32 md:w-32 object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onJoinClick={() => setIsFormOpen(true)} />

      {/* --- GLOBAL RADAR MODAL --- */}
      <AnimatePresence>
        {isRadarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-brand-primary/98 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)] opacity-20" />
            </div>

            <button 
              onClick={() => setIsRadarOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[130]"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
              {/* World Map SVG Representation */}
              <div className="absolute inset-0 opacity-20 grayscale invert">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" alt="Map" className="w-full h-full object-contain" />
              </div>

              {/* Radar Circle */}
              <div className="relative w-[500px] h-[500px] rounded-full border border-brand-accent/20 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-linear-to-tr from-brand-accent/0 to-brand-accent/20 origin-center"
                  style={{ maskImage: 'conic-gradient(from 180deg, transparent, black)' }}
                />
                <div className="w-[80%] h-[80%] rounded-full border border-brand-accent/10" />
                <div className="w-[60%] h-[60%] rounded-full border border-brand-accent/5" />
                
                {/* Active Members Dots */}
                {[
                  { t: '20%', l: '30%', city: 'New York' },
                  { t: '45%', l: '25%', city: 'São Paulo' },
                  { t: '30%', l: '50%', city: 'London' },
                  { t: '55%', l: '55%', city: 'Johannesburg' },
                  { t: '35%', l: '75%', city: 'Dubai' },
                  { t: '50%', l: '85%', city: 'Singapore' },
                  { t: '25%', l: '15%', city: 'San Francisco' }
                ].map((pos, i) => (
                  <motion.div 
                    key={i}
                    style={{ top: pos.t, left: pos.l }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 1, 0], 
                      opacity: [0, 1, 1, 0],
                      boxShadow: ["0 0 0px var(--color-brand-accent)", "0 0 20px var(--color-brand-accent)"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: i * 0.5,
                      times: [0, 0.1, 0.9, 1]
                    }}
                    className="absolute w-2 h-2 bg-brand-accent rounded-full z-20"
                  >
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-brand-accent whitespace-nowrap uppercase tracking-widest">{pos.city}</span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-0 text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-display text-4xl mb-4"
                >
                  Radar Global TURN
                </motion.h3>
                <p className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em]">Conectando players de alto impacto em todo o mundo</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CURATION FORM MODAL --- */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center md:p-4"
          >
            <div className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md" onClick={() => setIsFormOpen(false)} />
            
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full h-full md:h-auto md:max-w-2xl bg-white p-6 sm:p-8 md:p-16 shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-400 hover:text-brand-primary transition-colors z-10"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-display font-medium text-brand-primary mb-4">Solicitação Enviada</h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Nossa equipe de curadoria analisará seu perfil cuidadosamente. <br /> 
                    Em breve, entraremos em contato para falar sobre sua jornada no TURN.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-12">
                    <span className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Aplique para o clube</span>
                    <h3 className="text-4xl font-display font-medium text-brand-primary">Quero fazer parte</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Nome Completo</label>
                        <input required type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">E-mail Corporativo</label>
                        <input required type="email" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light" placeholder="exemplo@empresa.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Empresa / Cargo</label>
                        <input required type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light" placeholder="Onde você atua?" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">LinkedIn</label>
                        <input required type="url" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light" placeholder="URL do seu perfil" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Por que deseja entrar no TURN?</label>
                      <textarea required rows={3} className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light resize-none" placeholder="Conte brevemente sobre seu momento de negócio" />
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Foi indicado por alguém?</span>
                        <button 
                          type="button" 
                          onClick={() => setIsReferral(!isReferral)}
                          className={`w-10 h-10 border border-slate-200 flex items-center justify-center transition-all ${isReferral ? 'bg-brand-accent text-brand-primary border-brand-accent' : 'text-slate-400 hover:border-brand-accent hover:text-brand-accent'}`}
                        >
                          <Plus size={16} className={`transition-transform duration-300 ${isReferral ? 'rotate-45' : ''}`} />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {isReferral && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2 block">Nome de quem indicou</label>
                            <input required={isReferral} type="text" className="w-full border-b border-brand-accent/30 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-transparent font-light" placeholder="Quem te trouxe para o TURN?" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button type="submit" className="w-full py-5 bg-brand-primary text-white text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/10">
                      ENVIAR PARA CURADORIA
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[110] bg-brand-primary text-white px-8 py-4 shadow-2xl flex items-center gap-4 border border-brand-accent/30"
          >
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Solicitação processada com sucesso</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 z-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center md:justify-start gap-4 px-0 py-1 mb-6 md:mb-8 w-full md:w-auto"
              >
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  ].map((url, i) => (
                    <img 
                      key={i}
                      src={url} 
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white object-cover grayscale" 
                      alt="Membro"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 md:w-8 h-[1px] bg-brand-accent" />
                  <span className="text-brand-accent text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]">
                    Business Club de Alto Impacto
                  </span>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[5.5rem] font-display font-medium tracking-tight text-brand-primary mb-8 md:mb-12 leading-[1.1] md:leading-[1.05] text-center md:text-left"
              >
                Jogue o jogo <br className="hidden sm:block" /> <span className="text-brand-accent italic font-medium">de verdade.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl text-slate-500 mb-10 md:mb-14 max-w-2xl font-light leading-relaxed text-center md:text-left mx-auto md:mx-0"
              >
                Conexão de oportunidades e relações sérias para gerar faturamento, parcerias e viradas de jogo. Curadoria rígida. Participação apenas por indicação.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-6"
              >
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="px-8 md:px-10 py-4 md:py-5 bg-brand-primary text-white text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] border border-brand-primary hover:bg-slate-800 transition-all shadow-xl shadow-brand-primary/10"
                >
                  QUERO FAZER PARTE
                </button>
                <button 
                  onClick={() => window.open('https://turnu.site/', '_blank')}
                  className="px-8 md:px-10 py-4 md:py-5 border border-slate-200 bg-white text-slate-600 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
                >
                  JÁ SOU MEMBRO
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-[85%] sm:w-[65%] lg:w-[75%] mx-auto lg:mx-0">
                  <img 
                    src={HERO_MOCKUP}
                    alt="TURN App Mockup" 
                    className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                  />
                  
                  {/* Overlapping element - Repositioned for mobile overlap */}
                  <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-6 max-w-[200px] md:max-w-xs z-20">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={floatingIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="p-5 md:p-8 bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl rounded-xl md:rounded-2xl"
                      >
                        <p className="text-brand-accent text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1 md:mb-2">
                          {FLOATING_LAYERS[floatingIndex].tag}
                        </p>
                        <p className="text-brand-primary font-display italic text-sm md:text-lg leading-snug">
                          {FLOATING_LAYERS[floatingIndex].text}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Decorative background element */}
              <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-[80%] h-full border border-brand-accent/20 -z-10 translate-x-4 translate-y-4 hidden sm:block" />
            </div>
          </div>
        </div>
      </header>

      {/* --- POSITIONING --- */}
      <section id="posicionamento" className="py-24 md:py-40 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Não é sobre networking vazio. É sobre negócio."
            subtitle="O TURN foi criado para reunir quem trabalha com turnaround, reestruturação e virada de empresas, em um ambiente de confiança, curadoria e conexão real."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-50">
            <FeatureCard 
              icon={ShieldCheck}
              title="Curadoria de verdade"
              text="Nem todo mundo entra. O poder do TURN depende da qualidade de quem participa e da aderência entre os membros."
              delay={0.1}
            />
            <FeatureCard 
              icon={Target}
              title="Conexão de negócio"
              text="A conexão aqui não é aleatória. A lógica é aproximar pessoas, empresas e oportunidades com potencial real de gerar resultado."
              delay={0.2}
            />
            <FeatureCard 
              icon={Zap}
              title="Pertencimento entre pares"
              text="Um lugar para estar entre pessoas que entendem a mesma pressão, falam a mesma língua e sabem o peso de decidir."
              delay={0.3}
            />
            <FeatureCard 
              icon={Users}
              title="Comunidade unida"
              text="Sozinho é mais pesado. Com a rede certa, a força cresce. O TURN une gente forte para construir relações duradouras."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* --- PARA QUEM --- */}
      <section id="para-quem" className="py-24 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading 
                title="Para quem vive o mundo real dos negócios em transformação."
                subtitle="O TURN foi desenhado para quem precisa de conexão útil, confiança, relacionamento estratégico e acesso a gente capaz de gerar movimento concreto no contexto de turnaround e transformação empresarial."
              />
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 text-center md:text-left">
                {[
                  { title: "Empresários", desc: "Para quem precisa de pares, conselheiros, parceiros, investidores/ financiadores. e conversas com densidade." },
                  { title: "Consultores", desc: "Para quem quer estar perto das oportunidades e pessoas certas, ampliar relevância e gerar negócio." },
                  { title: "Executivos", desc: "Para quem vive execução, pressão e precisa de uma rede que ajude a clarear idéias, abrir portas, e compactuar dos desafios." },
                  { title: "Investidores/ Financiadores", desc: "Para quem busca oportunidades qualificadas para participar do ecossistema do turnaround." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center md:items-start"
                  >
                    <h4 className="text-xl font-display font-medium text-brand-primary mb-4 pb-4 border-b border-slate-100 w-full">{item.title}</h4>
                    <p className="text-[14px] text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] bg-slate-100 overflow-hidden group shadow-2xl z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={paraQuemIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={PARA_QUEM_IMAGES[paraQuemIndex]} 
                    alt="TURN Experience" 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-brand-primary/10" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 p-6 md:p-10 bg-white shadow-xl z-20">
                   <p className="text-brand-primary font-display italic text-lg md:text-xl leading-relaxed">"Onde o interesse em comum gera conexão de longo prazo além do escritório"</p>
                </div>
              </motion.div>
              {/* Asymmetrical decorative element */}
              <div className="absolute -top-12 -right-12 w-full h-full border-2 border-brand-accent/10 -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* --- O QUE ENTREGA --- */}
      <section id="entrega" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="O que você encontra dentro do TURN"
            subtitle="O TURN combina curadoria, tecnologia e relacionamento estratégico para transformar conexões em faturamento, parcerias e acesso."
            centered={true}
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              { 
                icon: Handshake, 
                title: "Conexão de oportunidades", 
                text: "Conecte-se com pessoas, negócios, projetos, vagas, clientes e parceiros com mais aderência e menos ruído." 
              },
              { 
                icon: ShieldCheck, 
                title: "Indicações qualificadas", 
                text: "A força da rede está em gerar recomendações com contexto, reputação e potencial real de conversão." 
              },
              { 
                icon: Calendar, 
                title: "Eventos que aproximam", 
                text: "Encontros online, grupos, jantares e visitas pensadas para fortalecer vínculo, confiança e geração de negócio." 
              },
              { 
                icon: Globe, 
                title: "Pertencimento à rede", 
                text: "Um ambiente onde existe linguagem comum, compromisso e força coletiva para quem fala a mesma língua." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col p-8 md:p-12 border border-slate-50 hover:bg-brand-bg transition-colors duration-500 text-center md:text-left items-center md:items-start ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <div className="w-12 h-12 flex items-center justify-center text-brand-accent mb-8">
                  <item.icon size={28} strokeWidth={1} />
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-medium text-brand-primary mb-6">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLANOS --- */}
      <section id="planos" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Níveis de Acesso"
            subtitle="Cada plano do TURN amplia acesso, visibilidade, proximidade e potencial de geração de negócio dentro da rede."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="h-full">
              <PlanCard 
                tier="Explorador"
                title="Turn-In"
                subtitle="Entrada gratuita para conhecer a rede e enxergar seu potencial."
                price="Grátis"
                benefits={[
                  "Acesso às vagas e oportunidades",
                  "Encontros online abertos",
                  "Conteúdos selecionados",
                  "Newsletter"
                ]}
                onClick={() => setIsFormOpen(true)}
              />
            </div>
            <div className="h-full">
              <PlanCard 
                tier="Ativo"
                title="Turn-On"
                subtitle="Comece a construir presença, conexões e reputação ativa. (R$ Zero por tempo limitado)."
                price="Grátis (por tempo limitado)"
                benefits={[
                  "Tudo do Turn-In",
                  "Comunidade WhatsApp",
                  "Selo Membro Ativo",
                  "Anúncios na rede",
                  "Programa de pontos",
                  "Vagas e oportunidades exclusivas.",
                  "Encontros exclusivos",
                  "Conteúdos exclusivos."
                ]}
                onClick={() => setIsFormOpen(true)}
              />
            </div>
            <div ref={featuredCardRef} className="h-full">
              <PlanCard 
                tier="Profissional"
                title="Turn-Around"
                subtitle="Sente nas mesas certas com as pessoas-chave."
                price="R$ 229,90"
                featured={true}
                benefits={[
                  "Tudo do Turn-On",
                  "Mesas de reunião em grupo (inspirado no YPO)",
                  "Cursos específicos",
                  "Grupos exclusivos de discussão",
                  "Convite para gerar conteúdo",
                  "Jantares e Expedições exclusivas",
                  "Visitas a empresas",
                  "Visitas a fundos"
                ]}
                onClick={() => setIsFormOpen(true)}
              />
            </div>
            <div className="h-full">
              <PlanCard 
                tier="Premium"
                title="Turn-Into"
                subtitle="Transforme-se com quem domina a arte de salvar negócios."
                price="Sob convite"
                benefits={[
                  "Tudo do Turn-Around",
                  "Mesas reservadas",
                  "Eventos presenciais exclusivos",
                  "Reunião trimestral com líderes do TURN",
                  "Participação em podcast",
                  "Possibilidade de participação em Projetos Estratégicos",
                  "Selo VIP Badge",
                  "Comunicação com destaque no fórum",
                  "Anúncios de vagas/ oportunidades em destaque.",
                  "Criação e venda de cursos ou mentorias na plataforma"
                ]}
                onClick={() => setIsFormOpen(true)}
              />
            </div>
            <div className="h-full">
              <PlanCard 
                tier="Mastermind"
                title="Turn-your-Mind"
                subtitle="Mastermind que muda sua mentalidade e seu nível de jogo."
                price="Sigiloso"
                benefits={[
                  "Tudo do Into",
                  "Participação sigilosa.",
                  "Mentoria individual 2h/mês com líder do TURN",
                  "Mesa redonda de dúvidas, semanal (1h) com Líder do Turn",
                  "Board as a Service: possibilidade de ser ou ter conselheiros designados",
                  "Participação na Confraria: Jantar presencial exclusivo a cada 4 meses com líderes do setor.",
                  "Palco garantido nos eventos (como speaker ou moderador)",
                  "Expedições fora do Brasil com liderança- valores a parte."
                ]}
                onClick={() => setIsFormOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONNECT --- */}
      <section id="connect" className="py-24 md:py-48 bg-brand-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 text-center md:text-left">
              <span className="text-brand-accent text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 block mx-auto md:mx-0">TURN CONNECT</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 md:mb-10 leading-tight">Conexão de oportunidades e relações.</h2>
              <p className="text-slate-300 text-lg md:text-xl font-light mb-12 md:mb-16 leading-relaxed mx-auto md:mx-0">
                O TURN CONNECT é o núcleo de conexão da plataforma. Aproximamos as pessoas certas no momento certo, com contexto suficiente para gerar conversa útil. No módulo Turn Connect, você poderá se conectar com membros de todo o mundo que fazem parte da nossa rede exclusiva.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10 mb-12 md:mb-16">
                {[
                  { icon: Target, label: "Conexão inteligente" },
                  { icon: Calendar, label: "Radar de agenda" },
                  { icon: Coffee, label: "Convites para café" },
                  { icon: Users, label: "Grupos estratégicos" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center gap-5 group">
                    <div className="w-10 h-10 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/10 transition-colors">
                      <item.icon size={20} strokeWidth={1} />
                    </div>
                    <span className="text-[13px] font-medium tracking-wide uppercase">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center md:items-start justify-center md:justify-start">
                  <button 
                    onClick={() => setIsRadarOpen(true)}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-brand-primary text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-primary transition-all shadow-xl shadow-white/5"
                  >
                    Ligar o Radar
                  </button>
                  <span className="text-brand-accent font-display italic text-lg opacity-80 mt-2 md:mt-0">"Menos volume. Mais aderência."</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-white shadow-2xl relative overflow-hidden p-1 group"
              >
                 <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Conexão Estratégica"
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 border-[20px] md:border-[40px] border-white/10 pointer-events-none" />
              </motion.div>
              {/* Overlapping decorative accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-brand-accent/20 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* --- GAMIFICATION --- */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading 
                title="Reputação e Compromisso"
                subtitle="No TURN, presença e conexão contam. Nossa lógica de pontuação valoriza quem fortalece a rede e mantém a seriedade do ecossistema."
                centered={true}
            />

            <div className="grid lg:grid-cols-3 gap-0 border-t border-l border-slate-100 lg:border-none text-center lg:text-left">
                <div className="p-8 md:p-12 border-b border-r border-slate-100 flex flex-col items-center lg:items-start">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                        <TrendingUp size={14} className="text-slate-400" /> Valorização
                    </h3>
                    <ul className="space-y-6 w-full">
                        <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Confirmar presença em jantar</span> <span className="text-brand-primary font-bold">+5 pts</span></li>
                        <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Agendar coffee meeting</span> <span className="text-brand-primary font-bold">+10 pts</span></li>
                        <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Acessar conteúdos</span> <span className="text-brand-primary font-bold">+15 pts</span></li>
                        <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Indicações de membros</span> <span className="text-brand-primary font-bold">+20 pts</span></li>
                        <li className="flex justify-between items-center text-sm"><span className="text-slate-600">Presença em eventos</span> <span className="text-brand-primary font-bold">+25 pts</span></li>
                    </ul>
                </div>

                <div className="p-8 md:p-12 border-b border-r border-slate-100 flex flex-col items-center lg:items-start">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                        <MinusCircle size={14} className="text-slate-400" /> Penalidades
                    </h3>
                    <ul className="space-y-6 w-full">
                        <li className="flex justify-between items-center text-sm text-red-700 font-medium"><span>Não Comparecimento</span> <span className="font-bold">-20 pts</span></li>
                        <li className="flex justify-between items-center text-sm text-red-700 font-medium"><span>Ausência em Grupo</span> <span className="font-bold">-5 pts</span></li>
                    </ul>
                </div>

                <div className="p-12 border-b border-r lg:border-none border-slate-100 bg-brand-bg flex flex-col justify-center text-center">
                    <h3 className="text-4xl font-display font-medium text-brand-primary mb-4">300 pts</h3>
                    <p className="text-sm text-slate-500 font-light mb-8 italic">Ao atingir esta meta, desbloqueie uma recompensa exclusiva da rede.</p>
                    <div className="w-full bg-slate-200 h-1.5 overflow-hidden mb-6">
                        <div className="w-[30%] bg-brand-accent h-full" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Consistência gera reputação</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 md:py-64 bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl md:text-8xl font-display font-medium mb-12 leading-[1.1]"
            >
                Pronto para a sua próxima <span className="italic font-light">virada?</span>
            </motion.h2>
            <p className="text-lg md:text-2xl text-slate-300 mb-16 md:mb-20 font-light leading-relaxed max-w-3xl mx-auto">
                O TURN conecta quem valoriza a construção de relacionamento de longo prazo com pessoas relevantes, em ambiente propício para forte colaboração
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full sm:w-auto px-12 py-6 bg-brand-accent text-brand-primary text-[12px] md:text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
                >
                    QUERO FAZER PARTE
                </button>
            </div>
            <p className="mt-16 text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                <Lock size={12} strokeWidth={2.5} /> Estritamente por convite e curadoria.
            </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-brand-bg text-slate-400 text-[12px] font-medium tracking-wide border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1s97m17sy_lFgb_t2x1c16GfLZOFHphHP" 
                    alt="TURN Logo" 
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="flex gap-12 font-bold uppercase tracking-widest text-[10px]">
                    <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Termos</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Contato</a>
                </div>
                <p className="text-slate-400">© 2026 TURN Business Club. Todos os direitos curados reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
