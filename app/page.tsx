import { Contact } from "@/components/sections/Contact";
import { Cover } from "@/components/sections/Cover";
import { Footer } from "@/components/sections/Footer";
import { Insights } from "@/components/sections/Insights";
import { KeyStats } from "@/components/sections/KeyStats";
import { Meet } from "@/components/sections/Meet";
import { Partners } from "@/components/sections/Partners";
import { Reach } from "@/components/sections/Reach";
import { Themes } from "@/components/sections/Themes";
import { Videos } from "@/components/sections/Videos";

export default function Home() {
  return (
    <>
      <main id="main">
        <Cover />
        <Meet />
        <Insights />
        <Reach />
        <Themes />
        <Videos />
        <KeyStats />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
