import React from 'react';
import {Buttons} from '../components/styled-comps'

const GridList = (props) => {
    let activeButton = []

    const readProps = () => {
        if (props.state === 'list') {
            activeButton[0] = true
            activeButton[1] = false
        } else {
            activeButton[0] = false
            activeButton[1] = true
        } 
    }

    return (
        <React.Fragment>
            {readProps()}
            <Buttons onClick={()=> props.list()}
                active={activeButton[0]}>
                <i className="fa fa-bars"></i>
                List
            </Buttons>
            <Buttons onClick={()=> props.grid()}
                active={activeButton[1]}
                marginRight
            >
                <i className="fa fa-th-large"></i>
                Grid
            </Buttons>
        </React.Fragment>
    )
}

export default GridList