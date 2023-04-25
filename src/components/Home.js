import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section title="Model S" description="Order Online for Touchless Delivery" backGroundImg="model-s.jpg"/>
      <Section title="Model S1" description="Order Online for Touchless Delivery1" backGroundImg="model-x.jpg"/>
      <Section title="Model S2" description="Order Online for Touchless Delivery2" backGroundImg="model-y.jpg"/>


    </Container>
  )
}

export default Home
const Container=styled.div`

height: 100vh
`