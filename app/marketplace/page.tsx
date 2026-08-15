import { MarketplaceCatalog } from "./MarketplaceCatalog";
import { workers } from "@/lib/workers";

export default function Marketplace() {
  return (
    <>
      <section className="pageHero">
        <span className="pill">THE MAXIMUS MARKETPLACE</span>
        <h1>Meet the workers<br /><em>built to deliver.</em></h1>
        <p>Eight specialists. Endless capacity. Choose the expertise your team needs today.</p>
      </section>
      <MarketplaceCatalog workers={workers} />
    </>
  );
}
