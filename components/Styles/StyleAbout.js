import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled.div`
  position: relative;
`;
export const WrapperAbout = styled.div`
  padding-bottom: 60px;
  background-color: #d0d5d5;
`;
export const TopDiv = styled(motion.div)`
  cursor: pointer;
  height: 6vh;
  /* background-color: #56315b; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #56315b, #361f39, #694b6d, #726574);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  h4 {
    color: #d0d5d5;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 24px;
    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;
export const AboutInfo = styled.div`
  padding-top: 50px;
  h2 {
    font-weight: 200;
    letter-spacing: 1px;
    text-align: center;
    color: #3e393f;
    font-size: 48px;
  }
  p {
    font-weight: 200;
    margin: 30px 250px 30px 250px;
    text-align: center;
    color: #5e6868;
    font-size: 24px;
    @media (max-width: 900px) {
      margin: 30px;
      font-size: 16px;
    }
  }
`;
export const LogoItems = styled.div`
  margin: 60px 0 0 0;
  background-color: #d0d5d5;
  display: flex;
  justify-content: center;

  img {
    width: 10%;
    border-radius: 50%;
    margin: 10px;
  }
`;
