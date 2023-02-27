import { fetchApi } from "@/utils/fetcher";
import { Button } from "@material-tailwind/react";
import ReactSlider from "@/components/ReactSlider";
import Link from "next/link";
import NextHead from "@/components/NextHead";

export default function product({ product }) {
  return (
    <>
      <NextHead
        title={product[0]?.title}
        description={product[0]?.description}
        ogImage={product[0]?.images[0]}
      />
      <div className="container py-10">
        <h1 className="text-3xl font-semibold text-gray-500 uppercase text-center">
          featured product
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
          {product?.map((items) => (
            <div
              className="p-6 border border-gray-800 rounded-lg duration-75 hover:shadow-xl hover:-translate-y-4"
              key={items?.id}
            >
              <div className="relative h-60 w-full">
                <ReactSlider sliderData={items?.images} alt={items?.title} />
              </div>
              <div className="mt-6 space-y-3">
                <Link href={`/product/${items?.id}`}>
                  <h1 className="text-xl font-medium text-white capitalize">
                    {items?.title}
                  </h1>
                </Link>
                <p className="text-gray-500">{items?.description}</p>
                <h2 className="text-2xl text-textColor-main">
                  $ {items?.price}
                </h2>
                <Button>Add To Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchApi(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );

  return {
    props: {
      product: data,
    },
  };
}
