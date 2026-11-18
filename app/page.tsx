import { Cover } from "@/components/sections/Cover";
import { Footer } from "@/components/sections/Footer";
import { Insights } from "@/components/sections/Insights";
import { Meet } from "@/components/sections/Meet";
import { Partners } from "@/components/sections/Partners";
import { Themes } from "@/components/sections/Themes";

export default function Home() {
  return (
    <>
      <main id="main">
        <Cover />
        <Meet />
        <Insights />
        <Themes />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
