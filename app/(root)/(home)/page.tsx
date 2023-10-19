import HeroSec from "@/components/home/HeroSec";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div>
        <HeroSec />
      </div>

      <div className="w-full flex items-center justify-center py-10">
        <h3 className="text-dark font-bold text-3xl">Discover The Range</h3>
      </div>
    </main>
  );
}
