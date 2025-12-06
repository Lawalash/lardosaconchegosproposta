import React, { useState } from 'react';
import { Check, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

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
          ? 'bg-gradient-to-br from-white via-amber-50/60 to-orange-50/50 border-amber-200 shadow-2xl shadow-amber-200/60 ring-2 ring-amber-300/70 transform md:scale-105'
          : 'bg-white/80 border-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.02]'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-full shadow-lg animate-pulse">
          <Sparkles className="inline-block mr-1 -mt-1" size={14} />
          Proposta Completa
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
      </div>

      <div className="flex-grow space-y-5">
        <div
          className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
            isRecommended
              ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">
            Investimento
          </p>
          <p className="text-slate-700 font-medium mb-2">{priceHighlight}</p>
          <p
            className={`text-3xl font-black ${
              isRecommended
                ? 'bg-gradient-to-r from-[#734002] to-[#F2D06B] bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}
          >
            {installmentHighlight}
          </p>
        </div>

        <div className="flex items-start gap-2 p-4 bg-amber-50/70 rounded-xl border border-amber-100">
          <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-slate-600 leading-relaxed">{note}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105
          ${
            isOpen
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : isRecommended
              ? 'bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white shadow-xl shadow-amber-300/60 hover:shadow-2xl'
              : 'bg-gradient-to-r from-[#8C5C03] to-[#BF8C2C] text-white shadow-xl shadow-amber-300/50 hover:shadow-2xl'
          }`}
        >
          {buttonText}
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-sm text-slate-700 space-y-3 bg-gradient-to-br from-slate-50 to-amber-50/40 p-6 rounded-2xl border border-slate-200 shadow-inner">
            {detailsContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
