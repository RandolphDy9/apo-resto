import Image from "next/image";
import { OpenStatus } from "./OpenStatus";
import diningRoom from "@/public/images/dining-room.jpg";

export function Hero() {
  return (
    <>
      <section className="hero" style={{ padding: 0 }}>
        <div className="wrap">
          <div className="hero-card">
            <h1>Kain tayo!</h1>
            <p className="gloss">That&apos;s &ldquo;let&apos;s eat&rdquo; in Tagalog.</p>
            <p className="lede">
              Filipino home cooking, made fresh every day and served hot from the counter at Bathurst and Wilson. Eat in or
              take it home.
            </p>
            <div className="cta">
              <a className="btn btn-mango" href="#order">Order online</a>
              <a className="btn btn-ghost" href="#menu">See the menu</a>
            </div>
            <OpenStatus />
          </div>
          <figure className="shot">
            <Image
              src={diningRoom}
              alt="Apo's dining room: black tables, black-and-white tiled floor, drink fridges and a red lechon on a green wall"
              priority
              placeholder="blur"
              sizes="(max-width: 820px) 100vw, 400px"
            />
            <figcaption>Tables inside, plus a new dining room next door</figcaption>
          </figure>
        </div>
      </section>
      <div className="banig" aria-hidden="true" />
    </>
  );
}
