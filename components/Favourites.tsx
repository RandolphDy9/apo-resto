import Image, { type StaticImageData } from "next/image";
import { favourites, type Favourite } from "@/lib/data";
import sisig from "@/public/images/1-sisig.jpg";
import bbq from "@/public/images/2-bbq.jpg";
import bopis from "@/public/images/3-bopis.jpg";
import pancit from "@/public/images/4-pancit.jpg";

const photos: Record<Favourite["image"], StaticImageData> = { sisig, bbq, bopis, pancit };

export function Favourites() {
  return (
    <section id="favourites">
      <div className="wrap">
        <div className="sec-head">
          <h2>What regulars order</h2>
          <p>New to Filipino food? Start with one of these and add garlic rice.</p>
        </div>
        <div className="favs">
          {favourites.map((f) => (
            <article className="fav" key={f.name}>
              <div className="fav-photo">
                <Image
                  src={photos[f.image]}
                  alt={f.alt}
                  placeholder="blur"
                  sizes="(max-width: 520px) 100vw, (max-width: 960px) 50vw, 280px"
                />
                <span className="tag">{f.tag}</span>
              </div>
              <div className="fav-body">
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
                {f.price ? (
                  <span className="price">{f.price}</span>
                ) : (
                  <span className="price ask">At the counter daily</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
