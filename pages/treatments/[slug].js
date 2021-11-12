import { createClient } from "contentful";
import Head from "next/head";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  WrapperDetails,
  StyleImage,
  Buttondiv,
} from "../../styles/StyleSingleTreatment";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "behandlingar",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "behandlingar",
    "fields.slug": params.slug,
  });
  return {
    props: { behandling: items[0] },
  };
}

export default function treatment({ behandling }) {
  const { featuredImage, title, description } = behandling.fields;

  return (
    <>
      <Head>
        <title>Feel Great | Behandling </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <WrapperDetails>
        <div>
          <section>
            <h1>{title}</h1>
            <>{documentToReactComponents(description)} </>
          </section>
          <StyleImage>
            <img src={"https:" + featuredImage.fields.file.url} />
          </StyleImage>
        </div>
      </WrapperDetails>
      <Buttondiv>
        <motion.button
          onClick={() =>
            window.open(
              "https://www.bokadirekt.se/places/feel-great-25951",
              "_blank"
            )
          }
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255",
            boxShadow: "0px 0px 8px rgb(255,255,255",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Boka
        </motion.button>
      </Buttondiv>
    </>
  );
}
