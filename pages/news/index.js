import Head from "next/head";
import { createClient } from "contentful";
import BlogCards from "../../components/BlogCards";

import { Top, NewsWrapper } from "../../styles/StyleNews";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogg" });
  return {
    props: {
      bloggs: res.items,
    },
  };
}

export default function products({ bloggs }) {
  return (
    <>
      <Head>
        <title>Feel Great | Erbjudanden </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <Top>Just nu!</Top>
      <NewsWrapper>
        {bloggs.map((blogg) => (
          <BlogCards key={blogg.sys.id} blogg={blogg} />
        ))}
      </NewsWrapper>
    </>
  );
}
