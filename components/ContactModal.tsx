import React, { useState } from 'react';
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

const PRIMARY_WHATSAPP = '5583993725984';   // seu número (DDI + DDD + número)

const CONTRACT_TEXT = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS – DESENVOLVIMENTO DE SITE INSTITUCIONAL

1. DAS PARTES

CONTRATANTE:
ILPI Aconchego dos Avós, inscrita no CNPJ sob nº 61.844.415/0001-36, doravante denominada CONTRATANTE.

CONTRATADO:
Ricardo Alexandre Brasil Júnior, brasileiro, maior, autônomo (pessoa física, sem CNPJ), CPF 704.908.144-25, doravante denominado CONTRATADO.

2. DO OBJETO

2.1. O presente instrumento tem por objeto a prestação de serviços de criação e desenvolvimento de uma landing page institucional (site de página única) para a ILPI Aconchego dos Avós, incluindo layout, desenvolvimento front-end, configurações básicas e publicação em ambiente de hospedagem.

2.2. O objetivo do projeto é apresentar a ILPI Aconchego dos Avós de forma profissional, acolhedora e clara, destacando seus serviços, estrutura e diferenciais, com canais de contato facilitados para familiares interessados.

3. DO ESCOPO DOS SERVIÇOS

3.1. O CONTRATADO se compromete a executar, no mínimo, as seguintes atividades:
a) Definição da estrutura da landing page (seções, blocos de conteúdo e navegação);
b) Criação do layout com base na identidade visual da ILPI Aconchego dos Avós;
c) Desenvolvimento do site em tecnologia moderna (React/Vite ou similar), responsivo para dispositivos móveis e computadores;
d) Criação de seções como: apresentação da ILPI, diferenciais de cuidado, estrutura, serviços, depoimentos (se fornecidos), dúvidas frequentes (se fornecidas) e área de contato;
e) Inclusão de botões de contato via WhatsApp e/ou formulário de contato simples;
f) Configurações básicas de SEO on-page (títulos, descrições e textos otimizados de forma simples);
g) Publicação do site em serviço de hospedagem contratado pela CONTRATANTE (HostGator ou equivalente), incluindo apontamento de domínio, se necessário;
h) Ajustes pontuais após o go-live, dentro de um período de estabilização previamente combinado entre as partes.

3.2. Qualquer atividade que extrapole o escopo descrito acima (como desenvolvimento de novas páginas, integrações complexas adicionais, áreas restritas, painéis administrativos, sistemas de cadastro interno ou funcionalidades avançadas) será considerada serviço adicional e deverá ser discutida e aprovada em orçamento à parte.

4. DAS ENTREGAS, PRAZOS E TREINAMENTO

4.1. A data de entrega do projeto (go-live) será ajustada em comum acordo entre CONTRATANTE e CONTRATADO, levando em consideração:
– a disponibilidade de conteúdos (textos, fotos, logotipo) fornecidos pela CONTRATANTE;
– o tempo de desenvolvimento e testes;
– a liberação de acesso à hospedagem e ao domínio.

4.2. Entende-se por entrega (go-live) o momento em que:
a) o site estiver publicado no domínio ou subdomínio indicado pela CONTRATANTE;
b) as principais seções acordadas estiverem implementadas e funcionais;
c) tiverem sido realizados os testes básicos de navegação em dispositivos desktop e mobile.

4.3. O CONTRATADO poderá disponibilizar uma breve orientação (online) sobre o uso básico do site, se houver painel de gerenciamento simples ou se for necessário explicar pontos específicos de operação.

5. DO VALOR E FORMA DE PAGAMENTO

5.1. O valor do projeto de desenvolvimento da landing page é de R$ 800,00 (oitocentos reais).

5.2. As partes acordam que o valor de R$ 800,00 será pago em 10 (dez) parcelas mensais de R$ 80,00 (oitenta reais), com vencimento contado a partir da data de entrega (go-live) do site. A data exata de vencimento será combinada entre as partes, preferencialmente por mensagem escrita (WhatsApp ou e-mail).

5.3. Além do valor do projeto, haverá:
a) Taxa de implantação (ativação, configuração, publicação e integrações básicas) no valor de R$ 240,00 (duzentos e quarenta reais), com forma e data de pagamento a combinar entre as partes, preferencialmente próxima ao go-live;
b) Valor de hospedagem anual (HostGator ou similar), atualmente estimado em R$ 118,75 (cento e dezoito reais e setenta e cinco centavos), a ser pago pela CONTRATANTE de forma única para ativação do plano de hospedagem.

