import React, { Component } from 'react';

class Pages extends Component {
    state = {

    }

    //classify each item block based on type
    renderItems = () => {
        const renderMe = []
        for (let key in this.props.items) {
            switch(key) {
                case 'Processor':
                    this.props.items[key].forEach((item)=> (
                        renderMe.push(
                            <div className={`itemblock ${this.props.gridList}`} key={item.name+item.id}>
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
                            <div className={`itemblock ${this.props.gridList}`} key={item.name+item.id}>
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
                        <div className={`itemblock ${this.props.gridList}`} key={item.name+item.id}>
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
            if (blockCount === 5) {
                pageCount++
                blockCount = 0
                //if this pageGroup is the currentPage, apply className .pageactive
                if (pageCount === activePage) {
                    pageBlocks.push(
                        <div className={`pageactive`} key={`page${pageCount}`}>
                            Aw
                            {this.page(renderMe, index, pageSize)}
                        </div>
                    )
                } else {
                    pageBlocks.push(
                        <div className={`pageinactive`} key={`page${pageCount}`}>
                            Aw
                            {this.page(renderMe, index, pageSize)}
                        </div>
                    )
                }
            //rendering the last page
            } else if (index === (renderMe.length-1)) {
                pageCount++
                if (pageCount === activePage) {
                    pageBlocks.push(
                        <div className={`pageactive`} key={`page${pageCount}`}>
                        Awlast
                        {this.lastPage(renderMe, index, blockCount)}
                        </div>
                    )
                } else {
                    pageBlocks.push(
                        <div className={`pageinactive`} key={`page${pageCount}`}>
                        Awlast
                        {this.lastPage(renderMe, index, blockCount)}
                        </div>
                    )
                }
            }
        })
        return pageBlocks
    }

    //render normal pages and then last page
    page = (renderMe, index, pageSize) => {
        const tempArr = []    
        for (let i=0 ;i<pageSize ;i++) {
            tempArr.unshift(renderMe[index-i])
        }
        return tempArr
    }

    lastPage = (renderMe, index, blockCount) => {
        const tempArr = []        
        for (let i=0 ;i<blockCount ;i++) {
            tempArr.unshift(renderMe[index-i])
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