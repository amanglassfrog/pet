import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/HomeBanner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import PetShampooSection from "@/components/Petproducts/Petproducts";
import PetHealthSection from "@/components/Productsection/Productsection";
import Image from "next/image";
import Script from "next/script"; 

export default function Home() {
  return (
    <>
      <head>
        <meta name="google-site-verification" content="sl2813YiVanE1sUEhBlAfCmb5oUcjaO-d7oNn_GQI7c" />
        

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
