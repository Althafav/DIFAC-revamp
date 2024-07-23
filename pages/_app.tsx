import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LayoutComponent from "../components/LayoutComponent";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {

  }, [router]);

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );

}

export default MyApp;
