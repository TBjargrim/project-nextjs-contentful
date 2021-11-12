import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
export const FooterWrapper = styled.div`
  position: relative;
  top: 0;
`;
export const FooterContainer = styled.div`
  padding: 40px 0 40px 0;
  background-color: #56315b;
  display: flex;
  justify-content: space-evenly;
  color: #d0d5d5;
  text-align: center;
`;
export const Contact = styled(motion.div)`
  cursor: pointer;
  line-height: 30px;
  h5 {
    font-size: 24px;
    font-weight: 200;
    @media (max-width: 960px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 16px;
    @media (max-width: 960px) {
      font-size: 12px;
    }
  }
`;
export const ChatIcon = styled(AiOutlineWechat)`
  font-size: 40px;
  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const Adress = styled(motion.div)`
  cursor: pointer;
  line-height: 30px;
  h5 {
    font-size: 24px;
    font-weight: 200;
    @media (max-width: 960px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 16px;
    @media (max-width: 960px) {
      font-size: 12px;
    }
  }
  @media screen and(max-width:960px) {
    line-height: 24px;
  }
`;
export const LocationIcon = styled(GoLocation)`
  font-size: 40px;
  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const BottomDiv = styled.div`
  padding: 40px 0 40px 0;
  background-color: #d0d5d5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FacebookIcon = styled(FaFacebook)`
  margin: 0 20px 0 0;
  border: 4px solid #3e393f;
  border-radius: 50%;
  padding: 5px;
  color: #3e393f;
  font-size: 56px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    border: 2px solid #3e393f;
    font-size: 48px;
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  margin: 0 0 0 20px;
  border: 4px solid #3e393f;
  border-radius: 50%;
  padding: 5px;
  color: #3e393f;
  font-size: 56px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    border: 2px solid #3e393f;
    font-size: 48px;
  }
`;
