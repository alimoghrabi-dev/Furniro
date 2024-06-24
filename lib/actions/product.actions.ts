"use server";

import Product from "@/database/product.model";
import { connectToDatabase } from "../mongo";

export async function getAllProducts() {
  try {
    connectToDatabase();

    const products = await Product.find({});

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductById(params: { productId: string }) {
  try {
    connectToDatabase();

    const { productId } = params;

    const product = await Product.findOne({ _id: productId });

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
