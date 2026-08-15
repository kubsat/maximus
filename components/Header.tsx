import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="Maximus home"><span>MAX</span>IMUS</Link>
      <nav aria-label="Main navigation">
        <Link href="/marketplace">AI Workers</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link className="button small" href="/demo-request">Book a demo</Link>
      </nav>
    </header>
  );
}
