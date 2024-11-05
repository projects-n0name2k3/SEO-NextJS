import Image from "next/image";
import Link from "next/link";
import shopImage from "../../../public/shopImage.png";
export default function Hero() {
  return (
    <>
      <section className="w-full p-[16px] items-center justify-center relative ">
        <Image
          src={shopImage}
          alt="Shop Banner"
          width={100}
          height={100}
          className="w-full"
          priority
        />
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <nav aria-label="Breadcrumb">
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/">Home</Link>
              {">"}
              <Link href="/shop">Shop</Link>
            </div>
          </nav>
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-sm md:text-[54px] md:leading-[58px] font-medium">
              Shop
            </h1>
            <p className="text-xs sm:max-w-[400px] text-center sm:text-lg sm:leading-[30px]">
              Welcome to our online shopping paradise! Explore the wonderful
              products waiting for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
