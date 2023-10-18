import Coupon from "@/models/coupon";
import Prize from "@/models/prize";
import { connectDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const coupons = await Coupon.find().populate([
      { path: "prize", model: Prize },
    ]);

    return new Response(JSON.stringify(coupons), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch coupons", {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const { couponNumber } = await request.json();
  try {
    await connectDb();
    const coupon = await Coupon.find({ couponNumber: { $in: couponNumber } });
    if (!coupon.length) {
      return new Response("Coupon not found", { status: 404 });
    }
    return new Response(JSON.stringify(coupon), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch coupons", {
      status: 500,
    });
  }
};

export const PATCH = async (request) => {
  const { couponNumber, prize } = await request.json();
  try {
    await connectDb();
    const coupon = await Coupon.find({ couponNumber: { $in: couponNumber } });
    if (!coupon.length) {
      return new Response("Coupon not found", { status: 404 });
    }
    // Update the prompt with new data
    await Coupon.updateMany(
      { couponNumber: { $in: couponNumber } },
      { prize: prize }
    );

    return new Response("Successfully update coupon with prize", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating Coupon", { status: 500 });
  }
};
