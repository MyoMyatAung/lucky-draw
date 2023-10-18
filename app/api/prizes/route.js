import Coupon from "@/models/coupon";
import Prize from "@/models/prize";
import { connectDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const prizes = await Prize.find().populate([
      { path: "coupons", model: Coupon },
    ]);

    return new Response(JSON.stringify(prizes), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch prizes", {
      status: 500,
    });
  }
};

export const PATCH = async (request) => {
  const { couponNumber, prize } = await request.json();
  try {
    await connectDb();
    const prizeTobeUpdate = await Prize.findById(prize);
    if (!prizeTobeUpdate) {
      return new Response("prize not found", { status: 404 });
    }
    // Update the prompt with new data
    const coupons = await Coupon.find({
      couponNumber: { $in: couponNumber },
    });

    prizeTobeUpdate.coupons = [...prizeTobeUpdate.coupons, ...coupons.map(c => c._id)];
    prizeTobeUpdate.maxAttempt = prizeTobeUpdate.maxAttempt - prizeTobeUpdate.attemptCount;

    await prizeTobeUpdate.save();

    return new Response("Successfully update prize with coupon", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Error Updating prize", { status: 500 });
  }
};
