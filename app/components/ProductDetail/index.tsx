"use client";

import { useState } from "react";
import { Product } from "@/lib/types";

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500 uppercase">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="font-medium">
              Quantity
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 flex items-center justify-center border rounded"
              >
                -
              </button>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center border rounded"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-8 h-8 flex items-center justify-center border rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 mt-6">
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
    </div>
  );
}
