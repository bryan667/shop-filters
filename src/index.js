import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pages from './components/pages'
import PageButtons from './components/pagebuttons'
import Accordion from './components/accordion'
import GridList from './components/grid-list'
import {Container, Child, ButtonGroup} from './components/styled-comps'

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

    renderAccordion = () => {
        const tempArr = []
        for(let key in itemsFilters){
            tempArr.push(
            <Accordion
                name={key}
                key={key}
                category={itemsFilters[key]}
                handleFilters={(id, subcat)=> this.handleFilters(id, subcat, key)}
                showAll={(boolean)=> this.showAll(boolean, key)}/>
            )
        }
        return tempArr
    }

    render() {
        const {showItems} = this.state
        return (
        <Container>
            <Child left>
                {this.renderAccordion()}
            </Child>
            <Child right>
                <ButtonGroup>
                    <GridList 
                        list={()=> this.list()}
                        grid={()=> this.grid()}
                        state={this.state.gridList}
                    />
                    <PageButtons 
                        paginate={this.state.paginate}
                        changePage={(page)=> this.changePage(page)}
                        leftB={()=> this.leftB() }
                        rightB={()=> this.rightB()}
                    />
                    <div>
                        {`Results: ${this.state.paginate.totalItems}  `}
                        {`Showing: ${this.state.paginate.pageSize} items per page`}
                    </div>
                </ButtonGroup>
                <Pages  
                    items={showItems.items}
                    paginate={this.state.paginate}
                    gridList={this.state.gridList}
                />
            </Child>
        </Container>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
