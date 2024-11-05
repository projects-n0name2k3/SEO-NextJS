/* eslint-disable  @typescript-eslint/no-explicit-any */
import Image from "next/image";
import "../../globals.css";
import { Metadata } from "next";

const fetchData = async (productId: string) => {
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then((res) => res.json());
  return product;
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const productId = params.productId.split(".")[0].split("-").pop();
  // fetch data
  const product = await fetchData(productId);

  // optionally access and extend (rather than replace) parent metadata
  return {
    title: {
      template: "%s | Bilibili Shop",
      default: product.title,
    },
    description: product.description,
    keywords: "shop thời trang, bilibili, mua sắm online",
    openGraph: {
      title: {
        template: "%s | Bilibili Shop",
        default: product.title,
      },
      description: product.description,
      type: "website",
      images: [product.image],
    },
  };
}

async function ProductDetail({ params }: any) {
  const productId = params.productId.split(".")[0].split("-").pop();
  const product = await fetchData(productId);
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-4"></div>
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
          <div>
            <Image
              src={product.image || "/default-image.jpg"}
              alt={product.title || "Product image"}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-4">Product Details</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Category:</span> {product.category}
            </li>
            <li>
              <span className="font-medium">SKU:</span> {product.id}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
