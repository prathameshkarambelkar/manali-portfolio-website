"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f4ede1",
          color: "#241f1c",
          fontFamily:
            "'Jost', ui-sans-serif, system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: "28rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            Something went wrong
          </p>
          <h1
            style={{
              margin: "1rem 0 0",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              lineHeight: 1.05,
              fontWeight: 400,
            }}
          >
            This page could not load.
          </h1>
          <p
            style={{
              margin: "1rem 0 0",
              fontSize: "1rem",
              lineHeight: 1.6,
              opacity: 0.75,
            }}
          >
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "1.75rem",
              border: "1px solid #241f1c",
              background: "#241f1c",
              color: "#f4ede1",
              padding: "0.7rem 1.4rem",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}
