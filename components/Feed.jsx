"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Feed = () => {
  const router = useRouter();

  const [allCoupons, setAllCoupons] = useState([]);
  const [allPrizes, setAllPrizes] = useState([]);
  const [prizeToDraw, setPrizeToDraw] = useState(null);
  const [isLast, setIsLast] = useState(false);

  const fetchCoupons = async () => {
    const response = await fetch("/api/coupons");
    const data = await response.json();

    setAllCoupons(data);
  };

  const fetchPrizes = async () => {
    const response = await fetch("/api/prizes");
    const data = await response.json();

    setAllPrizes(data);
    const filteredPrizes = data.filter((p) => p.maxAttempt !== 0);
    if (data.every((p) => p.maxAttempt === 0)) {
      setPrizeToDraw(data[data.length - 1]);
      setIsLast(true);
    } else {
      const prizeToBeDraw = filteredPrizes.reduce((min, current) => {
        return current.order < min.order ? current : min;
      });
      setPrizeToDraw(prizeToBeDraw);
    }
  };

  const changeLatest = useCallback(async () => {
    const luckyCouponNumbers = allCoupons
      .filter((cp) => cp.prize === null)
      .map((cp) => cp.couponNumber);
    await updateCoupon(luckyCouponNumbers, prizeToDraw?._id);
    await updatePrize(luckyCouponNumbers, prizeToDraw?._id);
  }, [allCoupons, prizeToDraw]);

  useEffect(() => {
    fetchCoupons();
    fetchPrizes();
  }, []);

  useEffect(() => {
    if (isLast) {
      changeLatest();
    }
  }, [isLast, changeLatest]);

  const updateCoupon = async (couponNumbers, prize) => {
    try {
      const response = await fetch("/api/coupons", {
        method: "PATCH",
        body: JSON.stringify({
          couponNumber: couponNumbers,
          prize: prize,
        }),
      });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updatePrize = async (couponNumbers, prize) => {
    try {
      const response = await fetch("/api/prizes", {
        method: "PATCH",
        body: JSON.stringify({
          couponNumber: couponNumbers,
          prize: prize,
        }),
      });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  function getLuckyCouponNumber(arr, n) {
    if (n >= arr.length) {
      return arr.slice(); // Return a copy of the entire array
    } else {
      const randomElements = [];
      const shuffledArray = arr.slice(); // Create a copy of the original array

      for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(
          Math.random() * (shuffledArray.length - i)
        );
        const selectedElement = shuffledArray[randomIndex];

        // Swap the selected element with the last element in the shuffled portion of the array
        const lastIndex = shuffledArray.length - i - 1;
        shuffledArray[randomIndex] = shuffledArray[lastIndex];
        shuffledArray[lastIndex] = selectedElement;

        randomElements.push(selectedElement);
      }

      return randomElements;
    }
  }

  const handleDraw = async () => {
    const removedPrizedCoupons = allCoupons.filter((cp) => cp.prize === null);
    const numberToGenerateCoupons = prizeToDraw.attemptCount;
    const luckyCouponNumbers = getLuckyCouponNumber(
      removedPrizedCoupons,
      numberToGenerateCoupons
    ).map((cp) => cp.couponNumber);
    if (!luckyCouponNumbers.length) {
      return;
    }
    const couponRes = await updateCoupon(luckyCouponNumbers, prizeToDraw._id);
    const prizesRes = await updatePrize(luckyCouponNumbers, prizeToDraw._id);
    if (prizesRes.ok && couponRes.ok) {
      router.push(`/winners?lucky-coupon=${luckyCouponNumbers.join(",")}`);
    }
  };

  return (
    <section className="feed">
      <div className="relative w-full flex-center">
        {isLast ? (
          <h1 className="prompt_card text-3xl text-white fond-semibold">
            Thank you!
          </h1>
        ) : (
          <button
            onClick={handleDraw}
            className="bg-white text-awba-blue shadow-sm text-2xl font-bold px-20 py-4 rounded-lg mt-6"
          >
            {prizeToDraw?.prize}
          </button>
        )}
      </div>
    </section>
  );
};

export default Feed;
