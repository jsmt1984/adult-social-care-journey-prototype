const stages = [
  {
    title: "Getting started",
    summary: "This is the first step in asking the council about possible support."
  },
  {
    title: "Understanding your needs",
    summary: "A conversation about what daily life is like and what support might help."
  },
  {
    title: "Deciding what support is available",
    summary: "The council decides whether needs meet the national eligibility criteria."
  },
  {
    title: "Planning your support",
    summary: "Agreeing how eligible needs will be met."
  },
  {
    title: "Working out the cost",
    summary: "The council assesses how much you may need to contribute."
  },
  {
    title: "Putting support in place",
    summary: "Arranging services or payments so care can begin."
  },
  {
    title: "Reviewing and adjusting support",
    summary: "Checking whether support is working and making changes if needed."
  },
  {
    title: "Raising concerns or questions",
    summary: "How to raise issues, complaints, or safeguarding concerns."
  }
];

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

      {stages.map((stage, index) => (
        <section
          key={index}
          style={{
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #eee"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            {stage.title}
          </h2>

          <p style={{ color: "#555" }}>{stage.summary}</p>
        </section>
      ))}
    </main>
  );
}
