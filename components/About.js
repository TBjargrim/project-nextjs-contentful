import React from "react";

import {
  AboutContainer,
  WrapperAbout,
  AboutInfo,
  TopDiv,
  LogoItems,
} from "./Styles/StyleAbout";
const About = () => {
  return (
    <AboutContainer>
      <TopDiv
        whileHover={{
          scale: 1.04,
          color: "#1B4D4A",
          // textShadow: "0px 0px 2px rgb(255,255,255)",
          boxShadow: "0px 0px 6px rgb(255,255,255)",
        }}
      >
        <h4>Unna dig och boka en tid redan idag </h4>
      </TopDiv>
      <WrapperAbout>
        <AboutInfo>
          <h2>Om oss</h2>
          <p>
            Med många års erfarenhet som hudterapeut och läkare både i Sverige
            och utomlands, jobbar jag idag i härliga lokaler i Vasastan. <br />{" "}
            <br />
            Min bakgrund som läkare hjälper mig att erbjuda mina kunder
            lösningar till deras problem och att skapa en individuell långsiktig
            resultatinriktad terapi.
            <br />
            <br />
            Med vidareutbildnigar inom medicinsk hudvård och estetiska
            behandlingar, diplomerad och certifierad så kan du lita på att jag
            tar hand om din hud på bästa sätt.{" "}
          </p>
        </AboutInfo>
        <LogoItems>
          <img src="/cidesco.jpg" alt="Cidesco Logga" />
          <img src="/itec.jpg" alt="Itec Logga" style={{ marginRight: 10 }} />
          <img src="/SEImage.jpg" alt="SE Logga" />
          <img src="/shr.jpg" alt="SHR Logga" />
        </LogoItems>
        {/* <LocationDiv onClick={showLocation}>
          {/* <LocationIcon /> */}
        {/* <h4>
          Ni hittar oss på Birkagatan 27
          <br /> S:t Eriksplan
        </h4> */}
        {/* </LocationDiv> */}
      </WrapperAbout>
    </AboutContainer>
  );
};

export default About;
