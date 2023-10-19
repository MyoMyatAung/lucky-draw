import AnimatedNumbers from "react-animated-numbers";

const CouponCode = ({ coupon }) => {

  function formatNumber(number) {
    if (number < 10) {
      return "00" + number;
    } else if (number < 100) {
      return "0" + number;
    } else {
      return String(number);
    }
  }

  const number = formatNumber(Number(coupon));

  return (
    <div className="border border-gray-100 bg-white/20 bg-clip-padding px-4 py-2 rounded-lg">
      <span className="text-xl text-white fond-semibold">
        <AnimatedNumbers
          animateToNumber={number}
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
