import { getProducts } from "@/lib/actions/products";
import ProductCard from "@/app/components/ProductSection/ProductCard";
import { Product } from "@/lib/types";

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-12 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
