import styled from 'styled-components'
import { theme } from '../../index.styles'

export const Container = styled.div`
    border-radius: 32px;
    background: ${theme.primary};
    box-shadow: transparent 0px 0px 0px 2px ${theme.primary} inset;
    padding: 240px 36px;    
    @media (min-width: 500px) {
        padding: 240px 36px; 
    }
`
