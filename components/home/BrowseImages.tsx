import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  ImageSrc: string;
  altTag: string;
  title: string;
}

const BrowseImages = ({ href, ImageSrc, altTag, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Link href={href}>
        <Image
          src={ImageSrc}
          alt={altTag}
          width={800}
          height={800}
          className="rounded-lg object-cover h-[320px] w-[270px] hover:-translate-y-2 transition-all border-gray-900 border border-opacity-10 shadow"
        />
      </Link>
      <p className="text-base font-medium text-dark">{title}</p>
    </div>
  );
};

export default BrowseImages;
