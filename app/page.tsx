import { Contact } from "@/components/sections/Contact";
import { Cover } from "@/components/sections/Cover";
import { Footer } from "@/components/sections/Footer";
import { Insights } from "@/components/sections/Insights";
import { Meet } from "@/components/sections/Meet";
import { Partners } from "@/components/sections/Partners";
import { Themes } from "@/components/sections/Themes";
import { Videos } from "@/components/sections/Videos";

export default function Home() {
  return (
    <>
      <main id="main">
        <Cover />
        <Meet />
        <Insights />
        <Themes />
        <Videos />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
