import { Link } from "react-router-dom";
import { ArrowIcon, PageMeta } from "../components";
import { locations } from "../content/locations";

export function LocationsIndexPage() {
  return (
    <div className="locations-index-page">
      <PageMeta
        title="Elektriker per Ort | Kronobergs län | Växjö Eltjänst"
        description="Se vilka orter i Kronobergs län som Växjö Eltjänst utför elinstallationer, laddboxar och elservice i. Välj din ort för att läsa mer och begära offert."
      />

      <div className="container">
        <header className="locations-index-hero">
          <span className="eyebrow">VERKSAMHETSOMRÅDEN</span>
          <h1>Auktoriserad elektriker i Kronoberg</h1>
          <p>
            Växjö Eltjänst utgår från Växjö och betjänar privatpersoner, bostadsrättsföreningar och företag i hela Kronobergs län. Välj din ort nedan för att se lokala eltjänster, ROT-information och begära kostnadsfri offert.
          </p>
        </header>

        <div className="locations-index-grid">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/orter/${loc.slug}`}
              className="location-index-card"
            >
              <div>
                <h3>Elektriker i {loc.name}</h3>
                <div className="location-card-region">{loc.region}</div>
                <div className="location-card-nearby">
                  {loc.nearbyAreas.slice(0, 5).join(" · ")}
                </div>
              </div>
              <span className="location-card-link-text">
                Läs mer om {loc.name} <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
