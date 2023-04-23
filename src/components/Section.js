import React from "react";
import styled, { keyframes } from "styled-components";
const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>left</LeftButton>
        <RightButton>Right</RightButton>
      </ButtonGroup>
      <DrownArrow src="images/down-arrow.svg"></DrownArrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/images/model-x.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 60px;
`;
const RightButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  margin:8px
`;
const LeftButton = styled(RightButton)`
background-color:white;
color:black;
opacity:0.65;
`;

const DrownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x:hidden;
  animation: animateDown infinite 1.5s ease-in;
`;
const Buttons=styled.div``
