export function TrustBar() {
  const items = [
    "Auktoriserad elinstallatör",
    "Snabb offertförfrågan",
    "Växjö med omnejd",
    "Privat · Företag · Fastighet",
    "13 engagerade medarbetare",
    "Grön Teknik & ROT-avdrag",
    "En del av SELATEK",
  ];

  return (
    <section className="trust-bar" aria-label="Snabbfakta">
      <div className="trust-bar__window">
        <div className="trust-bar__track">
          {[...items, ...items].map((text, i) => (
            <div className="trust-bar__item" key={i}>
              <span className="trust-bar__dot" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
