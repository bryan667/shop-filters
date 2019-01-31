import React from 'react';

const GridList = (props) => {
    return (
        <div>
            <button onClick={()=> props.list()}>
                <i className="fa fa-bars"></i>
                List
            </button>
            <button onClick={()=> props.grid()}>
                <i className="fa fa-th-large"></i>
                Grid
            </button>
        </div>
    )
}

export default GridList