export default function Home() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "4rem 2rem",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Understanding adult social care
      </h1>

      <p style={{ marginBottom: "2rem", color: "#444" }}>
        Adult social care follows a structured path. The details vary by area,
        but the stages are broadly the same. This guide explains how it usually
        works in your area.
      </p>

      {/* GET form so values appear in the URL as query params */}
      <form method="GET" action="/journey">
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "0.5rem", color: "#333" }}>
            <strong>Who is this about?</strong>
          </div>

          <label style={{ display: "block", marginBottom: "0.4rem" }}>
            <input type="radio" name="who" value="self" defaultChecked /> Myself
          </label>

          <label style={{ display: "block" }}>
            <input type="radio" name="who" value="other" /> Someone I support
          </label>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "0.5rem", color: "#333" }}>
            <strong>Postcode</strong>
          </div>

          <input
            type="text"
            name="postcode"
            placeholder="Enter postcode"
            autoComplete="postal-code"
            style={{
              padding: "0.6rem 0.75rem",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "1rem",
            }}
          />
          <div style={{ marginTop: "0.4rem", fontSize: "0.95rem", color: "#666" }}>
            We use this only to identify the local authority area.
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: "0.7rem 1.2rem",
            background: "#2c5282",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Show how it works
        </button>
      </form>
    </main>
  );
}
