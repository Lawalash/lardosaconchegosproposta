import { useMemo, useState } from 'react';
import './ContactModal.css';

const MAIN_PHONE = '558398861793';
const PARTNER_PHONE = '558389060130';

const CONTRACT_TEXT = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS – DESENVOLVIMENTO DE SITE INSTITUCIONAL

1. DAS PARTES

CONTRATANTE:
ILPI Aconchego dos Avós, doravante denominada CONTRATANTE.

CONTRATADO:
Ricardo Alexandre Brasil Júnior, brasileiro, maior, autônomo (pessoa física, sem CNPJ), CPF [SEU CPF], doravante denominado CONTRATADO.

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

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const message = useMemo(
    () =>
      'Olá, confirmo que li e aceito a proposta de desenvolvimento da landing page da ILPI Aconchego dos Avós, com valor de R$ 800,00 pagos em 10x de R$ 80,00, mais taxa de implantação de R$ 240,00 e hospedagem HostGator de R$ 118,75, conforme contrato enviado. A data de vencimento das parcelas será contada a partir da entrega (go-live) do site, a ser combinada entre as partes.',
    []
  );

  if (!open) return null;

  const handleSendApproval = (phone: string) => {
    if (!accepted) {
      setError('Para prosseguir, confirme que leu e concorda com o contrato.');
      return;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  };

  const handleDownload = () => {
    const blob = new Blob([CONTRACT_TEXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Contrato-ILPI-Aconchego-dos-Avos.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <header>
          <div>
            <p className="badge">Contrato</p>
            <h3>Proposta e contrato – ILPI Aconchego dos Avós</h3>
            <p className="subtitle">
              Leia com atenção os detalhes da proposta de desenvolvimento da landing page da ILPI
              Aconchego dos Avós. Marque a confirmação antes de enviar sua resposta pelo WhatsApp.
            </p>
          </div>
          <button className="close" onClick={onClose} aria-label="Fechar modal">
            ×
          </button>
        </header>

        <section className="contract">
          <pre>{CONTRACT_TEXT}</pre>
        </section>

        <label className="consent">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              setError('');
            }}
          />
          <span>Li e concordo com o contrato e com a proposta apresentada.</span>
        </label>
        {error && <p className="error">{error}</p>}

        <div className="actions">
          <button className="secondary" onClick={handleDownload}>
            Baixar contrato
          </button>
          <button className="primary" onClick={() => handleSendApproval(MAIN_PHONE)}>
            Encaminhar resposta (Ricardo)
          </button>
          <button className="primary" onClick={() => handleSendApproval(PARTNER_PHONE)}>
            Encaminhar resposta (Sócio)
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
