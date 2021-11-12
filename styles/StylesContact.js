import styled from "styled-components";
import { motion } from "framer-motion";
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";

export const ContainerDivContact = styled.div`
  padding: 80px 0 0 0;
  position: relative;
  background: #d0d5d5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    text-align: center;
    font-size: 48px;
    color: #3d4242;
    letter-spacing: 2px;
  }
  h3 {
    margin: 70px 0 100px 0;
    text-align: center;
    color: #3d4242;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 40px;
    @media (max-width: 960px) {
      margin: 0 0 50px 0;
    }
  }
  h4 {
    margin: 20px;
    text-align: center;
    line-height: 32px;
    color: #3d4242;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 24px;
    @media (max-width: 960px) {
      margin: 10px 0 0 0;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Wrapper = styled.div`
  /* margin: 100px 60px 100px 60px;
  outline: 1px solid #1b4d4a;
  outline-offset: 15px; */
  position: relative;
`;
export const InfoWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin: 20px 70px 0 70px;
  text-align: center;
  padding: 15px 0 15px 0;
  @media (max-width: 960px) {
    margin: 10px;
    justify-content: center;
  }
`;
export const InfoDiv = styled(motion.div)`
  margin: 25px;
  cursor: pointer;
  padding: 15px;
  p {
    margin: 20px 0 0 0;
    color: #9d8ba0;
    font-weight: 200;
    font-size: 24px;
    @media (max-width: 790px) {
      font-size: 12px;
    }
  }
  @media (max-width: 960px) {
    padding: 10px 20px 10px 20px;
  }
`;
export const Adressp = styled.p`
  margin: 20px 0 0 0;
  color: #1b4d4a;
  letter-spacing: 0.5px;
  font-size: 24px;
`;
export const LocationIcon = styled(GoLocation)`
  color: #56315b;
  font-size: 64px;
  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const MailIcon = styled(GoMail)`
  color: #56315b;
  font-size: 64px;
  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
export const PhoneIcon = styled(AiOutlinePhone)`
  color: #56315b;
  font-size: 64px;
  @media (max-width: 960px) {
    font-size: 32px;
  }
`;
