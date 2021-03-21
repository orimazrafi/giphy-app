import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <WelcomeText>
        Welcome to GIPHY APP. please click on the right top corner login link in
        order to start using this app.
      </WelcomeText>
      <ImageWrpper>
        <img
          className="welcome"
          src={
            "https://media4.giphy.com/media/26u4b9C5zxNPB3qNy/200_d.gif?cid=a67d5148rix88d3zpy2obmzpb3im3jxow4qtui3b94tqpz8v&rid=200_d.gif"
          }
          alt={"welcome"}
        />
      </ImageWrpper>
    </>
  );
};
export default Welcome;

const WelcomeText = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
`;

const ImageWrpper = styled.div`
  text-align: center;
  margin-top: 20px;
  & > img.welcome {
    height: 400px;
  }
`;
