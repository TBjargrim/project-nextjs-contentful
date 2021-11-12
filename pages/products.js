import Head from "next/head";
import { createClient } from "contentful";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { ProductsWrapper, ProductDiv } from "../styles/StylesProduct";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "produkter" });
  return {
    props: {
      produkter: res.items,
    },
  };
}

export default function products({ produkter }) {
  console.log(produkter);

  return (
    <>
      <Head>
        <title>Feel Great | Produkter </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <ProductsWrapper>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Produkter
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Vi använder oss av produkter som vi vet är några av de bästa på
          marknaden.{" "}
        </motion.h3>
        <ProductDiv>
          {produkter.map((produkt) => (
            <ProductCard produkt={produkt} key={produkt.sys.id} />
          ))}
        </ProductDiv>
      </ProductsWrapper>
    </>
  );
}
