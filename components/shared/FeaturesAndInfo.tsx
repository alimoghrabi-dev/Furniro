import { HelpingHand, ShieldCheck, Trophy, Truck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: "1",
    picture: Trophy,
    label: "High Quality",
    des: "crafted from top materials",
  },
  {
    id: "2",
    picture: ShieldCheck,
    label: "Warranty Protection",
    des: "Over 2 years",
  },
  {
    id: "3",
    picture: Truck,
    label: "Free Shipping",
    des: "Order over 150 $",
  },
  {
    id: "4",
    picture: HelpingHand,
    label: "24 / 7 Support",
    des: "Dedicated support",
  },
];

const FeaturesAndInfo = () => {
  return (
    <div className="w-full bg-[#F9F1E7] flex justify-center flex-wrap items-center gap-20 py-5">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex justify-center items-center gap-3">
          <feature.picture className="text-dark w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-[17px] text-dark font-semibold">
              {feature.label}
            </span>
            <p className="text-[#898989] font-medium text-base">
              {feature.des}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesAndInfo;
