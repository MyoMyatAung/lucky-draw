import Coupon from "@/models/coupon";
import Prize from "@/models/prize";
import { connectDb } from "@/utils/database";
import { generateCSV } from "@/utils/json2csv";

function formatNumber(number) {
  if (number < 10) {
    return "00" + number;
  } else if (number < 100) {
    return "0" + number;
  } else {
    return number;
  }
}

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const coupons = await Coupon.aggregate([
      {
        $match: { prize: { $ne: null } },
      },
      {
        $lookup: {
          from: "prizes",
          localField: "prize",
          foreignField: "_id",
          as: "prize",
        },
      },
      { $unwind: "$prize" },
      {
        $project: {
          _id: 1,
          couponNumber: 1,
          couponCustomer: 1,
          customerCode: 1,
          shop: 1,
          city: 1,
          "prize.prize": 1,
          "prize._id": 1,
        },
      },
      {
        $group: {
          _id: "$prize.prize",
          count: { $sum: 1 },
          coupons: { $push: "$$ROOT" }, // Store the full document in the 'coupons' array
        },
      },
      {
        $sort: { count: 1 }, // Sort by count in ascending order (low to high)
      },
      {
        $unwind: "$coupons", // Unwind the 'coupons' array
      },
      {
        $replaceRoot: { newRoot: "$coupons" }, // Replace the root with the 'coupons' documents
      },
    ]);
    const jsonData = JSON.stringify(
      coupons.map((cp) => ({
        couponNumber: `'${formatNumber(cp.couponNumber)}'`,
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
