import { ProductWrapper, InfoProduct } from "./Styles/StyleProdCard";

export default function ProductCard({ produkt }) {
  const { title, featuredImage, shortDescription } = produkt.fields;
  return (
    <ProductWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <img src={"https:" + featuredImage.fields.file.url} />
      {/* <InfoProduct>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {shortDescription}
        </motion.p>
      </InfoProduct> */}
    </ProductWrapper>
  );
}
