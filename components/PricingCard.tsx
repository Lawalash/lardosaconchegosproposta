import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface PricingCardProps {
  title: string;
  priceHighlight: string;
  installmentHighlight: string;
  note: string;
  buttonText: string;
  detailsContent: React.ReactNode;
  isRecommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  priceHighlight,
  installmentHighlight,
  note,
  buttonText,
  detailsContent,
  isRecommended = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 border backdrop-blur-sm
      ${
        isRecommended
          ? 'bg-gradient-to-br from-white via-amber-50/60 to-orange-50/50 border-amber-300 shadow-2xl shadow-amber-200/50 ring-2 ring-amber-300/50 transform md:scale-105 hover:shadow-amber-300/60'
          : 'bg-white/90 border-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-slate-300'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-7 rounded-full shadow-lg flex items-center gap-1.5">
          <Sparkles className="inline-block" size={14} />
          Proposta Completa
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">{title}</h3>
      </div>

      <div className="flex-grow space-y-6">
        <div
          className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
            isRecommended
              ? 'bg-gradient-to-br from-amber-50 to-orange-50/80 border-amber-200 shadow-sm'
              : 'bg-gradient-to-br from-slate-50 to-slate-100/50 border-slate-200 shadow-sm'
          }`}
        >
          <p className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider">
            Investimento
          </p>
          <p className="text-sm text-slate-600 font-medium mb-3 leading-relaxed">{priceHighlight}</p>
          <p
            className={`text-4xl font-black leading-none ${
              isRecommended
                ? 'bg-gradient-to-r from-[#734002] to-[#F2D06B] bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}
          >
            {installmentHighlight}
          </p>
        </div>

        <div className={`flex items-start gap-3 p-5 rounded-xl border transition-all duration-300 ${
          isRecommended 
            ? 'bg-amber-50/80 border-amber-200/80' 
            : 'bg-slate-50/80 border-slate-200'
        }`}>
          <CheckCircle2 className={`flex-shrink-0 mt-0.5 ${
            isRecommended ? 'text-amber-500' : 'text-slate-500'
          }`} size={18} />
          <p className="text-sm text-slate-700 leading-relaxed">{note}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/80">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 transform active:scale-95
          ${
            isOpen
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-md'
              : isRecommended
              ? 'bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white shadow-xl shadow-amber-300/50 hover:shadow-2xl hover:shadow-amber-300/60 hover:scale-[1.02]'
              : 'bg-gradient-to-r from-[#8C5C03] to-[#BF8C2C] text-white shadow-xl shadow-amber-300/40 hover:shadow-2xl hover:shadow-amber-300/50 hover:scale-[1.02]'
          }`}
        >
          {buttonText}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-sm text-slate-700 leading-relaxed space-y-3 bg-gradient-to-br from-slate-50 to-amber-50/40 p-6 rounded-2xl border border-slate-200 shadow-inner">
            {detailsContent}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exemplo de uso
export default function PricingExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-amber-50/30 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Escolha seu Plano</h2>
          <p className="text-slate-600 text-lg">Invista no seu futuro com as melhores condições</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <PricingCard
            title="Plano Básico"
            priceHighlight="Valor total à vista: R$ 5.000,00"
            installmentHighlight="10x R$ 550"
            note="Parcelamento sem juros no cartão de crédito. Condições especiais para pagamento à vista."
            buttonText="Ver Detalhes"
            detailsContent={
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Acesso completo à plataforma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Suporte por email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Material didático incluso</span>
                </li>
              </ul>
            }
          />
          
          <PricingCard
            title="Plano Completo"
            priceHighlight="Valor total à vista: R$ 8.500,00 com desconto especial"
            installmentHighlight="12x R$ 799"
            note="Melhor custo-benefício! Parcelamento facilitado e todas as vantagens incluídas. Suporte prioritário 24/7."
            buttonText="Ver Detalhes Completos"
            detailsContent={
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Tudo do plano básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Mentoria individual personalizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Certificado internacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Acesso vitalício às atualizações</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Comunidade exclusiva de membros</span>
                </li>
              </ul>
            }
            isRecommended
          />
        </div>
      </div>
    </div>
  );
}