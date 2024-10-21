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
