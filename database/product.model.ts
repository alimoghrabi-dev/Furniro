import { Schema, Document, models, model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  picture: string;
  price: number;
  createdAt: Date;
}

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
