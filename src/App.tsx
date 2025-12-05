import { useMemo, useState } from 'react';
import ContactModal from './components/ContactModal';
import PricingCard from './components/PricingCard';
import LogoConnector from './components/LogoConnector';
import './App.css';

const PASSWORD = 'projeto2026';

function LoginView({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === PASSWORD) {
      onUnlock();
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card card">
        <p className="chip">Proposta exclusiva – Aconchego dos Avós</p>
        <h2>Proposta de Desenvolvimento de Site Institucional</h2>
        <p className="auth-desc">
          Proposta comercial personalizada para o desenvolvimento da landing page da ILPI Aconchego dos
          Avós, com foco em acolhimento, confiança e apresentação profissional da instituição.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="password">Digite a senha para acessar</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Use a senha projeto2026"
          />
          {error && <p className="error">{error}</p>}
          <button className="primary-btn" type="submit">
            Acessar proposta
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const projectHighlights = useMemo(
    () => [
      'Landing page institucional responsiva',
      'Seção sobre a ILPI e seus diferenciais de cuidado',
      'Área para apresentar estrutura física e serviços',
      'Botões de contato via WhatsApp estrategicamente posicionados',
      'Formulário de contato simples e objetivo',
      'Texto focado em acolhimento e confiança',
    ],
    []
  );

  const expectedResults = useMemo(
    () => [
      'Presença digital profissional e confiável',
      'Facilidade para familiares encontrarem informações',
      'Maior probabilidade de contato e agendamento de visitas',
    ],
    []
  );

  return (
    <div className="page">
      {unlocked ? (
        <>
          <header className="hero">
            <div className="container hero-grid">
              <div>
                <p className="chip">ILPI Aconchego dos Avós</p>
                <h1>Proposta de Desenvolvimento de Site Institucional</h1>
                <p className="subtitle">A2 Data × ILPI Aconchego dos Avós</p>
                <p className="hero-desc">
                  Landing page institucional moderna e acolhedora para apresentar o lar de idosos Aconchego
                  dos Avós com confiança, clareza e foco em conversão de contatos.
                </p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => setModalOpen(true)}>
                    Ver contrato e aprovar
                  </button>
                  <LogoConnector leftLabel="A2 Data" rightLabel="Aconchego dos Avós" />
                </div>
              </div>
              <div className="hero-card card">
                <p className="badge">Acordo</p>
                <h3>Site institucional focado em acolhimento</h3>
                <p>
                  Estruturamos uma landing page responsiva com mensagens que transmitem cuidado, segurança e
                  qualidade, facilitando o contato por WhatsApp e reforçando a confiança dos familiares.
                </p>
                <ul>
                  <li>Identidade visual em tons dourado e marrom</li>
                  <li>Foco em estrutura, equipe e conforto</li>
                  <li>CTA para agendar visita</li>
                </ul>
              </div>
            </div>
          </header>

          <main className="container">
            <section className="section card">
              <div className="section-header">
                <h2 className="section-title">O que vamos construir</h2>
                <p className="section-desc">
                  Vamos desenvolver uma landing page institucional moderna e acolhedora para a ILPI Aconchego dos
                  Avós, com foco em transmitir confiança, cuidado e humanização. O site será responsivo, pensado
                  para familiares que buscam um lar seguro para seus pais e avós, com acesso fácil às informações
                  essenciais e contato direto via WhatsApp.
                </p>
              </div>
              <div className="grid summary-grid">
                <div className="card highlight">
                  <h3>Entregas principais</h3>
                  <ul>
                    {projectHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card highlight dark">
                  <h3>Resultado esperado</h3>
                  <ul>
                    {expectedResults.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="section">
              <PricingCard
                title="Projeto de Landing Page – ILPI Aconchego dos Avós"
                priceHighlight="Valor do projeto: R$ 800,00 (landing page institucional) + Taxa de implantação: R$ 240,00 + Hospedagem (1 ano): R$ 118,75"
                installmentHighlight="10x de R$ 80,00"
                note="O valor do projeto é pago em 10 parcelas mensais de R$ 80,00. A taxa de implantação (ativação, configuração, publicação e integrações) no valor de R$ 240,00 e a hospedagem HostGator por 1 ano (R$ 118,75) serão combinadas e podem ser pagas em data próxima à publicação do site (go-live)."
                detailsContent={[
                  'Definição da estrutura da landing page',
                  'Criação do layout com base na identidade da Aconchego dos Avós',
                  'Desenvolvimento em React/Vite (landing page responsiva)',
                  'Seções: sobre a ILPI, benefícios, estrutura, serviços, dúvidas frequentes, contato',
                  'Botões de WhatsApp e formulário de contato',
                  'Otimização básica de SEO (títulos, descrições e textos)',
                  'Publicação em hospedagem HostGator',
                  'Pequenos ajustes após o go-live (período de estabilização)',
                ]}
                summary={{
                  base: 'R$ 800,00',
                  implantation: 'R$ 240,00',
                  hosting: 'R$ 118,75',
                  total: 'R$ 1.158,75',
                  installmentNote:
                    'Projeto em 10x de R$ 80,00. Taxa de implantação e hospedagem pagas à parte, em data próxima ao go-live.',
                }}
              />
            </section>

            <section className="section card">
              <h2 className="section-title">Manutenção e melhorias</h2>
              <p className="section-desc">
                Manutenções futuras (novas seções, funcionalidades ou integrações extras) não estão inclusas no valor
                inicial. Qualquer melhoria será discutida à parte, podendo ser um valor fechado por demanda ou um plano
                mensal de suporte, conforme preferência.
              </p>
            </section>

            <section className="cta-section card">
              <div>
                <p className="badge">Próximos passos</p>
                <h3>Pronta para apresentar o Aconchego dos Avós online?</h3>
                <p>
                  Leia o contrato e, ao concordar, envie a confirmação pelo WhatsApp. Seguiremos com a publicação e
                  ajustes finais para o go-live.
                </p>
              </div>
              <button className="primary-btn" onClick={() => setModalOpen(true)}>
                Abrir contrato e aprovar
              </button>
            </section>
          </main>

          <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
      ) : (
        <LoginView onUnlock={() => setUnlocked(true)} />
      )}
    </div>
  );
}

export default App;
