import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
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

export const Head: HeadFC = () => <title>Home Page</title>;
