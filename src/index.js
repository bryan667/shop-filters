import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pages from './pages'
import PageButtons from './pagebuttons'
import {Paginate} from './paginate'
import {showFilteredResults} from './function'
import {itemsFilters, itemsForSaleMain} from './vars'
import Accordion from './accordion'

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
            endPage: 3,
            pageSize: 5,
            pages: [1, 2, 3],
            startIndex: 0,
            startPage: 1,
            totalItems: 11,
            totalPages: 3,
        }
    }

    componentDidMount() {
        let totalItems = 0
        for (let key in itemsForSaleMain) {
            totalItems = totalItems + itemsForSaleMain[key].length
        }
        const paginateResults = Paginate(totalItems, 1, 5 /*Pagesize*/, 5)

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
        let totalItems = 0

        for (let key in tempItemSale) {
            if (tempShow[key] === false) {
                tempItemSale[key] = []
            }
            totalItems = totalItems + tempItemSale[key].length
        }
        tempShow.items = tempItemSale
        const paginateResults = Paginate(totalItems, 1, 5, 5)
        
        this.setState({            
            showItems: tempShow,
            paginate: paginateResults
        }) 
    }

    changePage =(page)=> {
        const paginate = this.state.paginate
        paginate.currentPage = parseInt(page)

        this.setState({
            paginate
        })
    }

    render() {
        const {showItems} = this.state
        return (
        <div>
            {console.log(this.state.paginate)}
            <div className='cont'>
                <div>
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
                </div>
                <div>
                    <Pages  
                        items={showItems.items}
                        paginate={this.state.paginate}
                    />
                </div>
                <div>
                    <PageButtons 
                        paginate={this.state.paginate}
                        changePage={(page)=> this.changePage(page)}
                    />
                </div>
            </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
