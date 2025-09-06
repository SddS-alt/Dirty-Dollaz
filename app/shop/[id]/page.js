export default function ProductPage({ params }) {
  const { id } = params;

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Product: {id}</h1>
      <p style={{ marginTop: "1rem", fontSize: "18px" }}>
        Details for this product will go here.
      </p>
    </main>
  );
}
