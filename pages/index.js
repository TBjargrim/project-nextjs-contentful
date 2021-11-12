import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import {
  ContainerDiv,
  WrapperDiv,
  ArrowDown,
  Header,
  StyledUL,
  LogoImg,
  InfoDiv,
  ContainerAboutHome,
} from "../styles/StylesHome";

const GlobalStyle = createGlobalStyle`
*,
html {
  margin: 0;
  padding: 0;
  /* font-family: , sans serif; */
  font-family: 'Mohave', sans-serif;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Feel Great | Home </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mohave:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <GlobalStyle />
      <ContainerDiv>
        <WrapperDiv>
          <LogoImg
            src="/FgPurple.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          />
          <Header
            initial={{ y: -500 }}
            animate={{ y: -10 }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            FEEL GREAT BEAUTY
          </Header>
          <InfoDiv></InfoDiv>
          <StyledUL>
            <motion.li
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/treatments">
                <img src="/facial.jpg" />
              </Link>
              <h5>Behandling</h5>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/products">
                <img src="/facial.jpg" />
              </Link>
              <h5>Produkter</h5>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/contact">
                <img src="/facial.jpg" />
              </Link>
              <h5>Kontakt</h5>
            </motion.li>
          </StyledUL>
          <InfoDiv>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              Vi erbjuder hudvård och resultatinriktade, avancerade behandlingar{" "}
              <br />
              för kropp och ansikte. <br />{" "}
            </motion.h4>
          </InfoDiv>
        </WrapperDiv>
        <ArrowDown />
      </ContainerDiv>
      <ContainerAboutHome>
        <About />
      </ContainerAboutHome>
    </>
  );
}
