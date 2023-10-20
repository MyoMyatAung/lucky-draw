import Coupon from "@/models/coupon";
import Prize from "@/models/prize";
import { connectDb } from "@/utils/database";
import { generateCSV } from "@/utils/json2csv";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const coupons = await Coupon.find({ prize: { $ne: null } }).populate([
      { path: "prize", model: Prize, select: "prize" },
    ]);
    const jsonData = JSON.stringify(
      coupons.map((cp) => ({
        couponNumber: cp.couponNumber,
        couponCustomer: cp.couponCustomer,
        customerCode: cp.customerCode,
        shop: cp.shop,
        city: cp.city,
        prize: cp.prize.prize,
      }))
    );

    generateCSV(jsonData);

    return new Response(JSON.stringify(coupons), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch coupons", {
      status: 500,
    });
  }
};
