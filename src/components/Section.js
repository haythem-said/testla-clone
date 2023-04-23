import React from 'react'
import styled from 'styled-components'
const Section = () => {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
        <ButtonGroup>
        <LeftButton>left</LeftButton>
            <RightButton>Right</RightButton>
            
        </ButtonGroup>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-image:url('/images/model-x.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center
`
const ItemText=styled.div`
padding-top:15vh;
text-align:center
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:60px;
`
const RightButton =styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:black;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
border-radius:100px;
text-transform:uppercase;
font-size:16px
`
const LeftButton=styled(RightButton)``