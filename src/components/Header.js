import React from 'react'
import styled from 'styled-components'
import MenuIcon from './Icons'
const Header = () => {
  return (
    <Container>
      <a> 
        <img src='images/logo.svg '/>
      </a>
      <Menu>
      <a href='#'> Model 1</a>

         <a href='#'> Model 3</a>

         <a href='#'> Model X</a>

         <a href='#'> Model Y</a>


      </Menu>
      <RightMenu>
      <a href='#'> Shop</a>
      <a href='#'> Tesla Account</a>
      <MenuIcon /> 

      </RightMenu>
      
    </Container>
  )
}

export default Header


const Container=styled.div`
min-height:60px;
position:fixed;
display:flex  ;
padding: 0 20px;
align-items:center;
top:0;
left:0;
right:0;

  justify-content:space-between

`
const Menu=styled.div`
align-items:center;
display:flex;

flex:1;
justify-content:center;


a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap: nowrap;
  
}
@media(max-width:768px){
  display:none
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap: nowrap;
  
}

`
