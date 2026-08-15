import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorker, workers } from "@/lib/workers";

export function generateStaticParams() {
  return workers.map(({ slug }) => ({ workerSlug: slug }));
}

export default async function WorkerPage({ params }: { params: Promise<{ workerSlug: string }> }) {
  const { workerSlug } = await params;
  const worker = getWorker(workerSlug);
  if (!worker) notFound();

  return (
    <section className="detail">
      <Link className="back" href="/marketplace">← All AI workers</Link>
      <div className="detailGrid">
        <div className="detailOverview">
          <div className={`avatar large ${worker.accent}`} aria-hidden="true">{worker.icon}</div>
          <span className="eyebrow">{worker.category} AI WORKER</span>
          <h1>Meet {worker.name}.</h1>
          <h2>{worker.role}</h2>
          <p className="lead">{worker.description}</p>
          <div className="detailValue">
            <span className="eyebrow">EXPECTED OUTCOME</span>
            <p>{worker.outcome}</p>
          </div>
          <Link className="button" href={`/demo-request?worker=${worker.slug}`}>Request a demo with {worker.name}</Link>
        </div>
        <div className="detailContent">
          <section className="detailPanel" aria-labelledby="capabilities-title">
            <span className="eyebrow">WHAT {worker.name.toUpperCase()} DOES</span>
            <h2 id="capabilities-title">Capabilities</h2>
            {worker.capabilities.map((item, index) => (
              <div className="capability" key={item}><b>0{index + 1}</b><span>{item}</span></div>
            ))}
          </section>
          <section className="detailPanel" aria-labelledby="workflows-title">
            <h2 id="workflows-title">Example workflows</h2>
            <ul>{worker.workflows.map((workflow) => <li key={workflow}>{workflow}</li>)}</ul>
          </section>
          <section className="buyerPanel" aria-labelledby="buyer-title">
            <span className="eyebrow">IDEAL BUYER / TEAM</span>
            <h2 id="buyer-title">Built for the team around the work.</h2>
            <p>{worker.idealBuyer}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
