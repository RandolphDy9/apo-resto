"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

function isOpenNow(): boolean {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: site.timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value) % 24;
  const m = Number(parts.find((p) => p.type === "minute")?.value);
  const now = h * 60 + m;
  return now >= site.opensAt && now < site.closesAt;
}

export function OpenStatus() {
  // null until mounted, so server and client render the same neutral text
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      try {
        setOpen(isOpenNow());
      } catch {
        setOpen(null);
      }
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const text =
    open === null
      ? `Open daily, ${site.hoursText}`
      : open
        ? "Open now until 8:40 pm"
        : `Closed now. Open daily, ${site.hoursText}`;

  return (
    <p className="status">
      <span className={`dot${open === null ? "" : open ? " open" : " closed"}`} />
      <span>{text}</span>
    </p>
  );
}
