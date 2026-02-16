"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { laContent, StageId } from "../data/laContent";

type Stage = {
  id: StageId;
  title: string;
  summary: string;
  involves: string;
  localFallback: string;
  next: string[];
};

function ExpandableSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
          cursor: "pointer",
        }}
        aria-expanded={open}
      >
        {open ? "▾ " : "▸ "} {title}
      </button>

      {open && (
        <div style={{ marginTop: "0.6rem", color: "#555" }}>{children}</div>
      )}
    </div>
  );
}

function normalisePostcode(raw: string) {
  return (raw || "").trim().toUpperCase().replace(/\s+/g, "");
}

function lookupLocalAuthority(postcodeRaw: string) {
  const pc = normalisePostcode(postcodeRaw);
  if (!pc) return "your area";

  // Rough demo mapping (replace with real lookup later)
  if (pc.startsWith("SW1") || pc.startsWith("W1") || pc.startsWith("SE1")) {
    return "Westminster City Council";
  }
  if (pc.startsWith("M1") || pc.startsWith("M2") || pc.startsWith("M3")) {
    return "Manchester City Council";
  }
  if (pc.startsWith("B1") || pc.startsWith("B2") || pc.startsWith("B3")) {
    return "Birmingham City Council";
  }

  return "Countyshire Council";
}

