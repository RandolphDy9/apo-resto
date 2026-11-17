import { deliveryApps, site } from "@/lib/data";

export function Footer() {
  const [p1, p2] = site.phones;
  const [uber, door, fantuan] = deliveryApps;
  return (
    <footer>
      <div className="wrap">
        <div>
          <b>Salamat po!</b>Thank you for eating with us.
        </div>
        <div>
          Apo Filipino Cuisine, 373 Wilson Ave, North York
          <br />
          <a href={`tel:${p1.tel}`}>{p1.label}</a> &nbsp; <a href={`tel:${p2.tel}`}>{p2.label}</a> &nbsp;{" "}
          <a href={site.facebook} target="_blank" rel="noopener">Facebook</a>
          <br />
          Order on{" "}
          <a href={uber.href} target="_blank" rel="noopener">{uber.name}</a>,{" "}
          <a href={door.href} target="_blank" rel="noopener">{door.name}</a> or{" "}
          <a href={fantuan.href} target="_blank" rel="noopener">{fantuan.name}</a>
        </div>
      </div>
    </footer>
  );
}
