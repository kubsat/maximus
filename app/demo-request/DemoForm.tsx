"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getWorker, workers } from "@/lib/workers";

export function DemoForm() {
  const query = useSearchParams();
  const requestedSlug = query.get("worker") ?? "";
  const initialWorker = getWorker(requestedSlug) ? requestedSlug : "";
  const [sent, setSent] = useState(false);
  const [worker, setWorker] = useState(initialWorker);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSent(true);
  }

  if (sent) {
    const selectedWorker = getWorker(worker);
    return (
      <div className="formCard confirmation" role="status" tabIndex={-1}>
        <div aria-hidden="true">✓</div><span className="eyebrow">REQUEST RECEIVED</span>
        <h2>We&apos;ll be in touch.</h2>
        <p>Thanks for reaching out{selectedWorker ? ` about ${selectedWorker.name}` : ""}. A Maximus specialist will contact you to arrange your tailored demo.</p>
        <button className="secondary" type="button" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="formCard" onSubmit={submit}>
      <h2>Request your demo</h2><p className="requiredNote"><span aria-hidden="true">*</span> Required fields</p>
      <div className="twoCol">
        <label htmlFor="first-name">First name <span>*</span><input id="first-name" required name="firstName" autoComplete="given-name" placeholder="Ada" /></label>
        <label htmlFor="last-name">Last name <span>*</span><input id="last-name" required name="lastName" autoComplete="family-name" placeholder="Lovelace" /></label>
      </div>
      <label htmlFor="email">Work email <span>*</span><input id="email" required name="email" type="email" autoComplete="email" placeholder="ada@company.com" /></label>
      <label htmlFor="company">Company <span>*</span><input id="company" required name="company" autoComplete="organization" placeholder="Your company" /></label>
      <label htmlFor="worker">Worker you&apos;re interested in<select id="worker" value={worker} onChange={(event) => setWorker(event.target.value)}><option value="">Not sure yet</option>{workers.map((item) => <option key={item.slug} value={item.slug}>{item.name} — {item.role}</option>)}</select></label>
      <label htmlFor="goal">What would you like to achieve?<textarea id="goal" name="goal" rows={4} placeholder="Tell us about your team and goals..." /></label>
      <button className="button" type="submit">Request demo →</button>
      <small>This demo form does not save or submit data. By continuing, you agree to be contacted about Maximus.</small>
    </form>
  );
}
