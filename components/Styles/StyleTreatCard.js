import styled from "styled-components";
import { motion } from "framer-motion";
export const CardWrapper = styled(motion.div)`
  width: 500px;
  height: 500px;
  margin: 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (max-width: 960px) {
    width: 300px;
    height: 300px;
  }
`;
export const Imagediv = styled.div`
  position: absolute;
  background-color: black;
  width: 500px;
  height: 500px;

  img {
    opacity: 0.4;
    width: 500px;
    height: 500px;
    @media (max-width: 960px) {
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 960px) {
    width: 300px;
    height: 300px;
  }
`;
export const Infodiv = styled.div`
  position: absolute;
  z-index: 2;
  padding: 0 0 0 15px;
  h4 {
    color: #d0d5d5;
    font-size: 32px;
    @media (max-width: 960px) {
      font-size: 24px;
    }
  }
  p {
    color: #d0d5d5;
    font-size: 24px;
    @media (max-width: 960px) {
      font-size: 16px;
    }
  }
`;
export const Buttondiv = styled(motion.div)`
  margin: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 3px solid #d0d5d5;
  width: 100px;
  font-size: 16px;
  text-align: center;
  padding: 15px;
  a {
    color: #d0d5d5;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media (max-width: 960px) {
    border: 2px solid #d0d5d5;
  }
`;
export const ButtondivBook = styled(motion.div)`
  margin: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 3px solid #d0d5d5;
  width: 100px;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  button {
    color: #d0d5d5;
    font-size: 16px;
    padding: 0;
    border: none;
    background: none;
    text-transform: uppercase;
    cursor: pointer;
  }
  @media (max-width: 960px) {
    border: 2px solid #d0d5d5;
  }
`;
