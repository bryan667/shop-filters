import React from 'react';
import {PageContainer, ItemBlock, ItemDetails, PicAndDesc, Pics, Descript} from '../components/styled-comps'

const Pages = (props)=> {
    //classify each item block based on type
    const renderItems = () => {
        const renderMe = []
        for (let key in props.items) {
            switch(key) {
                case 'Processor':
                    props.items[key].forEach((item)=> (
                        renderMe.push(
                            <ItemBlock key={item.name+item.id}>
                                <ItemDetails>
                                    Processor<br/>
                                    Name: {item.name}<br/>
                                    Brand: {item.brand}<br/>
                                </ItemDetails>
                                <PicAndDesc>
                                    {item.brand === 'Intel' ? 
                                        <Pics img='intel.jpg'></Pics>
                                        :
                                        <Pics img='amd.jpg'></Pics>
                                    }
                                    <Descript grid={props.gridList}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Descript>
                                </PicAndDesc>
                            </ItemBlock>
                        )
                    ))                    
                  break;
                case 'Motherboard':
                    props.items[key].forEach((item)=> (
                        renderMe.push(
                            <ItemBlock key={item.name+item.id}>
                                <ItemDetails>
                                    Motherboard<br/>
                                    Name: {item.name}<br/>
                                    Brand: {item.brand}<br/>
                                    Socket: {item.socketID}<br/>
                                </ItemDetails>
                                <PicAndDesc>
                                    <Pics img='mobo.jpg'></Pics>
                                    <Descript grid={props.gridList}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Descript>
                                </PicAndDesc>
                            </ItemBlock>
                        )
                    ))
                  break;
                case 'Memory':
                    props.items[key].map((item)=> (
                        renderMe.push(
                            <ItemBlock key={item.name+item.id}>
                                <ItemDetails>
                                    Memory<br/>
                                    Name: {item.name}<br/>
                                    Brand: {item.brand}<br/>
                                </ItemDetails>
                                <PicAndDesc>
                                    <Pics img='memory.jpg'></Pics>
                                    <Descript grid={props.gridList}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Descript>
                                </PicAndDesc>
                            </ItemBlock>
                        )  
                    ))
                  break;
                case 'GraphicsCard':
                    props.items[key].map((item)=> (
                        renderMe.push(
                            <ItemBlock key={item.name+item.id}>
                                <ItemDetails>
                                    GraphicsCard<br/>
                                    Name: {item.name}<br/>
                                    Brand: {item.brand}<br/>
                                </ItemDetails>
                                <PicAndDesc>
                                    {item.gpuID === 'gfxNVIDIA' ? 
                                        <Pics img='nvidia.jpg'></Pics>
                                        :
                                        <Pics img='amdgpu.jpg'></Pics>
                                    }
                                    <Descript grid={props.gridList}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Descript>
                                </PicAndDesc>
                            </ItemBlock>
                        )  
                    ))
                break;
                case 'HardDrive':
                    props.items[key].map((item)=> (
                        renderMe.push(
                            <ItemBlock key={item.name+item.id}>
                                <ItemDetails>
                                    HardDrive<br/>
                                    Name: {item.name}<br/>
                                    Brand: {item.brand}<br/>
                                    Type: {item.type}
                                </ItemDetails>
                                <PicAndDesc>
                                    {item.hdType === 'hdHDD' ? 
                                        <Pics img='hdd.jpg'></Pics>
                                        :
                                        <Pics img='ssd.jpg'></Pics>
                                    }
                                    <Descript grid={props.gridList}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Descript>
                                </PicAndDesc>
                            </ItemBlock>
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
                let tempClass = false
                //if this pageGroup is the activePage, apply className .pageactive
                if (pageCount === activePage) {tempClass = true}

                pageBlocks.push(
                    <PageContainer 
                        active={tempClass}
                        grid={props.gridList}
                        key={`page${pageCount}`}
                    >
                        {page(renderMe, index, pageSize)}
                    </PageContainer>
                )
            //rendering the last page
            } else if (index === (renderMe.length-1)) {
                pageCount++
                let tempClass = false
                if (pageCount === activePage) {tempClass = true}

                pageBlocks.push(
                    <PageContainer 
                        active={tempClass}
                        grid={props.gridList}
                        key={`page${pageCount}`}
                    >
                        {lastPage(renderMe, index, blockCount)}
                    </PageContainer>
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
            <React.Fragment>
                {renderItems()}
            </React.Fragment>
    )
}

export default Pages;