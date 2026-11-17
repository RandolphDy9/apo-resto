import { packages, site } from "@/lib/data";

export function Trays() {
  const main = site.phones[0];
  return (
    <section className="trays" id="trays">
      <div className="wrap">
        <div className="sec-head">
          <h2>Party packages for the whole barkada</h2>
          <p>Birthdays, holidays, Noche Buena. Each package comes with lechon, cake, kakanin and noodles.</p>
        </div>
        <div className="pkgs">
          {packages.map((p) => (
            <article className="pkg" key={p.name}>
              <h3>{p.name}</h3>
              <p className="pax">{p.pax}</p>
              <p className="amt">{p.price}</p>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="cta">
          <a className="btn btn-mango" href={`tel:${main.tel}`}>Call {main.label} to book</a>
          <a className="btn btn-ghost" href={site.facebook} target="_blank" rel="noopener">Message us on Facebook</a>
        </div>
      </div>
    </section>
  );
}
