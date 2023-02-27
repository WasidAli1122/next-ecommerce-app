import NextHead from "@/components/NextHead";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NextHead title="Home Page" description="get your desired products." />
      <div className="container min-h-[calc(100vh-80px)] w-full grid grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center space-y-6">
          <h6 className="text-lg text-gray-500 uppercase">featured product</h6>
          <h1 className="text-6xl font-semibold text-textColor-main capitalize">
            products collections
          </h1>
          <p className="text-xl font-normal text-white">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. Excepted sint occaecat cuspidate non
            provident, sung in culpa qui officiant.
          </p>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <Image
            src="/images/banner.png"
            height={600}
            width={600}
            alt="banner"
            priority
          />
        </div>
      </div>
    </>
  );
}
