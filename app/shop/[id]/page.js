export default function ProductPage({ params }) {
  const { id } = params; // grabs the product id from the URL

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Product: {id}</h1>
      <p>Details about product <strong>{id}</strong> will go here.</p>
    </main>
  );
}
