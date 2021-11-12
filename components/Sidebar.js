import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cecbce;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #3e393f;
  @media (max-width: 960px) {
    font-size: 24px;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SidebarWrapper = styled.div``;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledA = styled(motion.a)`
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 200;
  cursor: pointer;
  color: #3e393f;
  margin: 20px 0 20px 0;
  padding: 10px 0 10px 0;
  text-decoration: none;
  @media (max-width: 960px) {
    font-size: 24px;
    margin: 5px;
  }
`;

const SocialSidebar = styled.div`
  text-align: center;
`;
const FacebookIcon = styled(FaFacebook)`
  margin: 0 0 0 20px;
  border: 1px solid #3e393f;
  border-radius: 50%;
  padding: 10px;
  color: #3e393f;
  font-size: 56px;
  margin: 50px 10px 0 20px;
  cursor: pointer;
  &:hover {
    color: #3e393f;
  }
  @media (max-width: 960px) {
    font-size: 42px;
  }
`;
const InstagramIcon = styled(FaInstagram)`
  margin: 0 0 0 20px;
  border: 1px solid #3e393f;
  border-radius: 50%;
  padding: 10px;
  color: #3e393f;
  font-size: 56px;
  margin: 50px 10px 0 20px;
  cursor: pointer;
  &:hover {
    color: #3e393f;
  }
  @media (max-width: 960px) {
    font-size: 42px;
  }
`;
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 6px rgb(255,255,255)",
          }}
        >
          <Link href="/news">
            <StyledA
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Nyheter & Erbjudanden
            </StyledA>
          </Link>
          <Link href="/">
            <StyledA
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Hem
            </StyledA>
          </Link>
          <Link href="/treatments">
            <StyledA
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Behandlingar
            </StyledA>
          </Link>
          <Link href="/products">
            <StyledA
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Produkter
            </StyledA>
          </Link>
          <Link href="/contact">
            <StyledA
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255",
                boxShadow: "0px 0px 8px rgb(255,255,255",
              }}
              whileTap={{ scale: 0.9 }}
            >
              Kontakt
            </StyledA>
          </Link>
        </SidebarMenu>

        <SocialSidebar>
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
        </SocialSidebar>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
