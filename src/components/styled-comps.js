import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`
export const Child = styled.div`
    ${props => props.left ? "flex: 1" : "flex: 3"}
`
export const ButtonGroup = styled.div`
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
`