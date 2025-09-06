// app/shop/page.js
import products from "@/data/products.json";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Shop</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "1rem 0" }}>
            <Link href={`/shop/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
