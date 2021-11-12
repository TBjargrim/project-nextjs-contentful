import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCardWrapper } from "./Styles/StyleBlogCard";
const BlogCards = ({ blogg }) => {
  console.log(blogg);
  const { title, slug, thumbnail, shortDescription, date } = blogg.fields;

  return (
    <BlogCardWrapper>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <img src={thumbnail.fields.file.url} />
        <h5>{shortDescription}</h5>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255",
            boxShadow: "0px 0px 8px rgb(255,255,255",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={"/news/" + slug}>Läs mer</Link>
        </motion.div>
      </div>
    </BlogCardWrapper>
  );
};

export default BlogCards;
