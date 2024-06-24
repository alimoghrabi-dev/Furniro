import { gallery } from "@/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full flex flex-col gap-1 items-center justify-center pt-1.5 pb-8">
        <span className="text-[#616161] text-base font-medium">
          Share your setup with
        </span>
        <h3 className="text-dark font-bold text-3xl">#FuniroFurniture</h3>
      </div>

      <div className="max-w-6xl flex items-center justify-center flex-wrap gap-2 pb-12">
        {gallery.map((image) => (
          <Image
            key={image.id}
            src={image.image}
            alt={image.image}
            width={175}
            height={175}
            layout="intrinsic"
            className="object-contain 2xl:w-[250px] h-[250px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
