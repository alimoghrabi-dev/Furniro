import { Schema, models, model, Document } from "mongoose";

export interface ICarting extends Document {
  user: Schema.Types.ObjectId;
  products: Schema.Types.ObjectId[];
  size: number;
  createdAt: Date;
}

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  size: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Carting = models.Carting || model("Carting", cartSchema);

export default Carting;
