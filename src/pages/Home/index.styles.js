import styled from 'styled-components'
import { About } from '../../components/Cards'

export const Container = styled.div`
    justify-content: center;
    column-count: 4;
    column-gap: 10px;

`
export const HeaderContainer = styled.div`
    display: flex
    align-items: center;
    margin: 20px 0;
`
export const CardContainer = styled.div`
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
`

export const SmallCardContainer = styled.div`
    grid-row: 1 / -1;
    grid-column: 1;
`
