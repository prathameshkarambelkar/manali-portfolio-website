import { Cover } from "@/components/sections/Cover";
import { Footer } from "@/components/sections/Footer";
import { Insights } from "@/components/sections/Insights";
import { Meet } from "@/components/sections/Meet";
import { Partners } from "@/components/sections/Partners";
import { Themes } from "@/components/sections/Themes";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/site-url";

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      url: siteUrl,
      name: `${site.name} — Creator Portfolio`,
      mainEntity: {
        "@type": "Person",
        name: site.name,
        alternateName: site.handle,
        jobTitle: site.role,
        url: siteUrl,
        image: `${siteUrl}/images/meet-manali.webp`,
        sameAs: [site.instagram, site.foodInstagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressCountry: "IN",
        },
        email: site.email,
        knowsAbout: site.tags,
      },
    },
  ],
}).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
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
