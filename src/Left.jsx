import { FaPlay } from "react-icons/fa";

const Left = () => {
  return (
    <div className="text-white md:w-1/2 px-2 flex  flex-col gap-6">
      <h1 className="md:text-4xl text-3xl font-bold md:text-start">
        Discover,Collect & Sell Popular
        <span className="md:text-5xl text-3xl from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          NFTs{" "}
        </span>
      </h1>
      <p className="md:text-start">
        The world’s Biggest advanced commercial center for Crypto collectibles
        and non-fungible tokens.
      </p>

      <div className="flex float-start gap-3">
        <button
          className="bg-gradient-to-r text-xl  px-6 p-1  rounded-lg from-[#1D09BD] to-[#EB01E3]"
        >
          Explore
        </button>
        <button
          className="bg-gradient-to-r text-xl rounded-full flex justify-center h-fit  items-center p-2     from-[#1D09BD] to-[#EB01E3]"
        >
          <FaPlay className="" />

        </button>
        <p className="mt-2">Watch Video</p>
      </div>
    </div>
  );
};

export default Left;
