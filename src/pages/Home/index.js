import React from 'react'
import Header from '../../components/Header'
import { About, Projects } from '../../components/Cards'
import { Container, HeaderContainer, CardContainer, SmallCardContainer } from './index.styles'

const Home = () => {
  const text = {
    about: "I'm Brittany a Junior Full Stack Engineer based in Australia."
  }

  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <CardContainer>
          <SmallCardContainer><About /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><Projects /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><Projects /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><About /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><About /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><About /></SmallCardContainer>
        </CardContainer>
        <CardContainer>
          <SmallCardContainer><Projects /></SmallCardContainer>
        </CardContainer>
      </Container>
    </div>
  )
}

export default Home
