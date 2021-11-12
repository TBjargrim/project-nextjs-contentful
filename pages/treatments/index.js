import Head from "next/head";
import { createClient } from "contentful";
import TreatmentCard from "../../components/TreatmentCard";
import { motion } from "framer-motion";
import { TreatmentWrapper, TreatmentDiv } from "../../styles/StylesTreatment";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "behandlingar" });
  return {
    props: {
      behandlingar: res.items,
    },
  };
}

const treatments = ({ behandlingar }) => {
  return (
    <>
      <Head>
        <title>Feel Great | Behandlingar </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <TreatmentWrapper>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Behandlingar
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Erbjuder ett stort utbud av professionella behandlingar. Från de mest
          klassiska till mer avancerade behandlingar.
        </motion.h3>
        <TreatmentDiv>
          {behandlingar.map((behandling) => (
            <TreatmentCard behandling={behandling} key={behandling.sys.id} />
          ))}
        </TreatmentDiv>
      </TreatmentWrapper>
    </>
  );
};

export default treatments;
