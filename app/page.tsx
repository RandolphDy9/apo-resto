import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Favourites } from "@/components/Favourites";
import { Menu } from "@/components/Menu";
import { FacebookBand } from "@/components/FacebookBand";
import { Reviews } from "@/components/Reviews";
import { Trays } from "@/components/Trays";
import { Order } from "@/components/Order";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Apo Filipino Cuisine",
  servesCuisine: "Filipino",
  telephone: "+1-416-398-9777",
  address: {
    "@type": "PostalAddress",
    streetAddress: "373 Wilson Ave",
    addressLocality: "North York",
    addressRegion: "ON",
    postalCode: "M3H 1T3",
    addressCountry: "CA",
  },
  openingHours: "Mo-Su 08:00-20:40",
  sameAs: ["https://www.facebook.com/ApoFoodBathurstandWilson"],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#menu">Skip to menu</a>
      <Header />
      <main id="top">
        <Hero />
        <Favourites />
        <Menu />
        <FacebookBand />
        <Reviews />
        <Trays />
        <Order />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
