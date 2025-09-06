
export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontFamily: "'Old English Text MT', serif", fontSize: "3rem", color: "red", textShadow: "2px 2px black" }}>
        $ DIRTY DOLLAZ $
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        Welcome to the official Dirty Dollaz shop.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a href="/shop" style={{ fontSize: "1.5rem", color: "black", textDecoration: "underline" }}>
          Enter Shop
        </a>
      </div>
    </main>
  );
}
