"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { menu } from "@/lib/data";

export function Menu() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const pick = (i: number, focus = false) => {
    setActive(i);
    if (focus) {
      const el = tabRefs.current[i];
      el?.focus();
      el?.scrollIntoView({ block: "nearest", inline: "center" });
    }
  };

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const n = menu.length;
    if (e.key === "ArrowRight") pick((i + 1) % n, true);
    else if (e.key === "ArrowLeft") pick((i - 1 + n) % n, true);
    else if (e.key === "Home") pick(0, true);
    else if (e.key === "End") pick(n - 1, true);
    else return;
    e.preventDefault();
  };

  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="sec-head">
          <h2>The menu</h2>
          <p>We cook turo-turo style: the day&apos;s dishes are behind the glass, so you can point at whatever looks good.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Menu sections">
          {menu.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className="tab"
              role="tab"
              id={`t-${s.id}`}
              aria-controls={`p-${s.id}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => pick(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {s.label} <small>{s.sub}</small>
            </button>
          ))}
        </div>

        {menu.map((s, i) => (
          <div className="panel" role="tabpanel" id={`p-${s.id}`} aria-labelledby={`t-${s.id}`} hidden={i !== active} key={s.id}>
            {s.special && (
              <p className="special">
                <b>{s.special.title}</b> {s.special.text}
              </p>
            )}
            {s.items.map((it) => (
              <div className="item" key={it.name}>
                <h3>{it.name}</h3>
                <span className="price">{it.price}</span>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        ))}

        <p className="menu-note">
          Breakfast prices are in-store prices. Other prices are from our delivery menu and may differ in store. The counter
          changes daily, with more chicken, pork and beef dishes, specials and cold drinks. Have an allergy? Ask us before you
          order.
        </p>
      </div>
    </section>
  );
}
