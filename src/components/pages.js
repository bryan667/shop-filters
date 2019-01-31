import React from 'react';

const Pages = (props)=> {

    //classify each item block based on type
    const renderItems = () => {
        const renderMe = []
        for (let key in props.items) {
            switch(key) {
                case 'Processor':
                    props.items[key].forEach((item)=> (
                        renderMe.push(
                            <div className={`itemblock`} key={item.name+item.id}>
                                <div>Processor</div>
                                <div>Name: {item.name}</div>
                                <div>Brand: {item.brand}</div>
                                {item.brand === 'Intel' ? 
                                    <div className='intelpic'></div>
                                    :
                                    <div className='amdpic'></div>
                                }
                            </div>
                        )
                    ))                    
                  break;
                case 'Motherboard':
                    props.items[key].forEach((item)=> (
                        renderMe.push(
                            <div className={`itemblock`} key={item.name+item.id}>
                                <div>Motherboard</div>
                                <div>Name: {item.name}</div>
                                <div>Brand: {item.brand}</div>
                                <div>Socket: {item.socketID}</div>
                                <div className='mobopic'></div>
                            </div>
                        )
                    ))
                  break;
                case 'Memory':
                    props.items[key].map((item)=> (
                        renderMe.push(
                        <div className={`itemblock`} key={item.name+item.id}>
                            <div>Memory</div>
                            <div>Name: {item.name}</div>
                            <div>Brand: {item.brand}</div>
                            <div className='mempic'></div>
                        </div>
                        )  
                    ))
                  break;
                default:
                    return null
              }
        }
        const blocks = pageBlocks(renderMe)                       
        return blocks
    }

    const pageBlocks = (renderMe) => {
        const pageBlocks = []
        let blockCount = 0
        let pageCount = 0
        let pageSize = props.paginate.pageSize
        let activePage = props.paginate.currentPage

        renderMe.forEach((item, index)=> {
            blockCount++
            if (blockCount === pageSize) {
                pageCount++
                blockCount = 0
                let tempClass = 'inactive'
                //if this pageGroup is the activePage, apply className .pageactive
                if (pageCount === activePage) {tempClass = 'active'}

                pageBlocks.push(
                    <div className={`page${tempClass} ${props.gridList}`} key={`page${pageCount}`}>
                        {page(renderMe, index, pageSize)}
                    </div>
                )
            //rendering the last page
            } else if (index === (renderMe.length-1)) {
                pageCount++
                let tempClass = 'inactive'
                if (pageCount === activePage) {tempClass = 'active'}

                pageBlocks.push(
                    <div className={`page${tempClass} ${props.gridList}`} key={`page${pageCount}`}>
                        {lastPage(renderMe, index, blockCount)}
                    </div>
                )
                }
            })
        return pageBlocks
    }

    //render normal pages and then last page
    const page = (renderMe, index, pageSize) => {
        const tempArr = []    
        for (let i=0 ;i<pageSize ;i++) {
            tempArr.unshift(renderMe[index-i])
        }
        return tempArr
    }

    const lastPage = (renderMe, index, blockCount) => {
        const tempArr = []        
        for (let i=0 ;i<blockCount ;i++) {
            tempArr.unshift(renderMe[index-i])
        }
        return tempArr
    }

    return (
            <div>
                {renderItems()}
            </div>
    )
}

export default Pages;