import Head from "next/head";
import { useRouter } from "next/router";

export default function NextHead({ title, description, ogImage }) {
  const router = useRouter();
  const current_url = router.asPath;
  return (
    <>
      <Head>
        <title>{title ?? "Title here"}</title>
        <meta name="description" content={description ?? "Description here"} />
        <link rel="canonical" href={current_url} />

        <meta property="og:title" content={title ?? "Title here"} />
        <meta property="og:site_name" content="Product" />
        <meta property="og:url" content={current_url} />
        <meta
          property="og:description"
          content={description ?? "Description here"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content={ogImage ?? "#"} />

        <meta name="twitter:title" content={title ?? "Title here"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Product" />
        <meta
          name="twitter:description"
          content={description ?? "Description here"}
        />
        <meta name="twitter:image" content={ogImage ?? "#"} />
      </Head>
    </>
  );
}
