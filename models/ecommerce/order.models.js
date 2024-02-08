/** @format */

import mongoose from "mongoose";

// mini models

const orderItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quanity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: String,
      required: true,
    },
    customers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItemSchema",
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "pending", "cancelled"],
      default: "available",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
