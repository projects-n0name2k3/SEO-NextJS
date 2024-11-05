import { Suspense } from "react";
import Hero from "@/app/components/Hero/Hero";
import ProductSection from "@/app/components/ProductSection";
import Loading from "@/app/loading";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductSection />
      </Suspense>
      <Footer />
    </>
  );
}
