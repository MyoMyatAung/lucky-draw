"use client";

import { useCallback, useEffect, useState } from "react";
import CouponCard from "./CouponCard";
import { useRouter } from "next/navigation";

const CouponCardList = ({ data }) => {
  return (
    <div className={data.length === 1? "flex items-center justify-center flex-wrap gap-4 my-2": "grid grid-cols-5 gap-4 my-2 grid-flow-row justify-stretch"}>
      {data.map((coupon) => (
        <CouponCard key={coupon._id} coupon={coupon} />
      ))}
    </div>
  );
};

const WinnerFeed = ({ coupons }) => {
  const router = useRouter();

  const [showEle, setShowEle] = useState(false);

  const [allCoupons, setAllCoupons] = useState([]);

  const fetchCoupons = useCallback(async () => {
    if (coupons.length) {
      const response = await fetch("/api/coupons", {
        method: "POST",
        body: JSON.stringify({ couponNumber: coupons }),
      });
      const data = await response.json();

      setAllCoupons(data);
    }
  }, [coupons]);

  useEffect(() => {
    fetchCoupons();
    const toRef = setTimeout(() => {
      setShowEle(true);
      clearTimeout(toRef)
    },12000);
  }, [fetchCoupons]);

  const handleDraw = () => {
    router.push("/");
  };

  if(showEle){
    return (
      <section className="feed mb-6">
        {/** Lucky User */}
        <CouponCardList data={allCoupons} />
        <div className="relative w-full flex-center">
          <button
            onClick={handleDraw}
            className="bg-white text-awba-blue text-2xl font-bold px-20 py-4 rounded-lg"
          >
            နောက်တစ်ဆုရွေးပါ
          </button>
        </div>
      </section>
    );
  }
  return <div></div>
};

export default WinnerFeed;
