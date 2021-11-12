import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
export const MobileIcon = styled.div`
  position: relative;
  background-color: #d0d5d5;
  height: 100px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  @media (max-width: 960px) {
    height: 70px;
  }
`;

export const BurgerMenyIcon = styled(FaBars)`
  color: #56315b;
  font-size: 48px;
  margin: 80px 80px 50px 0;
  @media (max-width: 960px) {
    margin: 20px 20px 0 0;
    font-size: 24px;
  }
`;
export const NewsBanner = styled(motion.div)`
  background-color: #56315b;
  cursor: pointer;
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
  p {
    margin: 0;
    padding: 10px 0 10px 0;
    color: #d0d5d5;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }
`;
