"use client";

import CouponCode from "@/components/CouponCode";
import WinnerFeed from "@/components/WinnerFeed";
import { useSearchParams } from "next/navigation";
import React from "react";

const Winners = () => {
  const searchParams = useSearchParams();
  const luckyCoupons = searchParams.get("lucky-coupon");

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-xl font-semibold text-center">
        <span className="text-white text-center stroke-black">
          Congradulation lucky winners!
        </span>
      </h1>
      {luckyCoupons.split(",").length === 1 ? (
        <div className="flex justify-center w-full my-4">
          {luckyCoupons.split(",").map((cp, index) => (
            <CouponCode coupon={cp} key={index} />
          ))}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-5 gap-4 justify-center">
          {luckyCoupons.split(",").map((cp, index) => (
            <CouponCode coupon={cp} key={index} />
          ))}
        </div>
      )}

      <WinnerFeed coupons={luckyCoupons.split(",")} />
    </section>
  );
};

export default Winners;
