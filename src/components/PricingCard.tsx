import './PricingCard.css';

type PricingCardProps = {
  title: string;
  priceHighlight: string;
  installmentHighlight: string;
  note: string;
  detailsContent: string[];
  summary: {
    base: string;
    implantation: string;
    hosting: string;
    total: string;
    installmentNote: string;
  };
};

export function PricingCard({
  title,
  priceHighlight,
  installmentHighlight,
  note,
  detailsContent,
  summary,
}: PricingCardProps) {
  return (
    <div className="pricing-card card">
      <header>
        <p className="badge">Investimento</p>
        <h3>{title}</h3>
        <p className="price-highlight">{priceHighlight}</p>
        <p className="installment">{installmentHighlight}</p>
        <p className="note">{note}</p>
      </header>

      <div className="grid columns">
        <div className="details">
          <h4>Entregas do projeto</h4>
          <ul>
            {detailsContent.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="summary card">
          <h4>Resumo de valores</h4>
          <div className="summary-row">
            <span>Projeto base</span>
            <strong>{summary.base}</strong>
          </div>
          <div className="summary-row">
            <span>Taxa de implantação</span>
            <strong>{summary.implantation}</strong>
          </div>
          <div className="summary-row">
            <span>Hospedagem (1 ano)</span>
            <strong>{summary.hosting}</strong>
          </div>
          <div className="summary-row total">
            <span>Investimento total</span>
            <strong>{summary.total}</strong>
          </div>
          <p className="installment-note">{summary.installmentNote}</p>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
