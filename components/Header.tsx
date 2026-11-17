import { SunLogo } from "./SunLogo";

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Apo Filipino Cuisine home">
          <SunLogo />
          <div>
            <b>APO</b>
            <span>Filipino Cuisine</span>
          </div>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#menu">Menu</a>
          <a href="#reviews">Reviews</a>
          <a href="#trays">Party packages</a>
          <a href="#visit">Visit</a>
          <a className="btn btn-mango" href="#order">Order online</a>
        </nav>
      </div>
    </header>
  );
}
