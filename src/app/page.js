import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/HomeBanner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import PetShampooSection from "@/components/Petproducts/Petproducts";
import PetHealthSection from "@/components/Productsection/Productsection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <meta name="google-site-verification" content="sl2813YiVanE1sUEhBlAfCmb5oUcjaO-d7oNn_GQI7c" />
         <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E2K2R6FDCZ"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E2K2R6FDCZ', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      </head>
      <Navbar />
      <Banner />
      <PetHealthSection/>
      <Features />
       <PetShampooSection/>
      <Newsletter />
      <Footer/>
     
    </>
  );
}
