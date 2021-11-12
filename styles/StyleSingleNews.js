import styled from "styled-components";
export const SingleNewsWrapper = styled.div`
  padding: 20px 10px 50px 10px;
  background-color: #d0d5d5;
  div {
    color: #3d4242;
    padding: 0 50px 0 50px;
    h1 {
      text-align: center;
      font-size: 48px;
      letter-spacing: 2px;
      @media (max-width: 960px) {
        font-size: 40px;
      }
    }
    span {
      font-size: 16px;
    }
    h4 {
      font-size: 32px;
    }
    h5 {
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
    @media (max-width: 960px) {
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

export const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    margin: 20px;
    height: 200px;
    width: 200px;
  }
`;
export const DateP = styled.p`
  text-align: center;
`;
