import Hero from "./(shared)/_Hero/page";
import About from "./(shared)/_About/page";
import Services from "./(shared)/_Services/page";
import Client from "./(shared)/_Client/page";
import Faq from "./(shared)/_FAQ/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Client />
      <Services />
      <Faq />
    </main>
  );
}
