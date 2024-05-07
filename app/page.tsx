import Image from "next/image";
import Hero from "./(shared)/_Hero/page";
import About from "./(shared)/_About/page";
import Services from "./(shared)/_Services/page";
import Client from "./(shared)/_Client/page";
import Achievement from "./(shared)/_Achievement/page";
import FAQ from "./(shared)/_FAQ/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Client />
      <Achievement />
      <FAQ />
      {/* <div className="mt-8">
          <h1 className="text-2xl text-red-500">Test doang</h1>
        </div> */}
    </main>
  );
}
