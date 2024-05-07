import Image from "next/image";
import Navbar from "./(shared)/_Navbar/page";
import Footer from "./(shared)/_Footer/page";
// import Hero from "@/components/Hero/Hero";
import Hero from "./(shared)/_Hero/page";
import About from "./(shared)/_About/page";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        {/* <Hero /> */}
        <div className="mt-8">
          <h1 className="text-2xl text-red-500">Test doang</h1>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
