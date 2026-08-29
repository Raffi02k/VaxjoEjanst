import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../content";
import { ArrowIcon } from "./ArrowIcon";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const apiBase = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
      if (!apiBase) { await new Promise(resolve => window.setTimeout(resolve, 500)); form.reset(); setStatus("success"); return; }
      const response = await fetch(`${apiBase}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error(); form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }

  if (status === "success") return <div className="form-message" role="status"><span className="form-message__check">✓</span><h3>Tack för din förfrågan!</h3><p>Vi har tagit emot dina uppgifter och återkommer så snart vi kan.</p><button className="text-button" type="button" onClick={() => setStatus("idle")}>Skicka en ny förfrågan</button></div>;

  return <form className="contact-form" onSubmit={submit} id="offert">
    <div className="form-row"><label><span className="contact-form__label-text">Namn <span className="contact-form__required" aria-hidden="true">*</span></span><input name="name" required minLength={2} maxLength={100} placeholder="Ditt namn" autoComplete="name" /></label><label><span className="contact-form__label-text">Telefon <span className="contact-form__required" aria-hidden="true">*</span></span><input name="phone" type="tel" required minLength={5} maxLength={40} placeholder="070-000 00 00" autoComplete="tel" /></label></div>
    <div className="form-row"><label><span className="contact-form__label-text">E-post <span className="contact-form__required" aria-hidden="true">*</span></span><input name="email" type="email" required maxLength={160} placeholder="din@epost.se" autoComplete="email" /></label><label><span className="contact-form__label-text">Jag kontaktar er som</span><select name="customer_type" defaultValue="Privatperson"><option>Privatperson</option><option>Företag</option><option>Fastighetsägare / BRF</option></select></label></div>
    <div className="form-row"><label><span className="contact-form__label-text">Vad gäller förfrågan?</span><select name="service" defaultValue={defaultService || "Elinstallation & service"}>{services.map(s => <option key={s.slug}>{s.title}</option>)}<option>Felsökning</option><option>Annat</option></select></label><label><span className="contact-form__label-text">Ort / adress</span><input name="address" maxLength={180} placeholder="Var ska arbetet utföras?" autoComplete="street-address" /></label></div>
    <label><span className="contact-form__label-text">Berätta kort om arbetet <span className="contact-form__required" aria-hidden="true">*</span></span><textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Beskriv vad du behöver hjälp med, plats och önskad tidsplan." /></label>
    <label className="consent-row"><input name="consent" type="checkbox" required /><span>Jag godkänner att Växjö Eltjänst behandlar mina uppgifter för att hantera min förfrågan. Läs mer i <Link to="/integritet">integritetspolicyn</Link>.<span className="contact-form__required" aria-hidden="true">*</span></span></label>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {status === "error" && <p className="form-error" role="alert">Något gick fel. Försök igen eller ring 070-565 70 21.</p>}
    <button className="button button--dark button--full" type="submit" disabled={status === "sending"}>{status === "sending" ? "Skickar..." : "Skicka förfrågan"}{status !== "sending" && <ArrowIcon />}</button>
    <p className="form-note">Vi använder bara uppgifterna för att hantera din förfrågan och återkoppla om nästa steg.</p>
  </form>;
}
