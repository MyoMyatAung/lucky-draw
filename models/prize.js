import { Schema, model, models } from "mongoose";

const PrizeSchema = new Schema({
  prize: {
    type: String,
    required: true,
  },
  maxAttempt: {
    type: Number,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  isFillRemain: {
    type: Boolean,
    required: true,
    default: false
  },
  attemptCount: {
    type: Number,
    required: true,
    default: 1,
  },
  coupons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
    },
  ],
});

const Prize = models.Prize || model("Prize", PrizeSchema);

export default Prize;
