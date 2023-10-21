import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const Final = () => {
  return (
    <main className="app">
      <Nav centerIcon={true} />
      <section className="w-full flex-center flex-col mt-6">
        <p className="desc text-center">
          <span className="font-bold text-2xl text-white">ပိုးသတ်‌ဆေး</span>{" "}
          နှင့်{" "}
          <span className="font-bold text-2xl text-white">
            ရွက်ဖျန်းအားဆေး သိန်း၇၅၀ဖိုး
          </span>{" "}
          ဝယ်ယူသူတိုင်းအတွက်
        </p>
        <h1 className="font-bold text-4xl mt-4 text-center">
          <span className="text-white text-center">ဗလာမပါ</span>
        </h1>
        <h1 className="font-bold text-4xl mt-4 mb-4 text-center">
          <span className="text-white">ရွှေကံစမ်းမဲအစီအစဥ်</span>
          {/* <span className="text-gold">ရွှေကံစမ်းမဲအစီအစဥ်</span> */}
        </h1>
        <section className="feed">
          <div className="relative w-full flex-center">
            <h1 className="prompt_card text-3xl text-white fond-semibold">
              Thank you!
            </h1>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Final;
