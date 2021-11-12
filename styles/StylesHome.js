import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowDown } from "react-icons/bs";

export const ContainerDiv = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  overflow: hidden;
  background: #d0d5d5;
  /* background: linear-gradient(-45deg, #d0d5d5, #b2bfbe, #7f9897, #1b4d4a);
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
  } */
`;
export const ContainerAboutHome = styled.div``;
export const LogoImg = styled(motion.img)`
  width: 150px;
  @media (max-width: 960px) {
    width: 100px;
  }
`;

export const Header = styled(motion.h1)`
  margin: 100px 0 100px 0;
  font-weight: 300;
  font-size: 68px;
  color: #3e393f;
  letter-spacing: 3px;
  text-align: center;
  @media (max-width: 750px) {
    font-size: 38px;
    margin: 50px 0 0 0;
  }
`;
export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    top: 22%;
    margin: 0 50px 0 50px;
  }
  @media screen and (max-width: 490px) {
    margin: 5px;
  }
`;
export const ArrowDown = styled(BsArrowDown)`
  position: absolute;
  bottom: 2%;
  left: 80%;
  color: #ffffff;
  font-size: 24px;
  z-index: 100;
  height: 50px;
  font-weight: 200;
`;

export const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    cursor: pointer;
    flex-wrap: wrap;
    list-style: none;
    width: 450px;
    margin: 10px;
    position: relative;
    background-color: black;

    img {
      opacity: 0.5;
      width: 100%;
      height: 100%;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      @media (max-width: 960px) {
        width: 150px;
      }
    }
    h5 {
      margin: 0;
      width: 100%;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 7px;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 32px;
      color: #d0d5d5;
      text-transform: uppercase;
      letter-spacing: 2px;
      @media (max-width: 960px) {
        font-size: 24px;
      }
    }
    @media (max-width: 960px) {
      width: 150px;
    }
  }
`;

export const InfoDiv = styled.div`
  position: relative;
  h4 {
    margin: 50px 80px 80px 80px;
    color: #3e393f;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 32px;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 24px;
      margin: 20px;
    }
  }
  h5 {
    margin: 50px 80px 80px 80px;
    color: #ffffff;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 24px;
    text-align: center;
    @media screen and (max-width: 900px) {
      font-size: 16px;
      margin: 50px 80px 80px 80px;
    }
  }
`;
