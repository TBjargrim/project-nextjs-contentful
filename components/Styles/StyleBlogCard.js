import styled from "styled-components";

export const BlogCardWrapper = styled.div`
  margin: 20px 0 20px 0;
  padding: 20px 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    padding: 20px 0 20px 0;
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #1b4d4a;
    img {
      width: 250px;
    }
    h3 {
      margin: 0;
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 1.5px;
      color: #3d4242;
    }
    h5 {
      color: #3d4242;
      text-align: center;
      font-size: 16px;
      font-weight: 200;
    }
    p {
      color: #3d4242;
    }
    div {
      cursor: pointer;
      border: 3px solid #3d4242;
      width: 100px;
      font-size: 16px;
      text-align: center;
      padding: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      a {
        color: #3d4242;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`;
