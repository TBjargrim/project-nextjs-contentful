import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  SingleNewsWrapper,
  ImageDiv,
  DateP,
} from "../../styles/StyleSingleNews";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogg",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogg",
    "fields.slug": params.slug,
  });
  return {
    props: { blogg: items[0] },
  };
}
export default function blogPost({ blogg }) {
  const { title, date, description, image1, image2, image3, image4 } =
    blogg.fields;
  return (
    <>
      <Head>
        <title>Feel Great | Erbjudanden </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <SingleNewsWrapper>
        <div>
          <h1>{title}</h1>
          <DateP>{date}</DateP>
        </div>
        <div>
          <div>
            <>{documentToReactComponents(description)}</>
          </div>
        </div>
        <ImageDiv>
          <img src={"https:" + image1.fields.file.url} />
          <img src={"https:" + image2.fields.file.url} />
          <img src={"https:" + image3.fields.file.url} />
          <img src={"https:" + image4.fields.file.url} />
        </ImageDiv>
      </SingleNewsWrapper>
    </>
  );
}
