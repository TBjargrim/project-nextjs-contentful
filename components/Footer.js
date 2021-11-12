import { motion } from "framer-motion";
import {
  FooterContainer,
  Adress,
  FacebookIcon,
  InstagramIcon,
  Contact,
  LocationIcon,
  ChatIcon,
  BottomDiv,
  FooterWrapper,
} from "./Styles/StyleFooter";

const Footer = () => {
  const showLocation = () => {
    window.location =
      "http://maps.google.com/?q=Birkagatan 27, Stockholm, Sweden";
  };
  const makeCall = () => {
    window.location = "tel:+468335080";
  };
  const sendEmail = () => {
    window.location = "mailto:fridaby@gmail.com";
  };
  return (
    <FooterWrapper>
      <FooterContainer>
        <Adress onClick={showLocation} whileHover={{ scale: 1.3 }}>
          <LocationIcon />
          <h5>Hitta hit</h5>
          <p>Birkagatan 27</p>
          <p>St Eriksplan, Vasastan</p>
        </Adress>
        <Contact>
          <ChatIcon />
          <h5>Kontakt</h5>
          <motion.p onClick={makeCall} whileHover={{ scale: 1.3 }}>
            Telefon: 08-33 50 80
          </motion.p>
          <motion.p onClick={sendEmail} whileHover={{ scale: 1.3 }}>
            E-post: fridabay@gmail.com
          </motion.p>
        </Contact>
      </FooterContainer>
      <BottomDiv>
        <FacebookIcon
          onClick={() =>
            window.open(
              "https://www.facebook.com/Feel-Great-AB-789663701096154/",
              "_blank"
            )
          }
        />
        <InstagramIcon
          onClick={() =>
            window.open("https://www.instagram.com/feelgreatab/", "_blank")
          }
        />
      </BottomDiv>
    </FooterWrapper>
  );
};

export default Footer;
