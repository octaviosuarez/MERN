import { useEffect } from "react";

const Homes = () => {
  useEffect(() => {}, []);

  return (
    <div className="bg-[#F1F5F9] w-full py-[2rem] px-[3rem]">
      <p className="font-semibold text-2xl">Home</p>
      <div className="h-[90%] py-[2rem] px-[4rem] mt-2 rounded-sm bg-white shadow-md">
        content
      </div>
    </div>
  );
};

export default Homes;
