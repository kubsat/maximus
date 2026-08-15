import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>
        <Link className="brand light" href="/" aria-label="Maximus home"><span>MAX</span>IMUS</Link>
        <p>AI workers, built for the work that matters.</p>
      </div>
      <nav className="footerLinks" aria-label="Footer navigation">
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/demo-request">Book a demo</Link>
      </nav>
      <small>© 2026 Maximus. All rights reserved.</small>
    </footer>
  );
}
