import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section title="Model S" description="Order Online for Touchless Delivery" backGroundImg="model-s.jpg" leftBtn="left" rigthBtn='right' />
      <Section title="Model S1" description="Order Online for Touchless Delivery1" backGroundImg="model-x.jpg" leftBtn="left" rigthBtn='right'/>
      <Section title="Model S2" description="Order Online for Touchless Delivery2" backGroundImg="model-y.jpg" leftBtn="left" rigthBtn='right'/>
      <Section title="solar" description="Order Online solar" backGroundImg="solar-panel.jpg" leftBtn="left" rigthBtn='right'/>
      <Section title="solar" description="Order Online solar" backGroundImg="solar-roof.jpg" leftBtn="left" rigthBtn='right'/>
      <Section title="accessories"  backGroundImg="accessories.jpg" rigthBtn="Shop"/>




    </Container>
  )
}

export default Home
const Container=styled.div`

height: 100vh
`