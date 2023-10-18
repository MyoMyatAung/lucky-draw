import AnimatedNumbers from "react-animated-numbers";

const CouponCode = ({ coupon }) => {
  return (
    <div className="border border-gray-100 bg-white/20 bg-clip-padding px-4 py-2 rounded-lg">
      <span className="text-xl text-white fond-semibold">
        <AnimatedNumbers
          animateToNumber={coupon}
          fontStyle={{ fontSize: 24 }}
          configs={[
            { mass: 1, tension: 100, friction: 200 },
            { mass: 2, tension: 100, friction: 200 },
            { mass: 3, tension: 100, friction: 200 },
            { mass: 4, tension: 100, friction: 200 },
          ]}
        ></AnimatedNumbers>
      </span>
    </div>
  );
};

export default CouponCode;
