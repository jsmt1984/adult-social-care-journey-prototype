"use client";

import { useState } from "react";

function ExpandableSection({ title, children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          fontSize: "1rem",
          color: "#2c5282",
          cursor: "pointer"
        }}
      >
        {open ? "▾ " : "▸ "} {title}
      </button>

      {open && (
        <div style={{ marginTop: "0.5rem", color: "#555" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Journey() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "4rem 2rem",
        maxWidth: "750px",
        margin: "0 auto",
        lineHeight: 1.7
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        How adult social care usually works
      </h1>

      <p style={{ marginBottom: "3rem", color: "#444" }}>
        Most adult social care journeys involve around eight stages.
        You can read through them in order to understand how the process
        typically unfolds.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Getting started
        </h2>

        <p style={{ color: "#555" }}>
          This is the first step in asking the council about possible support.
        </p>

        <ExpandableSection title="What this stage involves">
          <p>
            You contact the council to explain the situation and request support.
            You do not need to know whether someone is eligible before making contact.
          </p>
        </ExpandableSection>

        <ExpandableSection title="How this normally works in your area">
          <p>
            In most areas, initial contact is made by phone or online form.
            The council reviews the information and decides whether to arrange a needs assessment.
          </p>
        </ExpandableSection>

        <ExpandableSection title="What usually happens next">
          <ul>
            <li>A needs assessment is arranged.</li>
            <li>The council asks for further information.</li>
            <li>Advice or signposting is provided.</li>
          </ul>
        </ExpandableSection>
      </section>

    </main>
  );
}
