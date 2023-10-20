import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import React from "react";

const Home = () => {
  return (
    <main className="app">
      <Nav />
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

        <Feed />
      </section>{" "}
    </main>
  );
};

export default Home;
