import Hero from "./(shared)/_Hero/page";
import About from "./(shared)/_About/page";
import Services from "./(shared)/_Services/page";
import Client from "./(shared)/_Client/page";
import Faq from "./(shared)/_FAQ/page";
import Testimonial from "./(shared)/_Testimonial/page";

export default function Home() {
  return (
    <main className="mainHome">
      <Hero />
      <About />
      <Client />
      <Services />
      <Testimonial />
      <Faq />
    </main>
  );
}
