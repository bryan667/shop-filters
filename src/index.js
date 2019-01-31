import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pages from './components/pages'
import PageButtons from './components/pagebuttons'
import Accordion from './components/accordion'
import GridList from './components/grid-list'

import {showFilteredResults} from './misc/function'
import {Paginate} from './misc/paginate'
import {itemsFilters, itemsForSaleMain} from './misc/vars'

import './css/styles.css'

class App extends Component {
    state = {
        filters: {
            Processor: {
                brandID: [],
            },
            Motherboard:{
                brandID: [],
                socketID: []
            },
            Memory:{
                brandID: [],
                ramID: []
            },
            GraphicsCard:{
                brandID: [],
                gpuID: []
            },
            HardDrive:{
                brandID: [],
                hdType: []
            }
        },
        itemsForSale: {},
        showItems: {
            Processor: true,
            Motherboard: true,
            Memory: true,
            items: {}
        },
        paginate: {            
            currentPage: 1,
            endIndex: 4,
            endPage: 5,
            pageSize: 5,
            pages: [1, 2, 3, 4, 5],
            startIndex: 0,
            startPage: 1,
            totalItems: 47,
            totalPages: 10,
        },
        gridList: 'list'
    }

    componentDidMount() {
        let totalItems = 0
        for (let key in itemsForSaleMain) {
            totalItems = totalItems + itemsForSaleMain[key].length
        }

        //initial Paginate(totalItems, currentPage, pageSize, maxPages)
        const paginateResults = Paginate(totalItems, 1, 5, 5)

        this.setState({
            itemsForSale: itemsForSaleMain,
            showItems: {
                Processor: true,
                Motherboard: true,
                Memory: true,
                items: itemsForSaleMain,
            },
            paginate: paginateResults
        })
    }

    handleFilters = (id, subcat, category) => {
        const newFilters = {...this.state.filters}
        const currentIndex = newFilters[category][subcat].indexOf(id)

        if (currentIndex === -1) {
            newFilters[category][subcat].push(id)
        } else {
            newFilters[category][subcat].splice(currentIndex, 1)
        }

        const newItemSale = showFilteredResults(newFilters, itemsForSaleMain)

        this.setState({
            filters: newFilters,
            itemsForSale: newItemSale
        }, ()=> {
            this.renderShow()
        })
    }

    showAll = (boolean, category) => {
        const tempShow = {...this.state.showItems}
        tempShow[category] = boolean

        this.setState({            
            showItems: tempShow
        },()=> {
            this.renderShow()
        })
    }

    renderShow = () => {
        const tempItemSale = {...this.state.itemsForSale}
        const tempShow = {...this.state.showItems}
        const paginate = {...this.state.paginate}
        let totalItems = 0

        for (let key in tempItemSale) {
            if (tempShow[key] === false) {
                tempItemSale[key] = []
            }
            totalItems = totalItems + tempItemSale[key].length
        }

        tempShow.items = tempItemSale

        //Paginate(totalItems, currentPage, pageSize, maxPages)
        const paginateResults = Paginate(totalItems, 1, paginate.pageSize, 5)
        
        this.setState({
            showItems: tempShow,
            paginate: paginateResults
        }) 
    }

    changePage =(page)=> {
        const paginate = this.state.paginate
        paginate.currentPage = parseInt(page)

        this.setState({paginate})
    }

    leftB =() => {
        const tempPaginate = {...this.state.paginate}
        const paginate = Paginate(tempPaginate.totalItems, 
                            tempPaginate.currentPage-1, 
                            tempPaginate.pageSize, 5)
        this.setState({paginate})
    }

    rightB =() => {
        const tempPaginate = {...this.state.paginate}
        const paginate = Paginate(tempPaginate.totalItems, 
                            tempPaginate.currentPage+1, 
                            tempPaginate.pageSize, 5)
        this.setState({paginate})
    }

    list = () => {
        const tempPaginate = {...this.state.paginate}
        const paginate = Paginate(tempPaginate.totalItems, 
                            tempPaginate.currentPage, 
                            5,
                            5)

        this.setState({ paginate, gridList: 'list'})
    }

    grid = () => {
        const tempPaginate = {...this.state.paginate}
        const paginate = Paginate(tempPaginate.totalItems, 
                            tempPaginate.currentPage, 
                            12,
                            5)
        this.setState({ paginate, gridList: 'grid'})
    }

    render() {
        const {showItems} = this.state
        return (
        <div>
            <div className='cont'>
                <div className='left'>
                    <Accordion
                        name={'Processor'}
                        category={itemsFilters.Processor}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Processor')}
                        showAll={(boolean)=> this.showAll(boolean, 'Processor')}
                    />
                    <Accordion
                        name={'Motherboard'}
                        category={itemsFilters.Motherboard}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Motherboard')}
                        showAll={(boolean)=> this.showAll(boolean, 'Motherboard')}
                    />
                    <Accordion
                        name={'Memory'}
                        category={itemsFilters.Memory}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Memory')}    
                        showAll={(boolean)=> this.showAll(boolean, 'Memory')}
                    />
                    <Accordion
                        name={'GraphicsCard'}
                        category={itemsFilters.GraphicsCard}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'GraphicsCard')}    
                        showAll={(boolean)=> this.showAll(boolean, 'GraphicsCard')}
                    />
                    <Accordion
                        name={'HardDrive'}
                        category={itemsFilters.HardDrive}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'HardDrive')}    
                        showAll={(boolean)=> this.showAll(boolean, 'HardDrive')}
                    />
                </div>
                <div className='right'>
                    <div className='buttongrp'>
                        <div>
                            <GridList 
                                list={()=> this.list()}
                                grid={()=> this.grid()}
                                state={this.state.gridList}
                            />
                        </div>
                        <div>
                            <PageButtons 
                                paginate={this.state.paginate}
                                changePage={(page)=> this.changePage(page)}
                                leftB={()=> this.leftB() }
                                rightB={()=> this.rightB()}
                            />
                        </div>
                        <div className='results'>
                            <div>
                                {`Results: ${this.state.paginate.totalItems}`}
                            </div>
                            <div>
                                {`Showing: ${this.state.paginate.pageSize} items per page`}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Pages  
                            items={showItems.items}
                            paginate={this.state.paginate}
                            gridList={this.state.gridList}
                        />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
