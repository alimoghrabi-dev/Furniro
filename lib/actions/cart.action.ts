"use server";

import Carting from "@/database/cart.model";
import { connectToDatabase } from "../mongo";
import console from "console";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";
import Product from "@/database/product.model";

export async function addProductToCart(params: {
  productId: string;
  userId: string | undefined;
  path: string;
}) {
  try {
    connectToDatabase();

    const { productId, userId, path } = params;

    if (userId) {
      let existingCart = await Carting.findOne({ user: userId });

      if (!existingCart) {
        const newCart = await Carting.create({
          user: userId,
          products: productId,
        });

        const cartId = newCart._id;

        await Carting.findByIdAndUpdate(cartId, { $inc: { size: 1 } });

        revalidatePath(path);
        return true;
      } else {
        let addNewProductToArray = await Carting.findOne({ user: userId });

        const cartId = addNewProductToArray._id;

        if (!existingCart.products.includes(productId)) {
          await Carting.findOneAndUpdate(cartId, {
            $push: { products: productId },
            $inc: { size: 1 },
          });
          revalidatePath(path);
          return true;
        } else {
          console.log("Product already in cart");
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchProductsQuantity(params: {
  clerkId: string | null;
}) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const cart = await Carting.findOne({ clerkId });

    if (cart) {
      const productCount = cart.products.length;
      return productCount;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function checkIfProductExists(params: {
  userId: string | undefined;
  productId: string;
}) {
  try {
    connectToDatabase();

    const { userId, productId } = params;

    const cart = await Carting.findOne({ user: userId });

    if (cart.products.includes(productId)) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCartItems(params: {
  clerkId: string | null;
  userId: string | undefined;
}) {
  try {
    connectToDatabase();

    const { clerkId, userId } = params;

    const user = await User.findOne({ clerkId });

    const cart = await Carting.findOne({ user: user?._id }).populate({
      path: "products",
      model: Product,
      select: "_id title description picture price",
    });

    if (!user) {
      return null;
    }

    if (!cart) {
      return null;
    }

    if (cart.user == userId) {
      const cartItems = cart.products;

      const formattedCartItems = cartItems.map((item: any) => ({
        _id: item._id,
        title: item.title,
        description: item.description,
        picture: item.picture,
        price: item.price,
      }));

      if (formattedCartItems.length === 0) {
        return null;
      }

      return formattedCartItems;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function setProductQuantity(productId: string, quantity: number) {
  try {
    connectToDatabase();

    const item = await Carting.findOne({
      "products._id": productId,
    });

    if (item === productId) {
      quantity = quantity + 1;
    } else {
      return null;
    }

    revalidatePath("/shop/cart/[id]");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteProductFromCart(
  productId: string,
  userId: string | undefined,
  pathname: string
) {
  try {
    connectToDatabase();

    const cart = await Carting.findOne({ user: userId });

    await Carting.findByIdAndDelete(cart._id, {
      $pull: { products: productId },
    });

    revalidatePath(pathname);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
