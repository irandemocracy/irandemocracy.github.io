import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { countries, generateMailtoLink } from "@/lib/emailData";
import { toast } from "sonner";

export default function Home() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
      toast.success("Ready to send! Click on any country to compose the email.");
    } else {
      toast.error("Please enter your name");
    }
  };

  const handleSendEmail = (country: typeof countries[0]) => {
    if (!name.trim()) {
      toast.error("Please enter your name first");
      return;
    }
    const mailtoLink = generateMailtoLink(country, name);
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", width: "100%", padding: "5rem 1rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
          <img
            src="/images/hero-background.png"
            alt="Iran Revolution 2026"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", color: "var(--primary)", marginBottom: "1rem" }}>
            Iran Revolution 2026
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--foreground)" }}>
            Advocacy Email Generator
          </p>
          <div style={{ height: "4px", width: "6rem", backgroundColor: "var(--accent)", margin: "1.5rem auto" }}></div>
          <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "42rem", margin: "0 auto" }}>
            Send powerful advocacy emails to EU countries demanding action against the Islamic Republic's brutality and supporting the Iranian people's fight for freedom.
          </p>
        </div>
      </section>

      {/* Input Section */}
      <section style={{ padding: "3rem 1rem", backgroundColor: "var(--muted)" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label htmlFor="name" style={{ display: "block", fontSize: "0.875rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Your Name (for email signature)
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "0.75rem 1rem", fontSize: "1rem" }}
              />
              <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginTop: "0.5rem" }}>
                Your name will be used to sign the emails sent to government officials.
              </p>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "var(--primary)",
                color: "white",
                padding: "0.75rem 1rem",
                fontSize: "1.125rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Send size={20} />
              Generate Email Links
            </button>
          </form>
        </div>
      </section>

      {/* Countries Grid */}
      {submitted && (
        <section style={{ padding: "4rem 1rem", backgroundColor: "var(--background)" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem", padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "0.65rem", border: `1px solid var(--border)` }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>How it works:</h3>
              <ol style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                <li>1. Click "Send Email" on any country card</li>
                <li>2. Your default email client will open with the pre-filled email</li>
                <li>3. Review the email and send it to the government officials</li>
                <li>4. Repeat for other countries to maximize impact</li>
              </ol>
            </div>

            <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
              Select Countries to Contact
            </h2>
            <div style={{ height: "4px", width: "4rem", backgroundColor: "var(--accent)", margin: "0 auto 3rem" }}></div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {countries.map((country) => (
                <div
                  key={country.code}
                  style={{
                    overflow: "hidden",
                    border: `1px solid var(--border)`,
                    borderRadius: "0.65rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ backgroundImage: "linear-gradient(to right, rgba(196, 30, 58, 0.1), rgba(212, 175, 55, 0.1))", padding: "1.5rem", borderBottom: `1px solid var(--border)` }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
                      {country.name}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                      {country.language}
                    </p>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>
                      Send an advocacy email in {country.language} to government officials.
                    </p>
                    <button
                      onClick={() => handleSendEmail(country)}
                      style={{
                        width: "100%",
                        backgroundColor: "var(--accent)",
                        color: "var(--foreground)",
                        padding: "0.75rem 1rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      <Mail size={16} />
                      Send Email
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: "var(--muted)", borderTop: `1px solid var(--border)`, padding: "2rem 1rem", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>
          Stand with the Iranian people. Demand action. Support the revolution for freedom and democracy.
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
          Iran Revolution 2026 • Advocacy for Human Rights and Democratic Transition
        </p>
      </footer>
    </div>
  );
}
