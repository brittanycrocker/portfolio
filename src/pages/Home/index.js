import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { Container, HeaderContainer, CardContainer } from './index.styles'

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  )
}

export default Home
