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
      className={`relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl transition-all duration-500 border backdrop-blur-sm
      ${
        isRecommended
          ? 'bg-gradient-to-br from-white via-amber-50/70 to-orange-50/60 border-amber-300/80 shadow-2xl shadow-amber-200/50 ring-2 ring-amber-400/60 md:scale-[1.03] lg:scale-105'
          : 'bg-white/90 border-slate-200/80 shadow-lg hover:shadow-2xl hover:scale-[1.01] hover:border-slate-300'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider py-2 px-4 sm:px-6 rounded-full shadow-xl shadow-amber-400/50">
          <Sparkles className="inline-block mr-1 -mt-0.5" size={12} />
          Proposta Completa
        </div>
      )}

      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex-grow space-y-4 sm:space-y-5">
        <div
          className={`p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
            isRecommended
              ? 'bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-amber-100/40 border-amber-300/70 shadow-md'
              : 'bg-gradient-to-br from-slate-50 to-slate-100/50 border-slate-200/80 shadow-sm'
          }`}
        >
          <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 font-bold uppercase tracking-widest">
            Investimento
          </p>
          <p className="text-sm sm:text-base text-slate-700 font-semibold mb-1 sm:mb-2 leading-snug">
            {priceHighlight}
          </p>
          <p
            className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-none ${
              isRecommended
                ? 'bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}
          >
            {installmentHighlight}
          </p>
        </div>

        <div className="flex items-start gap-2.5 sm:gap-3 p-4 sm:p-5 bg-amber-50/80 rounded-xl border border-amber-200/80 shadow-sm">
          <CheckCircle2 className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {note}
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-7 border-t border-slate-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 lg:py-5 px-5 sm:px-6 rounded-xl sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
          ${
            isOpen
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-md'
              : isRecommended
              ? 'bg-gradient-to-r from-[#734002] via-[#BF8C2C] to-[#F2D06B] text-white shadow-xl shadow-amber-400/60 hover:shadow-2xl hover:shadow-amber-400/70'
              : 'bg-gradient-to-r from-[#8C5C03] via-[#A67A1F] to-[#BF8C2C] text-white shadow-lg shadow-amber-300/50 hover:shadow-xl hover:shadow-amber-400/60'
          }`}
        >
          <span>{buttonText}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? 'max-h-[1200px] opacity-100 mt-5 sm:mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 sm:space-y-4 bg-gradient-to-br from-slate-50/90 via-white to-amber-50/50 p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-inner">
            {detailsContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;