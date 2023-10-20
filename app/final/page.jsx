import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const Final = () => {
  return (
    <main className="app p-20">
      <Image
        src="/assets/images/awba.svg"
        alt="logo"
        width={300}
        height={200}
        className="object-contain"
      />
    </main>
  );
};

export default Final;
