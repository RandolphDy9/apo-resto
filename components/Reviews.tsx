import { reviews, site } from "@/lib/data";

export function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="sec-head">
          <h2>What our customers say</h2>
          <div className="scores">
            <p>
              <b>100%</b>recommend us on Facebook
              <br />
              <small>13 reviews</small>
            </p>
            <p>
              <b>4.6</b>stars on Uber Eats
              <br />
              <small>out of 5</small>
            </p>
          </div>
        </div>
        <div className="revs">
          {reviews.map((r) => (
            <figure className="rev" key={r.author}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              {r.gloss && <p className="gl">{r.gloss}</p>}
              <figcaption>
                <b>{r.author}</b>
                <span>Recommends on Facebook</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="cta">
          <a className="btn btn-ink" href={site.facebookReviews} target="_blank" rel="noopener">Read all reviews</a>
          <a className="btn btn-line" href={site.facebookReviews} target="_blank" rel="noopener">Leave us a review</a>
        </div>
      </div>
    </section>
  );
}
