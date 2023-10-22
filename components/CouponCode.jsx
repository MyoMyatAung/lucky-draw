import AnimatedNumbers from "react-animated-numbers";

const CouponCode = ({ coupon }) => {

  function formatNumber(number) {
    if (number < 10) {
      return (
        <div className="flex items-center">
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
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
        </div>
      );
    } else if (number < 100) {
      return (
        <div className="flex items center">
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
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
        </div>
      );
    } else if (number < 1000) {
      return (
        <div className="flex items center">
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={{ fontSize: 24 }}
            configs={[
              { mass: 1, tension: 100, friction: 200 },
              { mass: 2, tension: 100, friction: 200 },
              { mass: 3, tension: 100, friction: 200 },
              { mass: 4, tension: 100, friction: 200 },
            ]}
          ></AnimatedNumbers>
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
        </div>
      );
    } else {
      return (
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
      );
    }
  }

  // function formatNumber(number) {
  //   if (number < 10) {
  //     return (
  //       <div className="flex items-center">
  //         <AnimatedNumbers
  //           animateToNumber={0}
  //           fontStyle={{ fontSize: 24 }}
  //           configs={[
  //             { mass: 1, tension: 100, friction: 200 },
  //             { mass: 2, tension: 100, friction: 200 },
  //             { mass: 3, tension: 100, friction: 200 },
  //             { mass: 4, tension: 100, friction: 200 },
  //           ]}
  //         ></AnimatedNumbers>
  //         <AnimatedNumbers
  //           animateToNumber={0}
  //           fontStyle={{ fontSize: 24 }}
  //           configs={[
  //             { mass: 1, tension: 100, friction: 200 },
  //             { mass: 2, tension: 100, friction: 200 },
  //             { mass: 3, tension: 100, friction: 200 },
  //             { mass: 4, tension: 100, friction: 200 },
  //           ]}
  //         ></AnimatedNumbers>
  //         <AnimatedNumbers
  //           animateToNumber={number}
  //           fontStyle={{ fontSize: 24 }}
  //           configs={[
  //             { mass: 1, tension: 100, friction: 200 },
  //             { mass: 2, tension: 100, friction: 200 },
  //             { mass: 3, tension: 100, friction: 200 },
  //             { mass: 4, tension: 100, friction: 200 },
  //           ]}
  //         ></AnimatedNumbers>
  //       </div>
  //     );
  //   } else if (number < 100) {
  //     return (
  //       <div className="flex items center">
  //         <AnimatedNumbers
  //           animateToNumber={0}
  //           fontStyle={{ fontSize: 24 }}
  //           configs={[
  //             { mass: 1, tension: 100, friction: 200 },
  //             { mass: 2, tension: 100, friction: 200 },
  //             { mass: 3, tension: 100, friction: 200 },
  //             { mass: 4, tension: 100, friction: 200 },
  //           ]}
  //         ></AnimatedNumbers>
  //         <AnimatedNumbers
  //           animateToNumber={number}
  //           fontStyle={{ fontSize: 24 }}
  //           configs={[
  //             { mass: 1, tension: 100, friction: 200 },
  //             { mass: 2, tension: 100, friction: 200 },
  //             { mass: 3, tension: 100, friction: 200 },
  //             { mass: 4, tension: 100, friction: 200 },
  //           ]}
  //         ></AnimatedNumbers>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <AnimatedNumbers
  //         animateToNumber={number}
  //         fontStyle={{ fontSize: 24 }}
  //         configs={[
  //           { mass: 1, tension: 100, friction: 200 },
  //           { mass: 2, tension: 100, friction: 200 },
  //           { mass: 3, tension: 100, friction: 200 },
  //           { mass: 4, tension: 100, friction: 200 },
  //         ]}
  //       ></AnimatedNumbers>
  //     );
  //   }
  // }

  const number = formatNumber(Number(coupon));

  return (
    <div className="border border-gray-100 bg-white/20 bg-clip-padding px-4 py-2 rounded-lg">
      <span className="text-xl text-white fond-semibold">
        {/* <AnimatedNumbers
          animateToNumber={number}
          fontStyle={{ fontSize: 24 }}
          configs={[
            { mass: 1, tension: 100, friction: 200 },
            { mass: 2, tension: 100, friction: 200 },
            { mass: 3, tension: 100, friction: 200 },
            { mass: 4, tension: 100, friction: 200 },
          ]}
        ></AnimatedNumbers> */}
        {formatNumber(Number(coupon))}
      </span>
    </div>
  );
};

export default CouponCode;
