import Image from "next/image";
import { deliveryApps } from "@/lib/data";

export function Order() {
  return (
    <section id="order">
      <div className="wrap">
        <div className="sec-head">
          <h2>Order for delivery</h2>
          <p>Pick the app you already use. Each one opens our store page.</p>
        </div>
        <div className="apps">
          {deliveryApps.map((a) => (
            <a className="app" href={a.href} target="_blank" rel="noopener" key={a.name}>
              <span className="app-logo">
                <Image
                  src={a.logo}
                  alt=""
                  width={120}
                  height={120}
                  style={a.logoScale ? { transform: `scale(${a.logoScale})` } : undefined}
                />
              </span>
              <b>{a.name}</b>
              <span>{a.note}</span>
              <em>Order on {a.name}</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
