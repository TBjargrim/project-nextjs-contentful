import Head from "next/head";
import { motion } from "framer-motion";
import {
  ContainerDivContact,
  Wrapper,
  InfoWrapper,
  InfoDiv,
  Adressp,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../styles/StylesContact";
const contact = () => {
  const sendEmail = () => {
    window.location = "mailto:fridaby@gmail.com";
  };
  const makeCall = () => {
    window.location = "tel:+468335080";
  };
  const showLocation = () => {
    // window.location ="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003"
    window.location =
      "http://maps.google.com/?q=Birkagatan 27, Stockholm, Sweden";
  };

  return (
    <>
      <Head>
        <title>Feel Great | Kontakt </title>
        <meta name="keyboards" content="skincare, beauty, hudvård" />
        <link rel="shortcut icon" href="/FgPurple.ico" />
      </Head>
      <ContainerDivContact id="kontakt">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Kontakta oss{" "}
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Ni hittar oss på: <br />
          Birkagatan 27 <br />
          St Eriksplan, Stockholm
        </motion.h4>
        <Wrapper>
          <InfoWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <InfoDiv
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={showLocation}
            >
              <LocationIcon />

              <Adressp>Hitta hit</Adressp>
            </InfoDiv>
            <InfoDiv
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={sendEmail}
            >
              <MailIcon />
              <p>Maila oss</p>
            </InfoDiv>
            <InfoDiv
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={makeCall}
            >
              <PhoneIcon />
              <p>Ring oss</p>
            </InfoDiv>
          </InfoWrapper>
        </Wrapper>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Varmt välkommen!
        </motion.h3>
      </ContainerDivContact>
    </>
  );
};

export default contact;
