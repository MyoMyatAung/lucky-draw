import { Schema, model, models } from "mongoose";

const couponSchema = new Schema({
  couponNumber: {
    type: Number,
    required: true,
  },
  couponCustomer: {
    type: String,
    required: true,
  },
  customerCode: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  prize: {
    type: Schema.Types.ObjectId,
    ref: "Prize",
    default: null,
  },
});

const Coupon = models.Coupon || model("Coupon", couponSchema);

export default Coupon;
