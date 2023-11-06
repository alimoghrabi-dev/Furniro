import { IProduct } from "@/database/product.model";
import ProductComp from "../home/ProductComp";
import { formatPrice } from "@/lib/utils";

interface Props {
  latestProducts: IProduct[];
}

const FetchLatestProducts = ({ latestProducts }: Props) => {
  return (
    <div className="max-w-6xl flex flex-wrap items-center justify-center gap-8 mx-[15px]">
      {latestProducts.map((product: IProduct) => (
        <ProductComp
          key={product._id}
          title={product.title}
          imgSrc={product.picture}
          alt={product.title}
          description={product.description}
          href={`/shop/${product._id}`}
          price={`${formatPrice(product.price)}`}
        />
      ))}
    </div>
  );
};

export default FetchLatestProducts;
