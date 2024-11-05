"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { generateSlug } from "@/lib";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${generateSlug(product.title)}-${product.id}.html`}
      className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-4 border p-3 rounded shadow hover:shadow-lg transition-all"
    >
      <div className="relative w-full h-[304px] overflow-hidden group">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="group-hover:scale-105 transition-transform duration-300"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm line-clamp-2 leading-[22px] font-semibold">
          {product.title}
        </h3>
        <span className="text-sm leading-[22px] font-semibold">
          ${product.price}
        </span>
      </div>
    </Link>
  );
}
