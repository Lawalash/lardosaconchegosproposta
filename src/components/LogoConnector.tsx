import './LogoConnector.css';

type LogoConnectorProps = {
  leftLabel: string;
  rightLabel: string;
};

export function LogoConnector({ leftLabel, rightLabel }: LogoConnectorProps) {
  return (
    <div className="logo-connector">
      <div className="logo-badge">{leftLabel}</div>
      <div className="connector-line" aria-hidden>
        <span />
      </div>
      <div className="logo-badge alt">{rightLabel}</div>
    </div>
  );
}

export default LogoConnector;
