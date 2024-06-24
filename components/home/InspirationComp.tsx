import FetchingInspirationIdeas from "../shared/FetchingInspirationIdeas";
import { Button } from "../ui/button";

const InspirationComp = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 py-16">
      <div className="flex flex-col mx-5 items-start justify-center gap-5">
        <h2 className="text-2xl md:text-3xl font-bold text-dark">
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p className="text-gray-600 font-normal text-sm max-w-sm lg:max-w-md">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Button className="bg-baseColor border self-center lg:self-start border-baseColor capitalize text-sm font-semibold p-1 px-3 sm:px-4 py-4 sm:py-5 rounded-sm hover:bg-transparent hover:text-baseColor">
          explore more
        </Button>
      </div>

      <FetchingInspirationIdeas />
    </div>
  );
};

export default InspirationComp;