5.4. A soma total estimada do investimento (projeto + taxa de implantação + hospedagem) é de R$ 1.158,75 (um mil cento e cinquenta e oito reais e setenta e cinco centavos), podendo haver pequenas variações no valor da hospedagem conforme promoção ou política da empresa fornecedora.

5.5. O não pagamento de qualquer parcela na data combinada poderá implicar:
a) suspensão temporária de suporte e atividades relacionadas ao projeto;
b) renegociação do cronograma de pagamentos entre as partes.

6. DA MANUTENÇÃO E MELHORIAS FUTURAS

6.1. A presente proposta não inclui manutenção contínua ou plano mensal de suporte após a estabilização inicial.

6.2. Correções de erros diretamente relacionados à implementação do CONTRATADO dentro do escopo definido serão tratadas sem custo adicional dentro de um período razoável após o go-live, a combinar entre as partes.

6.3. Novas melhorias, alterações de layout, inclusão de novas seções, integrações adicionais ou qualquer outro tipo de evolução do site serão orçadas à parte, podendo ser cobradas:
a) por demanda fechada (valor único por melhoria), ou
b) por plano mensal de suporte, caso as partes assim desejem.

7. DAS RESPONSABILIDADES DA CONTRATANTE

7.1. A CONTRATANTE se compromete a:
a) fornecer logotipo, textos, fotos e demais conteúdos necessários ao site em tempo hábil;
b) disponibilizar acessos e credenciais para hospedagem e domínio, quando aplicável;
c) revisar os conteúdos e informar ao CONTRATADO eventuais correções necessárias;
d) cumprir os prazos de pagamento estabelecidos neste contrato.

8. DAS RESPONSABILIDADES DO CONTRATADO

8.1. O CONTRATADO se compromete a:
a) executar os serviços com zelo, cuidado técnico e boa-fé;
b) manter a CONTRATANTE atualizada sobre o andamento do projeto;
c) tratar de forma confidencial as informações e acessos fornecidos pela CONTRATANTE;
d) entregar o site conforme o escopo definido neste instrumento.

9. DA CONFIDENCIALIDADE

9.1. Ambas as partes se obrigam a manter sigilo sobre dados, acessos e informações sensíveis às quais tenham acesso em razão deste contrato, não podendo repassá-las a terceiros sem autorização expressa da outra parte.

10. DA VIGÊNCIA E RESCISÃO

10.1. Este contrato entra em vigor na data de aceitação da proposta pela CONTRATANTE e permanece vigente até a conclusão do projeto e quitação integral dos valores pactuados.

10.2. O contrato poderá ser rescindido por qualquer das partes, mediante comunicação prévia, preferencialmente por escrito (WhatsApp, e-mail), sendo feito acerto proporcional dos valores referentes às etapas já executadas.

11. DISPOSIÇÕES GERAIS

11.1. Este instrumento tem caráter de proposta/contrato simplificado entre pessoas físicas, não substituindo eventual contrato formal elaborado por profissional jurídico, caso as partes assim desejem.

