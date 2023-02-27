import NextHead from "@/components/NextHead";
import ReactSlider from "@/components/ReactSlider";
import { fetchApi } from "@/utils/fetcher";
import { Button } from "@material-tailwind/react";

export default function productDetail({ productDetail }) {
  return (
    <>
      <NextHead
        title={productDetail?.title}
        description={productDetail?.description}
        ogImage={productDetail?.images[0]}
      />
      <div className="container py-10">
        <h1 className="text-3xl font-semibold text-gray-500 uppercase text-center">
          single product detail
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-10 shadow-2xl border border-gray-800 p-10">
          <div className="relative h-[400px] w-full">
            <ReactSlider
              sliderData={productDetail?.images}
              alt={productDetail?.title}
            />
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-medium text-white capitalize">
                {productDetail?.title}
              </h1>
              <h2 className="text-2xl text-textColor-main">
                $ {productDetail?.price}
              </h2>
            </div>
            <h3 className="text-2xl text-gray-500 capitalize">
              category: {productDetail?.category?.name}
            </h3>
            <p className="text-white">{productDetail?.description}</p>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`https://api.escuelajs.co/api/v1/products/${id}`);

  return {
    props: {
      productDetail: data,
    },
  };
}
