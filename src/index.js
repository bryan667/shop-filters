import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Pages from './pages'
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
        }
    }

    componentDidMount() {
        this.setState({
            itemsForSale: itemsForSaleMain,
            showItems: {
                Processor: true,
                Motherboard: true,
                Memory: true,
                items: itemsForSaleMain
            }
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

        for (let key in tempItemSale) {
            if (tempShow[key] === false) {
                tempItemSale[key] = []
            }
        }

        tempShow.items = tempItemSale
        this.setState({            
            showItems: tempShow
        }) 
    }

    render() {
        const {showItems} = this.state
        return (
        <div>
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
                    />
                </div>
            </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
