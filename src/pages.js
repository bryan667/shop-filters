import React, { Component } from 'react';

class Pages extends Component {
    state = {

    }

    //this.props.paginate.currentPage
    renderItems = () => {
        const renderMe = []
        for (let key in this.props.items) {
            switch(key) {
                case 'Processor':
                    this.props.items[key].forEach((item)=> (
                        renderMe.push(
                            <div className='itemblock' key={item.name+item.id}>
                                <div>Processor</div>
                                <div>Name: {item.name}</div>
                                <div>Brand: {item.brand}</div>
                            </div>
                        )
                    ))                    
                  break;
                case 'Motherboard':
                    this.props.items[key].forEach((item)=> (
                        renderMe.push(
                            <div className='itemblock' key={item.name+item.id}>
                                <div>Motherboard</div>
                                <div>Name: {item.name}</div>
                                <div>Brand: {item.brand}</div>
                                <div>Socket: {item.socketID}</div>
                            </div>
                        )
                    ))
                  break;
                case 'Memory':
                    this.props.items[key].map((item)=> (
                        renderMe.push(
                        <div className='itemblock' key={item.name+item.id}>
                            <div>Memory</div>
                            <div>Name: {item.name}</div>
                            <div>Brand: {item.brand}</div>
                        </div>
                        )  
                    ))
                  break;
                default:
                    return null
              }
        }
        const pageBlocks = this.pageBlocks(renderMe)                       
        return pageBlocks
    }

    pageBlocks = (renderMe) => {
        const pageBlocks = []
        let blockCount = 0
        let pageCount = 0
        let pageSize = this.props.paginate.pageSize
        let activePage = this.props.paginate.currentPage

        renderMe.forEach((item, index)=> {
            blockCount++
            if (index % pageSize === 0 && index !== 0) {
                pageCount++
                blockCount = blockCount - pageSize

                //if this pageBlock is the activePage, apply className .pageactive
                if (pageCount === activePage) {
                    pageBlocks.push(
                        <div className={`.pageactive`} key={`page${pageCount}`}>
                            Aw
                            {this.page(renderMe, index, pageSize)}
                        </div>
                    )
                } else {
                    pageBlocks.push(
                        <div className={`.pageinactive`} key={`page${pageCount}`}>
                            Aw
                            {this.page(renderMe, index, pageSize)}
                        </div>
                    )
                }


            } else if (index === (renderMe.length-1)) {
                pageCount++
                pageBlocks.push(
                    <div className={`page${pageCount}`} key={`page${pageCount}`}>
                        Awlast
                        {this.lastPage(blockCount, renderMe, index)}
                    </div>
                )
            }
        })
        return pageBlocks
    }

    page = (renderMe, index, pageCount) => {
        const tempArr = []    
        for (let i=pageCount ;i>0 ;i--) {
            tempArr.push(renderMe[index-i])
        }
        return tempArr
    }

    lastPage = (blockCount, renderMe, index) => {
        const tempArr = []        
        for(let i=blockCount; i>0; i--){
            tempArr.push(renderMe[(index+1)-i])
        }
        return tempArr
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Pages;