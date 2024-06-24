"use server";

import Product from "@/database/product.model";
import { connectToDatabase } from "../mongo";
import { revalidatePath } from "next/cache";

export async function createProduct(params: {
  title: string;
  description: string;
  picture: string;
  price: number;
  path: string;
}) {
  try {
    connectToDatabase();

    const { title, description, picture, price, path } = params;

    await Product.create({
      title,
      description,
      picture,
      price,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProducts() {
  try {
    connectToDatabase();

    const products = await Product.find({}).sort({ createdAt: -1 }).limit(8);

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
