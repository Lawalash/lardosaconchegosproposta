import React, { useState } from 'react';
import {
  Rocket,
  RefreshCw,
  Layers,
  TrendingUp,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  Lock,
} from 'lucide-react';

import ContactModal from './components/ContactModal';
import LogoConnector from './components/LogoConnector';
import PricingCard from './components/PricingCard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState<null | 'approval' | 'doubt'>(null);

  const handleSubmit = () => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password.trim() === 'projeto2026') {
        setIsAuthenticated(true);
      } else {
        setError('Senha incorreta. Tente novamente.');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const closeModal = () => setModalType(null);

  // ######### TELA PROTEGIDA (LOGIN) #########
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#734002] via-[#8C5C03] to-[#F2D06B] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
        {/* Orbs de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#F2D06B] rounded-full blur-3xl opacity-40 animate-pulse" />
          <div
            className="absolute -right-20 top-20 w-96 h-96 bg-[#BF8C2C] rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute left-20 bottom-20 w-72 h-72 bg-[#F2F2F2] rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute right-10 bottom-20 w-64 h-64 bg-[#8C5C03] rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Pontinhos flutuantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Lado esquerdo - texto */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase shadow-xl">
              <Lock className="animate-pulse" size={14} />
              Área Protegida
            </div>

            <h1 className="text-4xl lg:text-5xl font-black leading-tight">
              Proposta Exclusiva
              <span className="block mt-2 bg-gradient-to-r from-[#F2D06B] via-[#BF8C2C] to-white bg-clip-text text-transparent">
                Aconchego dos Avós
              </span>
            </h1>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
              Acesse a proposta comercial personalizada para o desenvolvimento da landing page da{' '}
              <strong className="text-[#F2D06B]">ILPI Aconchego dos Avós</strong>, focada em
              acolhimento, confiança e apresentação profissional da instituição.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: <ShieldCheck size={14} />, text: 'Seguro' },
                { icon: <Zap size={14} />, text: 'Responsivo' },
                { icon: <Sparkles size={14} />, text: 'Acolhedor' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-sm font-medium"
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Lado direito - login */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20 transform hover:scale-105 transition-transform duration-500">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#8C5C03] to-[#F2D06B] text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Acesso Restrito
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Bem-vindo</h2>
                <p className="text-slate-600">
                  Digite a senha fornecida pela A2 Data para acessar a proposta completa da ILPI
                  Aconchego dos Avós.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Senha de Acesso
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full rounded-2xl border-2 border-slate-200 px-5 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#BF8C2C]/20 focus:border-[#BF8C2C] outline-none transition-all bg-white"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <Lock
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-200 rounded-2xl px-4 py-3 animate-shake">
                    <CheckCircle2 className="text-red-500 flex-shrink-0" size={18} />
                    <span className="font-medium">{error}</span>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#734002] via-[#8C5C03] to-[#F2D06B] text-white font-bold text-lg py-5 px-6 rounded-2xl shadow-2xl shadow-[#8C5C03]/40 hover:shadow-3xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      Autenticando...
                    </>
                  ) : (
                    <>
                      Acessar Proposta
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          .animate-float { animation: float ease-in-out infinite; }
          .animate-shake { animation: shake 0.3s ease-in-out; }
        `}</style>
      </div>
    );
  }

  // ######### PÁGINA PRINCIPAL DA PROPOSTA #########
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F2F2]">
      {/* Header */}
      <header className="relative bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#F2D06B]/15 to-[#BF8C2C]/15 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#F2D06B]/20 to-[#8C5C03]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
            Proposta Comercial Confidencial
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Proposta de Desenvolvimento
            <span className="block mt-2 bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] bg-clip-text text-transparent">
              de Site Institucional
            </span>
          </h1>

          <p className="text-2xl text-slate-600 mb-16 font-medium">
            A2 Data <span className="text-slate-300 mx-3">×</span>{' '}
            <span className="text-[#8C5C03] font-bold">ILPI Aconchego dos Avós</span>
          </p>

          {/* Logos */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 min-h-[140px]">
            <LogoConnector />

            <div className="flex flex-col items-center z-10 bg-white p-6 rounded-3xl shadow-xl border-2 border-slate-100 w-56 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8C5C03] to-[#734002] rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                <Rocket size={36} />
              </div>
              <span className="font-black text-slate-900 text-lg">A2 Data</span>
              <span className="text-xs text-slate-500 font-medium">Estratégia & Tecnologia</span>
            </div>

            <div className="md:hidden">
              <RefreshCw size={28} className="text-[#BF8C2C] animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            <div className="flex flex-col items-center z-10 bg-white p-6 rounded-3xl shadow-xl border-2 border-slate-100 w-56 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F2D06B] to-[#BF8C2C] rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                <TrendingUp size={36} />
              </div>
              <span className="font-black text-slate-900 text-lg">Aconchego dos Avós</span>
              <span className="text-xs text-slate-500 font-medium">ILPI • Lar de Idosos</span>
            </div>
          </div>
        </div>
      </header>

      {/* O que vamos construir */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="md:flex">
            <div className="p-10 md:p-12 md:w-2/3 bg-gradient-to-br from-white to-amber-50/40">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-[#8C5C03] to-[#F2D06B] rounded-2xl">
                  <Layers className="text-white" size={28} />
                </div>
                O que vamos construir
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                Vamos desenvolver uma landing page institucional moderna e acolhedora para a{' '}
                <strong className="text-[#8C5C03]">ILPI Aconchego dos Avós</strong>, com foco em
                transmitir confiança, cuidado e humanização. O site será responsivo e pensado para
                familiares que buscam um lar seguro para seus pais e avós, com acesso fácil às
                informações essenciais e canais de contato direto via WhatsApp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Landing page institucional responsiva',
                  'Seção sobre a ILPI e seus diferenciais de cuidado',
                  'Área para apresentar estrutura física e serviços',
                  'Botões de contato via WhatsApp estrategicamente posicionados',
                  'Formulário de contato simples e objetivo',
                  'Textos focados em acolhimento e confiança',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-base font-semibold text-slate-800 bg-white p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#8C5C03] to-[#F2D06B] flex items-center justify-center text-white shadow-lg">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:w-1/3 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-[#F2D06B]">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                Resultado Esperado
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <ShieldCheck className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white font-medium">
                    Presença digital profissional, acolhedora e confiável.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <Zap className="text-amber-300 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white font-medium">
                    Facilidade para que familiares encontrem informações e iniciem contato.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <TrendingUp className="text-orange-300 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white font-medium">
                    Maior probabilidade de agendamentos de visitas e preenchimento de vagas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F2F2F2] via-amber-50/50 to-orange-50/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-[#8C5C03] to-[#F2D06B] mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Investimento</h2>
            <p className="text-xl text-slate-600">
              Projeto completo de landing page institucional para a ILPI Aconchego dos Avós
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PricingCard
              title="Projeto de Landing Page – ILPI Aconchego dos Avós"
              priceHighlight="Valor do projeto: R$ 800,00 (landing page institucional) + Taxa de implantação: R$ 240,00 + Hospedagem (1 ano): R$ 118,75"
              installmentHighlight="10x de R$ 80,00"
              note="O valor do projeto (R$ 800,00) será pago em 10 parcelas mensais de R$ 80,00. A taxa de implantação (ativação, configuração, publicação e integrações básicas) de R$ 240,00 e a hospedagem HostGator de 1 ano (R$ 118,75) serão combinadas e podem ser pagas próximo à data de publicação do site (go-live)."
              buttonText="Ver detalhes completos do projeto"
              isRecommended={true}
              detailsContent={
                <>
                  <p className="font-bold text-slate-900 mb-4 text-base">O projeto inclui:</p>

                  <div className="space-y-2 mb-6">
                    {[
                      'Definição da estrutura da landing page (seções e navegação).',
                      'Criação do layout com base na identidade da ILPI Aconchego dos Avós.',
                      'Desenvolvimento da landing page em tecnologia moderna (React/Vite), responsiva.',
                      'Seções como: sobre a ILPI, benefícios, estrutura, serviços, dúvidas frequentes (se fornecidas) e contato.',
                      'Botões de WhatsApp estrategicamente posicionados e formulário de contato simples.',
                      'Textos pensados para transmitir acolhimento, confiança e clareza.',
                      'Configurações básicas de SEO on-page (títulos, descrições e estrutura de textos).',
                      'Publicação do site em hospedagem HostGator (ou similar) e apontamento de domínio.',
                      'Pequenos ajustes após o go-live durante período de estabilização.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl border-2 border-amber-200 mb-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Projeto base (landing page):</span>
                        <span className="font-mono font-bold text-lg">R$ 800,00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Taxa de implantação:</span>
                        <span className="font-mono font-bold text-lg">R$ 240,00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Hospedagem (1 ano):</span>
                        <span className="font-mono font-bold text-lg">R$ 118,75</span>
                      </div>
                      <div className="h-px bg-amber-300 my-2" />
                      <div className="flex justify-between items-center text-amber-900 font-black text-base">
                        <span>Investimento total estimado:</span>
                        <span className="font-mono text-xl">R$ 1.158,75</span>
                      </div>
                      <p className="text-xs text-slate-700 mt-2">
                        Observação: o parcelamento em 10x de R$ 80,00 refere-se ao valor do projeto
                        (R$ 800,00). A taxa de implantação e a hospedagem são pagas à parte, em
                        condições combinadas com a CONTRATANTE.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 mb-2 text-sm">
                      A taxa de implantação cobre:
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      {[
                        'Configuração do ambiente de hospedagem.',
                        'Publicação da landing page e apontamento de domínio (quando necessário).',
                        'Ajustes de performance e pequenos refinamentos visuais no go-live.',
                        'Verificação básica de usabilidade em dispositivos móveis.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="text-amber-500 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Manutenção */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-amber-100 text-slate-600 mb-6">
            <RefreshCw size={32} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-4">Manutenção e Melhorias</h3>
          <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed text-lg">
            Após a publicação do site, correções ligadas diretamente ao que foi desenvolvido pela A2
            Data dentro do escopo acordado serão ajustadas durante o período de estabilização. Novas
            seções, mudanças estruturais, integrações extras ou qualquer evolução do site poderão ser
            tratadas como{' '}
            <span className="font-bold text-[#8C5C03]">demandas pontuais com valor fechado</span> ou
            como{' '}
            <span className="font-bold text-[#8C5C03]">plano mensal de suporte</span>, caso a ILPI
            deseje um acompanhamento contínuo.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#F2D06B]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#BF8C2C]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <CheckCircle2 size={40} className="text-[#F2D06B]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            “Nosso objetivo é apresentar a ILPI Aconchego dos Avós de forma
            <span className="block mt-2 bg-gradient-to-r from-[#F2D06B] via-[#BF8C2C] to-white bg-clip-text text-transparent">
              acolhedora, clara e confiável para cada família.”
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <button
              onClick={() => setModalType('approval')}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#8C5C03] via-[#BF8C2C] to-[#F2D06B] hover:scale-105 text-white font-black py-5 px-12 rounded-2xl shadow-2xl shadow-amber-500/30 transform transition-all duration-300 text-lg"
            >
              Aprovar Proposta <CheckCircle2 size={22} />
            </button>

            <button
              onClick={() => setModalType('doubt')}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-5 px-10 rounded-2xl transition-all border-2 border-white/20 hover:scale-105 duration-300"
            >
              Tirar Dúvidas <ArrowRight size={22} />
            </button>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} A2 Data. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={!!modalType} type={modalType || 'approval'} onClose={closeModal} />
    </div>
  );
}

export default App;
