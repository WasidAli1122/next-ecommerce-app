import Layout from "@/layout/Layout";
import { Raleway } from "@next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

const montserrat = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <NextNProgress color="#ffb302" height={2} />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
