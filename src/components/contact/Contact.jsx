import { useState } from "react";
import { site } from "../../content/site";
import { contactAccessKey } from "../../content/contact-config";
import { Arrow, Icon } from "../Icons";
export default function Contact() {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  async function submit(event) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return;
    setState("sending");
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contactAccessKey,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          subject: `Portfolio enquiry from ${data.get("name")}`,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          "Your message couldn’t be sent. Please try again or email me directly.",
        );
      setState("sent");
      form.reset();
    } catch {
      setState("error");
      setError(
        "Your message couldn’t be sent. Please try again or email me directly.",
      );
    }
  }
  return (
    <section id="contact" className="contact-section section-space">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">CONTACT</div>
          <h2>Let’s connect.</h2>
          <p>
            For software development opportunities, project collaborations, or
            questions about my work, reach out by email or send a message.
          </p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email}
            <Arrow diagonal />
          </a>
          <div className="contact-socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub <Arrow diagonal />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="contact-form-card">
          <noscript>
            <p className="form-note">
              To send a message without JavaScript, email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </noscript>
          {state === "sent" ? (
            <div className="contact-success" role="status">
              <span>
                <Icon name="check" />
              </span>
              <h3>Message sent successfully.</h3>
              <p>
                Thank you for getting in touch. I’ll review your message and get
                back to you.
              </p>
              <button
                className="button-primary"
                onClick={() => setState("idle")}
              >
                Send another message <Arrow />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} aria-label="Send a message">
              <div className="form-intro">
                <h3>Send a message</h3>
                <p>Share a few details and I’ll get back to you.</p>
              </div>
              <label htmlFor="contact-name">
                Your name
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  maxLength={120}
                  disabled={state === "sending"}
                />
              </label>
              <label htmlFor="contact-email">
                Email address
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  disabled={state === "sending"}
                />
              </label>
              <label htmlFor="contact-message">
                Your message
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or opportunity…"
                  required
                  maxLength={5000}
                  disabled={state === "sending"}
                />
              </label>
              <div className="form-honeypot" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                className="button-primary form-submit"
                disabled={state === "sending"}
              >
                {state === "sending" ? "Sending your message…" : "Send message"}
                <Arrow diagonal />
              </button>
              <p className="form-note">
                Prefer your own inbox?{" "}
                <a href={`mailto:${site.email}`}>Send an email instead.</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
