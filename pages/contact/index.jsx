import NextHead from "@/components/NextHead";

export default function contact() {
  return (
    <>
      <NextHead title="Contact Us" description="contact us for information." />
      <div className="container min-h-[calc(100vh-80px)] flex justify-center items-center">
        <h1 className="text-6xl text-textColor-main font-semibold">
          Contact Us
        </h1>
      </div>
    </>
  );
}
