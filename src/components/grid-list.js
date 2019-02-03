import React from 'react';
import {Buttons} from '../components/styled-comps'

const GridList = (props) => {
    const renderGridButton = () => {
        let classList = false
        let classGrid = false       
        
        if (props.state === 'list') {
            classList = true
        } else if (props.state === 'grid') {
            classGrid = true
        }

        return <React.Fragment>
            <Buttons onClick={()=> props.list()}
                active={classList}>
                <i className="fa fa-bars"></i>
                List
            </Buttons>
            <Buttons onClick={()=> props.grid()}
                active={classGrid}
            >
                <i className="fa fa-th-large"></i>
                Grid
            </Buttons>
        </React.Fragment>
    }

    return (
        <div className='gridbtn'>
            {renderGridButton()}
        </div>
    )
}

export default GridList