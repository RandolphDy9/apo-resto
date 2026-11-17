import { site } from "@/lib/data";

export function MobileBar() {
  return (
    <div className="bar" role="navigation" aria-label="Quick actions">
      <a href={`tel:${site.phones[1].tel}`}>Call</a>
      <a href={site.directions} target="_blank" rel="noopener">Directions</a>
      <a className="go" href="#order">Order</a>
    </div>
  );
}