11.2. Os casos omissos serão resolvidos de comum acordo entre CONTRATANTE e CONTRATADO.`;

interface ContactModalProps {
  isOpen: boolean;
  type: 'approval' | 'doubt';
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, type, onClose }) => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);

    try {
      const win = window.open('', '_blank');
      if (!win) {
        alert('Por favor, permita pop-ups para baixar o PDF');
        setIsGeneratingPDF(false);
        return;
      }

      win.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8" />
            <title>Contrato – Landing Page ILPI Aconchego dos Avós</title>
            <style>
              @media print {
                body { margin: 0; padding: 20px; }
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                margin: 40px auto;
                padding: 0 24px;
                max-width: 820px;
                line-height: 1.7;
                color: #0f172a;
                background: white;
              }
              h1 {
                text-align: center;
                font-size: 22px;
                margin-bottom: 32px;
                color: #1e293b;
                border-bottom: 3px solid #BF8C2C;
                padding-bottom: 16px;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                font-family: inherit;
                font-size: 13px;
                line-height: 1.6;
              }
              .footer {
                margin-top: 40px;
                font-size: 11px;
                color: #64748b;
                text-align: center;
                border-top: 1px solid #e2e8f0;
                padding-top: 16px;
              }
            </style>
          </head>
          <body>
            <h1>CONTRATO – DESENVOLVIMENTO DE SITE INSTITUCIONAL<br>ILPI ACONCHEGO DOS AVÓS</h1>
            <pre>${CONTRACT_TEXT.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            <div class="footer">
              Documento gerado digitalmente em ${new Date().toLocaleDateString('pt-BR')} • A2 Data | Projeto Landing Page Institucional
            </div>
          </body>
        </html>
      `);

      win.document.close();

      setTimeout(() => {
        win.focus();
        win.print();
        setIsGeneratingPDF(false);
      }, 300);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Por favor, tente novamente.');
      setIsGeneratingPDF(false);
    }
  };

  const handleSendApproval = () => {
    if (!hasAccepted) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    const message = encodeURIComponent(
      'Olá, confirmo que li e aceito a proposta de desenvolvimento da landing page da ILPI Aconchego dos Avós, com valor de R$ 800,00 pagos em 10x de R$ 80,00, mais taxa de implantação de R$ 240,00 e hospedagem HostGator de R$ 118,75, conforme contrato enviado. A data de vencimento das parcelas será contada a partir da entrega (go-live) do site, a ser combinada entre as partes.'
    );

    // Envia apenas para o seu número
    window.open(`https://wa.me/${PRIMARY_WHATSAPP}?text=${message}`, '_blank');

    setShowSuccess(true);
  };

  const handleDoubtContact = () => {
    const message = encodeURIComponent(
      'Olá! Tenho algumas dúvidas sobre a proposta de desenvolvimento da landing page da ILPI Aconchego dos Avós. Poderia me ajudar?'
    );
    window.open(`https://wa.me/${PRIMARY_WHATSAPP}?text=${message}`, '_blank');
  };

  // Modal de dúvidas
  if (type === 'doubt') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md sm:max-w-lg w-full p-6 sm:p-8 transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={22} />
          </button>

          <div className="text-center mb-8 mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageCircle size={14} />
              Tire suas dúvidas
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Estamos aqui para ajudar
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Entre em contato conosco pelo WhatsApp e responderemos todas as suas perguntas sobre a proposta da ILPI Aconchego dos Avós.
            </p>
          </div>

          <button
            onClick={handleDoubtContact}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#734002] via-[#8C5C03] to-[#F2D06B] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    );
  }

  // type === 'approval'
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={!showSuccess ? onClose : undefined}
      />

      <div className="relative bg-white w-full h-full md:h-auto md:max-h-[95vh] md:rounded-3xl md:shadow-2xl md:max-w-7xl md:my-4 overflow-hidden flex flex-col">
        {/* Barra superior colorida */}
        <div className="h-1.5 md:h-2 w-full bg-gradient-to-r from-[#734002] via-[#8C5C03] to-[#F2D06B] flex-shrink-0" />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 text-slate-600 hover:text-slate-900 hover:bg-white transition-all shadow-lg"
        >
          <X size={20} />
        </button>

        {!showSuccess ? (
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header Badge */}
              <div className="mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <FileText size={16} />
                  Aprovação de Proposta – Landing Page Institucional
                </div>
              </div>

              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* COLUNA ESQUERDA – Resumo + Aceite */}
                <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 leading-tight">
                      Confirme sua proposta com segurança
                    </h2>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Esta proposta formaliza o desenvolvimento da{' '}
                      <span className="font-semibold text-[#BF8C2C]">landing page institucional</span> da{' '}
                      <span className="font-semibold text-[#BF8C2C]">ILPI Aconchego dos Avós</span>, incluindo layout,
                      desenvolvimento, configuração, publicação e orientações iniciais de uso.
                    </p>
                  </div>

                  {/* Bloco de investimento */}
                  <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
                      💰 Investimento acordado
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Projeto (landing page)</span>
                          <span className="text-2xl font-black text-slate-900">R$ 800,00</span>
                        </div>
                        <div className="flex items-center justify-between pl-4">
                          <span className="text-xs text-slate-500">Parcelas do projeto</span>
                          <span className="text-lg font-bold text-[#BF8C2C]">10x de R$ 80,00</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-amber-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Taxa de implantação</span>
                          <span className="text-xl font-bold text-slate-900">R$ 240,00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Hospedagem anual</span>
                          <span className="text-xl font-bold text-slate-900">R$ 118,75</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t-2 border-amber-300">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold text-slate-900">Total estimado</span>
                          <span className="text-3xl font-black text-[#BF8C2C]">R$ 1.158,75</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mt-3">
                        <p className="text-xs text-blue-800 leading-relaxed">
                          💡 <strong>Importante:</strong> As parcelas do projeto começam após a entrega (go-live) do site,
                          e a taxa de implantação + hospedagem podem ser combinadas para data próxima à publicação.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Etapas em destaque */}
                  <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">
                      📋 Como funciona
                    </p>
                    <ol className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BF8C2C] text-white text-xs font-bold flex items-center justify-center">1</span>
                        <span>Leia o contrato completo e confira todas as condições</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BF8C2C] text-white text-xs font-bold flex items-center justify-center">2</span>
                        <span>Marque o aceite e envie a aprovação automaticamente pelo WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BF8C2C] text-white text-xs font-bold flex items-center justify-center">3</span>
                        <span>Alinhamos a data de go-live e iniciamos o desenvolvimento do site</span>
                      </li>
                    </ol>
                  </div>

                  {/* Aceite */}
                  <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-lg">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasAccepted}
                        onChange={(e) => {
                          setHasAccepted(e.target.checked);
                          setShowError(false);
                        }}
                        className="mt-1 w-6 h-6 rounded-md border-2 border-amber-400 text-[#BF8C2C] focus:ring-2 focus:ring-[#BF8C2C]/30 cursor-pointer transition-all"
                      />
                      <span className="flex-1 text-sm font-bold text-slate-900 group-hover:text-[#BF8C2C] transition-colors leading-relaxed">
                        Declaro que li e estou de acordo com todos os termos deste contrato e com as condições de pagamento descritas
                      </span>
                    </label>
                    <p className="text-xs text-slate-600 mt-3 ml-10 leading-relaxed">
                      Ao marcar esta opção e clicar em "Enviar aprovação", você confirma digitalmente via WhatsApp.
                    </p>
                  </div>

                  {showError && (
                    <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-300 rounded-2xl px-4 py-4 animate-shake shadow-sm">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="font-semibold">
                        Por favor, confirme que leu e aceita os termos antes de prosseguir.
                      </span>
                    </div>
                  )}

                  {/* Botões */}
                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleDownloadPDF}
                      disabled={isGeneratingPDF}
                      className="flex-1 inline-flex items-center justify-center gap-3 border-2 border-slate-300 bg-white text-slate-700 font-bold text-base py-4 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    >
                      <Download size={20} />
                      {isGeneratingPDF ? 'Gerando...' : 'Baixar contrato em PDF'}
                    </button>

                    <button
                      onClick={handleSendApproval}
                      className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#8C5C03] via-[#BF8C2C] to-[#F2D06B] text-white font-black text-base py-4 px-6 rounded-xl shadow-xl shadow-amber-300/40 hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-200"
                    >
                      <CheckCircle2 size={20} />
                      Enviar aprovação
                    </button>
                  </div>
                </div>

                {/* COLUNA DIREITA – Contrato */}
                <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 lg:p-5 flex flex-col shadow-lg order-1 lg:order-2 lg:sticky lg:top-0">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                      📄 Contrato completo
                    </p>
                    <p className="text-sm text-slate-600">
                      Leia todos os termos antes de aceitar
                    </p>
                  </div>

                  <div className="flex-1 rounded-xl bg-white border-2 border-slate-200 shadow-inner overflow-hidden">
                    <div className="h-[400px] lg:h-[840px] overflow-y-auto p-4 lg:p-5 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                      {CONTRACT_TEXT}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 mt-4">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      💡 <strong>Dica:</strong> Use o PDF para arquivar o contrato ou assinar digitalmente se preferir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
            <div className="text-center max-w-md">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-6 animate-bounce shadow-xl">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Aprovação enviada! 🎉
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                Sua confirmação foi enviada com sucesso pelo WhatsApp. Em breve retornaremos
                com o alinhamento da data de go-live e próximos passos para o site da ILPI Aconchego dos Avós.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#8C5C03] to-[#F2D06B] text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg text-base"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }
        .scrollbar-track-slate-100::-webkit-scrollbar-track {
          background-color: #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
