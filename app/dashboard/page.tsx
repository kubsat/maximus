import Link from "next/link";
import { WorkerCard } from "@/components/WorkerCard";
import { workers } from "@/lib/workers";

const activeWorkers = workers.slice(0, 3);
const activity = [
  { text: "Atlas completed a market landscape brief", time: "1 hour ago" },
  { text: "Cleo escalated a priority support case", time: "2 hours ago" },
  { text: "Nova added 12 qualified prospects", time: "3 hours ago" },
];

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="demoNotice" role="note"><strong>Demo workspace</strong> All dashboard values and activity are illustrative mock data.</div>
      <div className="dashTop">
        <div><span className="eyebrow">BUYER DASHBOARD</span><h1>Good morning, Alex.</h1><p>Here&apos;s what your AI workforce is accomplishing.</p></div>
        <Link className="button" href="/marketplace">Explore marketplace</Link>
      </div>
      <div className="metricGrid" aria-label="Demo workforce metrics">
        <article><span>ACTIVE WORKERS</span><b>3</b><small>All workers operational</small></article>
        <article><span>TASKS COMPLETED</span><b>148</b><small>Demo total this month</small></article>
        <article><span>HOURS RETURNED</span><b>62</b><small>Estimated hours saved</small></article>
      </div>
      <div className="dashGrid">
        <section className="panel" aria-labelledby="workforce-title">
          <div className="panelHead"><h2 id="workforce-title">Active workers</h2><Link href="/marketplace">Add worker →</Link></div>
          {activeWorkers.map((worker) => (
            <div className="workerRow" key={worker.slug}>
              <div className={`avatar mini ${worker.accent}`} aria-hidden="true">{worker.icon}</div>
              <div><b>{worker.name}</b><span>{worker.role}</span></div><i>Active</i>
            </div>
          ))}
        </section>
        <section className="panel" aria-labelledby="activity-title">
          <div className="panelHead"><h2 id="activity-title">Recent activity</h2><span>Demo · Today</span></div>
          {activity.map((item) => <div className="activity" key={item.text}><b aria-hidden="true">✓</b><div>{item.text}<span>{item.time}</span></div></div>)}
        </section>
      </div>
      <section className="recommendations" aria-labelledby="recommended-title">
        <div className="sectionHead"><div><span className="eyebrow">GROW YOUR AI TEAM</span><h2 id="recommended-title">Recommended workers</h2></div><Link className="textLink" href="/marketplace">See all workers →</Link></div>
        <div className="cardGrid">{workers.slice(3, 5).map((worker) => <WorkerCard key={worker.slug} worker={worker} />)}</div>
      </section>
    </section>
  );
}