export default function JourneyClient({
  who,
  postcode,
}: {
  who: "self" | "other";
  postcode: string;
}) {
  const localAuthorityName = useMemo(
    () => lookupLocalAuthority(postcode),
    [postcode]
  );

  const isForSomeoneElse = who === "other";
  const subjectShort = isForSomeoneElse ? "the person you support" : "you";
  const subjectPossessive = isForSomeoneElse ? "their" : "your";

  // Pick LA-specific content (fallback to Countyshire)
  const la = laContent[localAuthorityName] || laContent["Countyshire Council"];

  const stages: Stage[] = useMemo(
    () => [
      {
        id: "getting-started",
        title: "Getting started",
        summary:
          "This is the first step in asking the council about possible support.",
        involves:
          `You contact the council to explain the situation and request support for ${subjectShort}. You do not need to know whether ${subjectShort} are eligible before making contact.`,
        localFallback:
          `In ${localAuthorityName}, initial contact is usually made by phone or online form. The council reviews what you’ve shared and decides whether to arrange a needs assessment.`,
        next: [
          "A needs assessment is arranged.",
          "The council asks for further information before deciding.",
          "Advice or signposting is provided if formal assessment is not required.",
        ],
      },
      {
        id: "understanding-needs",
        title: "Understanding your needs",
        summary:
          "A conversation about what daily life is like and what support might help.",
        involves:
          `This stage is about understanding ${subjectPossessive} day-to-day needs and the outcomes that matter. It may involve questions about daily activities, safety, wellbeing, and informal support already in place.`,
        localFallback:
          `In ${localAuthorityName}, assessments may be done by phone, online, or in person depending on circumstances and urgency. You can ask for reasonable adjustments if needed.`,
        next: [
          "The council records the assessment and considers eligibility.",
          "You may be asked for clarification or additional details.",
          "If risks are identified, safeguarding routes may also be considered.",
        ],
      },
      {
        id: "eligibility",
        title: "Deciding what support is available",
        summary:
          "The council decides whether needs meet the national eligibility criteria.",
        involves:
          "The council decides whether the assessed needs meet the national eligibility threshold. This decision should be explained clearly, including reasons where relevant.",
        localFallback:
          `In ${localAuthorityName}, the decision may be provided by letter, email, portal update, or phone call. If anything is unclear, you can ask how the decision was reached.`,
        next: [
          "If eligible, care and support planning follows.",
          "If not eligible, you should receive advice and information about other options.",
          "You can ask for the decision to be explained in writing.",
        ],
      },
      {
        id: "planning",
        title: "Planning your support",
        summary: "Agreeing how eligible needs will be met.",
        involves:
          `This stage turns assessed needs into a plan: what support will be provided, how often, and what it is aiming to achieve. ${
            subjectShort === "you" ? "You" : "You and the person you support"
          } should be involved in shaping the plan.`,
        localFallback:
          `In ${localAuthorityName}, planning may be done by a social worker or a dedicated team. You can ask about options such as direct payments where appropriate.`,
        next: [
          "A personal budget is identified.",
          "Arrangements begin for services or payments.",
          "A financial assessment may happen alongside or shortly after planning.",
        ],
      },
      {
        id: "cost",
        title: "Working out the cost",
        summary: "The council assesses how much you may need to contribute.",
        involves:
          `Adult social care is usually means-tested. The council gathers information about income, savings, and certain expenses to work out any contribution towards ${subjectPossessive} care.`,
        localFallback:
          `In ${localAuthorityName}, you may be asked to provide documents (for example, bank statements or pension details). The council should explain how the calculation works and what happens if information is missing.`,
        next: [
          "You receive a contribution decision (how much will be paid).",
          "If care starts, invoices may begin after this stage.",
          "If you disagree, you can query or challenge the calculation.",
        ],
      },
      {
        id: "putting-in-place",
        title: "Putting support in place",
        summary: "Arranging services or payments so care can begin.",
        involves:
          "This is where agreed support is set up. That might be council-arranged services, support you arrange yourself, or direct payments to help organise care.",
        localFallback:
          `In ${localAuthorityName}, this stage may involve matching with providers, agreeing start dates, and confirming what will be delivered. Sometimes availability affects timescales.`,
        next: [
          "Support starts (or interim arrangements are made).",
          "You receive confirmation of what has been arranged.",
          "A first review is usually planned after support begins.",
        ],
      },
      {
        id: "review",
        title: "Reviewing and adjusting support",
        summary:
          "Checking whether support is working and making changes if needed.",
        involves:
          "Support should be reviewed to check it’s meeting needs and outcomes. Reviews can also happen if circumstances change — for example, health changes, a carer’s situation changes, or support isn’t working.",
        localFallback:
          `In ${localAuthorityName}, reviews may be scheduled routinely or triggered by a request. If support isn’t meeting needs, you can ask for a review.`,
        next: [
          "Support continues as-is, or changes are made.",
          "Needs may be reassessed if circumstances have changed.",
          "Financial contributions may be recalculated if required.",
        ],
      },
      {
        id: "concerns",
        title: "Raising concerns or questions",
        summary: "How to raise issues, complaints, or safeguarding concerns.",
        involves:
          "This stage covers anything that doesn’t feel right — from questions about decisions or invoices, to concerns about care quality or safety.",
        localFallback:
          `In ${localAuthorityName}, there will be a complaints process and a safeguarding contact route. Advocacy support organisations may also be available locally.`,
        next: [
          "The council responds and explains what will happen next.",
          "If safeguarding is involved, enquiries may be initiated.",
          "If a complaint isn’t resolved, you may be able to escalate (for example, to the Ombudsman).",
        ],
      },
    ],
    [localAuthorityName, subjectPossessive, subjectShort]
  );

  // Locator state
  const [whereNow, setWhereNow] = useState<string>("");

  // Map stage id -> DOM node
  const stageRefs = useRef<Record<string, HTMLElement | null>>({});
  const setStageRef = (id: string) => (el: HTMLElement | null) => {
    stageRefs.current[id] = el;
  };

  // Scroll when selection changes
  useEffect(() => {
    if (!whereNow) return;
    const el = stageRefs.current[whereNow];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [whereNow]);

  const dotTop = 8;

  const dotStyle = (active: boolean) => ({
    position: "absolute" as const,
    left: "20px",
    top: dotTop,
    width: "14px",
    height: "14px",
    borderRadius: "999px",
    background: active ? "#2c5282" : "#fff",
    border: active ? "2px solid #2c5282" : "2px solid #cfd8e3",
    boxSizing: "border-box" as const,
    transition: "all 150ms ease",
  });

  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "4rem 1.5rem",
        maxWidth: "980px",
        margin: "0 auto",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
        How adult social care usually works in {localAuthorityName}
      </h1>

      <p style={{ marginBottom: "1.25rem", color: "#444", maxWidth: "780px" }}>
        Most adult social care journeys involve around eight stages. The details
        vary by area, but the overall shape is broadly the same.
      </p>

      <p style={{ marginBottom: "1.5rem", color: "#555", maxWidth: "780px" }}>
        This version is tailored for{" "}
        <strong>{isForSomeoneElse ? "someone you support" : "you"}</strong>
        {postcode.trim() ? (
          <>
            {" "}
            based on postcode <strong>{postcode.toUpperCase()}</strong>.
          </>
        ) : (
          "."
        )}
      </p>

      {/* Locator */}
      <div
        style={{
          marginBottom: "2.5rem",
          maxWidth: "780px",
          padding: "1rem",
          border: "1px solid #eee",
          borderRadius: "12px",
          background: "#fafafa",
        }}
      >
        <div style={{ marginBottom: "0.5rem", color: "#333" }}>
          <strong>Where are you right now?</strong>
        </div>

        <select
          value={whereNow}
          onChange={(e) => setWhereNow(e.target.value)}
          style={{
            width: "100%",
            padding: "0.65rem 0.75rem",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            fontSize: "1rem",
          }}
        >
          <option value="">Choose a stage…</option>
          {stages.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>

        <div style={{ marginTop: "0.6rem", fontSize: "0.95rem", color: "#666" }}>
          You can change this at any time. It doesn’t save any personal data.
        </div>
      </div>

      {/* Stages + aligned spine */}
      <div>
        {stages.map((stage, index) => {
          const isFirst = index === 0;
          const isLast = index === stages.length - 1;

          const lineTop = isFirst ? dotTop : 0;
          const lineBottom = isLast ? `calc(100% - ${dotTop}px)` : 0;

          const isActive = whereNow === stage.id;

          const localFromData = la.stages?.[stage.id];
          const localText = localFromData?.localSummary || stage.localFallback;
          const lastVerified = localFromData?.lastVerified || "February 2026";
          const links = (localFromData?.links || []).filter((l) => !!l.url);

          const typicalTiming = localFromData?.typicalTiming;
          const whatYouNeed = localFromData?.whatYouNeed;

          return (
            <div
              key={stage.id}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {/* Spine cell */}
              <div style={{ position: "relative", height: "100%" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "27px",
                    top: lineTop,
                    bottom: lineBottom as any,
                    width: "2px",
                    background: "#e6e6e6",
                    borderRadius: "2px",
                  }}
                />
                <div style={dotStyle(isActive)} title={stage.title} />
              </div>

              {/* Content cell */}
              <section
                ref={setStageRef(stage.id)}
                style={{
                  marginBottom: "3.25rem",
                  paddingBottom: "2.25rem",
                  borderBottom: "1px solid #eee",
                  maxWidth: "780px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.5rem",
                    color: isActive ? "#1f3f66" : "#111",
                    transition: "color 150ms ease",
                  }}
                >
                  {stage.title}
                </h2>

                <p style={{ color: "#555", marginBottom: "0.4rem" }}>
                  {stage.summary}
                </p>

                {/* NEW: subtle timing line */}
                {typicalTiming && (
                  <p style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: 0 }}>
                    <em>Typical timing: {typicalTiming}</em>
                  </p>
                )}

                <ExpandableSection title="What this stage involves">
                  <p>{stage.involves}</p>
                </ExpandableSection>

                {/* NEW: What you'll need checklist (only when available) */}
                {whatYouNeed && whatYouNeed.length > 0 && (
                  <ExpandableSection title="What you’ll need">
                    <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                      {whatYouNeed.map((item) => (
                        <li key={item} style={{ marginTop: "0.35rem" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ExpandableSection>
                )}

                <ExpandableSection title="How this normally works in your area">
                  <p>{localText}</p>

                  {links.length > 0 && (
                    <div style={{ marginTop: "0.75rem" }}>
                      <div style={{ color: "#333", marginBottom: "0.35rem" }}>
                        <strong>Useful links</strong>
                      </div>
                      <ul style={{ paddingLeft: "1.2rem", marginTop: "0.35rem" }}>
                        {links.map((l) => (
                          <li key={l.label} style={{ marginTop: "0.35rem" }}>
                            <a
                              href={l.url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "#2c5282" }}
                            >
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: "0.6rem", fontSize: "0.95rem", color: "#666" }}>
                        If a link doesn’t load, search the council site for the page title above.
                      </div>
                    </div>
                  )}

                  <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", color: "#666" }}>
                    <em>Last verified: {lastVerified}</em>
                  </p>
                </ExpandableSection>

                <ExpandableSection title="What usually happens next">
                  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                    {stage.next.map((item) => (
                      <li key={item} style={{ marginTop: "0.35rem" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </ExpandableSection>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}
