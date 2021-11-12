import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 350px;
    height: 350px;
    @media (max-width: 960px) {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 960px) {
    width: 150px;
    margin: 10px;
  }
`;
export const InfoProduct = styled.div`
  box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.4);
  margin: 0;
  position: relative;
  top: -40px;
  width: 300px;
  padding: 10px;
  align-items: center;
  background: #d1c5d4;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  h3 {
    text-transform: uppercase;
    color: #1d2020;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    font-weight: 200;
    letter-spacing: 0.3px;
  }
  @media (max-width: 960px) {
    width: 120px;
    /* margin: 10px; */
  }
`;
