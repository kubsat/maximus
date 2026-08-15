import Link from "next/link";
export function Header() { return <header className="header"><Link className="brand" href="/"><span>MAX</span>IMUS</Link><nav><Link href="/marketplace">AI Workers</Link><Link href="/dashboard">Dashboard</Link><Link className="button small" href="/demo-request">Book a demo</Link></nav></header>; }
