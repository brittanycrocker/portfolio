import React, { useState } from 'react'
import { Container, ButtonContainer, Button } from './index.styles'
import { theme } from '../../index.styles'

const Header = (pages) => {
  const [clickedPage, setClickedPage] = useState('')

  pages = ['Projects', 'Contact']
  // TODO: map through pages and return button for each, on click visit page route

  // const onClick = () => {

  // }

  console.log(clickedPage)

  return (
    <div>
      <Container>
        {pages.map((p) => {
          if (clickedPage === p) {
            return <ButtonContainer style={{ background: theme.secondary, zIndex: '100', borderRadius: '16px' }}>{p}</ButtonContainer>
          }
          return <ButtonContainer onClick={() => setClickedPage(p)}>{p}</ButtonContainer>
        })}
      </Container>
    </div>
  )
}

export default Header
