import React from "react";
import { Button } from "../ui/button";

const TotalFetch = ({
  total,
  noResult,
}: {
  total: number;
  noResult: boolean;
}) => {
  return (
    <div
      className={`${
        noResult ? "hidden" : "flex"
      } flex-col w-full md:w-auto gap-9 justify-center items-center my-12 bg-[#F9F1E7] shadow-sm shadow-dark/50 p-6 lg:p-12 rounded-md`}>
      <h2 className="text-dark font-semibold text-2xl">Cart Totals</h2>
      <span className="text-dark font-semibold text-base">
        Total:{" "}
        <span className="text-baseColor font-semibold ml-6">${total}</span>
      </span>
      <Button
        disabled={total === 0}
        className="bg-transparent border border-dark text-dark font-medium text-base px-9 py-4 hover:bg-dark hover:text-[#F9F1E7]">
        Check Out
      </Button>
    </div>
  );
};

export default TotalFetch;
