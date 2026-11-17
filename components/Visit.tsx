import Image from "next/image";
import { site } from "@/lib/data";
import storefront from "@/public/images/storefront.jpg";

export function Visit() {
  const [p1, p2] = site.phones;
  return (
    <section className="visit" id="visit">
      <div className="wrap">
        <div>
          <h2>Find the blue building</h2>
          <dl>
            <div>
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Open every day, {site.hoursText}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${p1.tel}`}>{p1.label}</a> or <a href={`tel:${p2.tel}`}>{p2.label}</a>
              </dd>
            </div>
            <div>
              <dt>Eat in or take out</dt>
              <dd>Tables inside and in our new dining room next door</dd>
            </div>
          </dl>
          <div className="cta">
            <a className="btn btn-mango" href={site.directions} target="_blank" rel="noopener">Get directions</a>
            <a className="btn btn-ghost" href={site.facebook} target="_blank" rel="noopener">Follow on Facebook</a>
          </div>
        </div>
        <figure className="front">
          <Image
            src={storefront}
            alt="Apo Filipino Cuisine storefront: bright blue brick with a red-and-white sign, and the new dining area next door"
            placeholder="blur"
            sizes="(max-width: 820px) 100vw, 600px"
          />
          <figcaption>Look for the blue building. The dining room is the door to the right.</figcaption>
        </figure>
        <div className="map">
          <iframe
            title="Map showing Apo Food at 373 Wilson Ave"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.mapEmbed}
          />
        </div>
      </div>
    </section>
  );
}
