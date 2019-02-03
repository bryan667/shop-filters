import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-size: 0.9rem;
    font-family: "Lato", "Times New Roman";
`
export const Child = styled.div`
    ${props => props.left ? `
        flex: 1
        margin-right:0.5rem; 
    ` : 
    `flex: 3`}
`

export const Results = styled.div`
    display: flex;
    width: 25rem;
    ${props => props.child && `
        margin: 0.5rem;
        flex: 1;`
    }
`

// ============ BUTTONS ============ //

export const ButtonGroup = styled.div`
    height: 3.5rem; 
    display: flex;
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

    ${props => props.marginRight && `
        margin-right: 1rem;`
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

// ============ ITEMS ============ //


export const PageContainer = styled.div `
    flex-wrap: wrap;

    ${props => props.active ? `
        display: flex;` 
        :        
        'display: none;'
    }

    ${props => props.grid==='grid' ? `
        flex-direction: row;`
        :        
        'flex-direction: column;'
    }
`
export const ItemBlock = styled.div `
    background-color: rgb(240, 240, 240);
    border: 0.25rem solid white;
    flex-basis: 25%;
    padding: 1rem;
`

export const ItemDetails = styled.div `
`

export const PicAndDesc = styled.div `
    display: flex;
    font-size: 0.8rem;
    height: 13rem;
    text-align: justify;
`

export const Pics = styled.div `
    flex: 1;
    height: 80%;
    margin: auto;
    ${props => props.img ? `
        background: url(${process.env.PUBLIC_URL}/images/${props.img}) center no-repeat;
        background-size: contain;
        `
        :
        ''
    }
`

export const Descript = styled.div `
    flex: 2;
    margin-top: 1.5rem;
    margin-left: 1rem;
    ${props => props.grid ==='grid' ? `
    display: none;`
    :
    'display: block;'
}
`