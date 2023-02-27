import NextHead from "@/components/NextHead";

export default function about() {
  return (
    <>
      <NextHead title="About Us" description="about us page." />
      <div className="container min-h-[calc(100vh-80px)] flex justify-center items-center">
        <h1 className="text-6xl text-textColor-main font-semibold">About Us</h1>
      </div>
    </>
  );
}
