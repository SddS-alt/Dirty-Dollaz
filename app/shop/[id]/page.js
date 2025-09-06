import products from "@/data/products.json";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} width="300" />
    </main>
  );
}
