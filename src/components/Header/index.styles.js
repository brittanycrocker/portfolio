import styled from 'styled-components'
import { theme } from '../../index.styles'

export const Container = styled.div`
    display: flex;
    background-color: ${theme.primary};
    width: 100%;
    // grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    border-radius: 16px;
    height: 32px;
    padding: 16px;
    @media (min-width: 500px ) {
        width: 100%;
        height: 32px;
        padding: 16px;
    }
`

export const ButtonContainer = styled.div`
    padding: 5px;
`
