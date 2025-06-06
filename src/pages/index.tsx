import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

declare global {
  interface Window {
    dataLayer?: { push: (event: Record<string, any>) => void };
  }
}

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "received_user_group",
          usergroup: "starter",
          eventTimeout: 5000,
        });

        window.dataLayer.push({
          event: "received_mc_user_id",
          mcUserId: "1232",
        });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="m-16">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hi, i'm Brandon
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Here is one of my favorite quotes from a book I am reading:
      </p>
      <br />
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        “The best thing for being sad," replied Merlin, beginning to puff and
        blow, "is to learn something. That's the only thing that never fails.
        You may grow old and trembling in your anatomies, you may lie awake at
        night listening to the disorder of your veins, you may miss your only
        love, you may see the world about you devastated by evil lunatics, or
        know your honour trampled in the sewers of baser minds. There is only
        one thing for it then — to learn. Learn why the world wags and what wags
        it. That is the only thing which the mind can never exhaust, never
        alienate, never be tortured by, never fear or distrust, and never dream
        of regretting. Learning is the only thing for you. Look what a lot of
        things there are to learn.”
        <span className="text-base not-italic font-medium">
          ― T.H. White, The Once and Future King
        </span>
      </blockquote>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Brandon Herr</title>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KN4NKTPH');
        `,
      }}
    />
  </>
);
