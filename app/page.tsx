export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "4rem 2rem",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Understanding adult social care
      </h1>

      <p style={{ marginBottom: "2rem", color: "#444" }}>
        Adult social care follows a structured path. The details vary by area,
        but the stages are broadly the same. This guide explains how it usually
        works in your area.
      </p>

      <form action="/journey">
        <div style={{ marginBottom: "1.5rem" }}>
          <label>
            <input type="radio" name="who" value="self" defaultChecked /> Myself
          </label>
          <br />
          <label>
            <input type="radio" name="who" value="other" /> Someone I support
          </label>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <input
            type="text"
            placeholder="Enter postcode"
            style={{
              padding: "0.5rem",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "6px"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.6rem 1.2rem",
            background: "#2c5282",
            color: "white",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Show how it works
        </button>
      </form>
    </main>
  );
}
