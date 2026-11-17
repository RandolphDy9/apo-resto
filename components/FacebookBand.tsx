import { site } from "@/lib/data";
import { FacebookIcon } from "./FacebookIcon";

export function FacebookBand() {
  return (
    <section className="fb-band" aria-labelledby="fb-title">
      <div className="wrap">
        <FacebookIcon className="fb-mark" />
        <div className="fb-copy">
          <h2 id="fb-title">What&apos;s in the counter today?</h2>
          <p>
            We post on Facebook almost every day: fresh dishes, specials, new party trays and anything else happening at
            the shop. Follow us so you know what&apos;s cooking before you come in.
          </p>
        </div>
        <a className="btn btn-fb" href={site.facebook} target="_blank" rel="noopener">
          <FacebookIcon className="btn-icon" />
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
}
