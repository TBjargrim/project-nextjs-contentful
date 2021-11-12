import styled from "styled-components";

export const ProductsWrapper = styled.div`
  background: #d0d5d5;
  padding-top: 50px;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 48px;
    /* color: #b2bfbe; */
    color: #3d4242;
    letter-spacing: 2px;
  }
  h3 {
    text-align: center;
    color: #3d4242;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 16px;
  }
`;
export const ProductDiv = styled.div`
  margin: 100px 50px 0 50px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 960px) {
    margin: 50px 0 0 0;
  }
`;
