import Link from "next/link";

import {
  CardWrapper,
  Imagediv,
  Infodiv,
  Buttondiv,
  ButtondivBook,
} from "./Styles/StyleTreatCard";

const TreatmentCard = ({ behandling }) => {
  const { title, slug, thumbnail, shortDescription } = behandling.fields;
  return (
    <CardWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Imagediv>
        <img src={"https:" + thumbnail.fields.file.url} />
      </Imagediv>
      <Infodiv>
        <h4>{title}</h4>
        {/* <p>{shortDescription}</p> */}
      </Infodiv>
      <Buttondiv
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255",
          boxShadow: "0px 0px 8px rgb(255,255,255",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"/treatments/" + slug}>
          <a>Mer info</a>
        </Link>
      </Buttondiv>
      <ButtondivBook
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255",
          boxShadow: "0px 0px 8px rgb(255,255,255",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() =>
            window.open(
              "https://www.bokadirekt.se/places/feel-great-25951",
              "_blank"
            )
          }
        >
          <a>Boka</a>
        </button>
      </ButtondivBook>
    </CardWrapper>
  );
};

export default TreatmentCard;
