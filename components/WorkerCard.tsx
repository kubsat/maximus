import Link from "next/link";
import type { Worker } from "@/lib/workers";

export function WorkerCard({ worker }: { worker: Worker }) {
  return (
    <article className="workerCard">
      <div className={`avatar ${worker.accent}`} aria-hidden="true">{worker.icon}</div>
      <span className="eyebrow">{worker.category}</span>
      <h3>{worker.name}</h3>
      <h4>{worker.role}</h4>
      <p>{worker.description}</p>
      <div className="cardOutcome">
        <span>Primary outcome</span>
        <strong>{worker.outcome}</strong>
      </div>
      <Link className="textLink" href={`/marketplace/${worker.slug}`} aria-label={`View ${worker.name}, ${worker.role}`}>
        View worker <b aria-hidden="true">→</b>
      </Link>
    </article>
  );
}
