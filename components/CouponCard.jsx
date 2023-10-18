import React from "react";
import { BiSolidUser } from "react-icons/bi";

const CouponCard = ({ coupon }) => {
  return (
    <div className="prompt_card flex items-center justify-between gap-2 min-w-fit max-w-fit">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-white">
            {coupon.couponCustomer}
          </h3>
          <p className="font-inter text-xs text-white font-semibold">
            <>{coupon.shop}</> | <>{coupon.city}</>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
