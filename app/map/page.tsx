"use client";

import dynamic from "next/dynamic";

const Page = () => {
  const Map = dynamic(() => import("./components/map-page"), { ssr: false });

  return (
    <div className="md:flex-1 w-[30rem] h-[30rem] border-2 border-black mx-auto mb-6 mt-10">
      <Map />
    </div>
  );
};

export default Page;
