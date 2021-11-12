import styled from "styled-components";
import { motion } from "framer-motion";
export const WrapperDetails = styled.div`
  padding: 50px 10px 0 10px;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #d0d5d5;
  div {
    width: 1250px;
    color: #3d4242;
    margin: 20px;
    display: flex;
    padding: 50px;
    h1 {
      margin: 0;
      font-size: 48px;
      letter-spacing: 2px;
      @media (max-width: 960px) {
        font-size: 32px;
      }
    }
    h4 {
      font-size: 32px;
    }
    h5 {
      margin: 25px 0 5px 0;
      font-size: 24px;
    }
    h6 {
      font-size: 16px;
    }
    p {
      font-size: 16px;
      letter-spacing: 0.5px;
      line-height: 25px;
    }
    @media (max-width: 1200px) {
      width: 350px;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 960px) {
    text-align: center;
    padding: 20px 0 20px 0;
    margin: 0;
  }
`;
export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    border-radius: 10px;
    @media (max-width: 960px) {
      width: 200px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Buttondiv = styled(motion.div)`
  background-color: #d0d5d5;
  padding: 0 0 30px 0;
  width: 100%;
  margin: 0;
  text-align: center;
  cursor: pointer;
  z-index: 99;
  button {
    cursor: pointer;
    border: 3px solid #3d4242;
    width: 200px;
    color: #3d4242;
    font-size: 24px;
    padding: 15px 0 15px 0;
    background: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media (max-width: 960px) {
      border: 1px solid #3d4242;
    }
  }
  @media (max-width: 960px) {
    padding: 20px 0 30px 0;
  }
`;
