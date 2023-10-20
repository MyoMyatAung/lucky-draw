import React from "react";

const CouponCard = ({ coupon }) => {

  function formatNumber(number) {
    if (number < 10) {
      return "00" + number;
    } else if (number < 100) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const couponNumber = formatNumber(coupon.couponNumber);

  return (
    <div className="prompt_card flex items-center justify-between gap-2 w-full">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-white">
            {coupon.couponCustomer} | {couponNumber}
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
