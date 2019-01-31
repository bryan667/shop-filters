import React from 'react';

const GridList = (props) => {

    const renderGridButton = () => {
        let classGrid = ''
        let classList = ''        
        
        if (props.state === 'list') {
            classList = 'buttonactive'
        } else if (props.state === 'grid') {
            classGrid = 'buttonactive'
        }

        return <React.Fragment>
            <button onClick={()=> props.list()}
                className={classList}
            >
                <i className="fa fa-bars"></i>
                List
            </button>
            <button onClick={()=> props.grid()}
                className={classGrid}
            >
                <i className="fa fa-th-large"></i>
                Grid
            </button>
        </React.Fragment>
    }

    return (
        <div className='gridbtn'>
            {renderGridButton()}
        </div>
    )
}

export default GridList