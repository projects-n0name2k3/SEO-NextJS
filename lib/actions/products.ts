"use server";

export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=8", {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProduct(id: string) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}