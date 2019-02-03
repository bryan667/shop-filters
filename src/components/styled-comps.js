import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`
export const Child = styled.div`
    ${props => props.left ? "flex: 1" : "flex: 3"}
    
`

// ============ BUTTONS ============ //

export const ButtonGroup = styled.div`
    display: flex;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
`

export const Buttons = styled.button`
    border: 1px solid rgb(201, 201, 201);
    outline: none;
    padding: 1.2rem 1.6rem;
    background-color: #ececec;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
    ${props => props.active ? 
        `background-color: rgb(187, 215, 233);` :
        ''
    }
`

// ============ ACCORDION ============ //

export const AccordBlock = styled.div`
    display: flex;
    align-items: center;
    ${props => props.accord && `
        flex: 0;
        align-items: right;
        background-color: rgb(132, 177, 231);
        width: 100%;
        padding: 1.1rem;
        transition: 0.4s;`
    }
    ${props => props.subcatLabel && `
        text-transform: uppercase;
        background-color: rgb(188, 215, 235);
        height: 2rem;    
        padding-left: 1.5rem;`
    }
    ${props => props.panelItems && `
        display: block;
        background-color: rgb(217, 232, 243);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;`
    }
    ${props => props.checkcont && `
        height: 2rem;
    `}
    ${props => props.subitems && `
        flex: 2;
        margin-left: 1.5rem;
    `}
`
export const AccordCheck = styled.input.attrs({ type: 'checkbox' })`
    display: block;
    width: 1.1rem;
    height: 1.34rem;
    margin: 0;
    padding: 0;

    &:hover {
        cursor: pointer;
    }
    ${props => props.subitems && `
        flex: 1;
        width: 0.8rem;
        height: 0.8rem;
    `}
`
export const AccordButton = styled.button`
    flex: 3;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: rgb(132, 177, 231);
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 1.22rem;
    padding-left: 3rem;
    width: 100%;    
    text-align: left;
    border: none;
    outline: none;    
    transition: 0.4s;

    &:hover {
        background-color: rgb(100, 155, 223);
    }

    &:hover + ${AccordBlock} {
        background-color: rgb(100, 155, 223);
    }
`


