import React, { Component } from 'react';



class Pages extends Component {
    state = {
        pageCount: 0,
        pageBlocks:[] 
    }

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
        const pageBlocks = this.pagination(renderMe)
        const pageButtons = this.renderPageButtons(pageBlocks.pageCount)        
        const finalPage = <div>
                            {pageButtons}
                            {pageBlocks.pageBlocks}
                          </div>                          
        return finalPage
    }

    pagination = (renderMe) => {
        const pageBlocks = []
        let blockCount = 0
        let pageCount = 0
        renderMe.forEach((item, index)=> {
            blockCount++
            if (index % 5 === 0 && index !== 0) {
                pageCount++
                blockCount = blockCount -5
                pageBlocks.push(
                    <div className={`page${pageCount}`}>
                        Aw
                        {renderMe[index-5]}
                        {renderMe[index-4]}
                        {renderMe[index-3]}
                        {renderMe[index-2]}
                        {renderMe[index-1]}
                    </div>
                )
            } else if (index === (renderMe.length-1)) {
                pageCount++
                pageBlocks.push(
                    <div className={`page${pageCount}`}>
                        Awlast
                        {this.Awyis(blockCount, renderMe, index)}
                    </div>
                )
            }
        })
        return {pageBlocks, pageCount}
    }

    Awyis = (blockCount, renderMe, index) => {
        const tempArr = []        
        for(let i=blockCount; i>0; i--){
            tempArr.push(renderMe[(index+1)-i])
        }
        return tempArr
    }

    renderPageButtons = (pageCount) => {
        const tempArr = []        
        for(let i=1; i<pageCount+1; i++){
            tempArr.push(
                <button>{i}</button>
            )
        }
        console.log(tempArr, pageCount)
        return tempArr
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Pages;