import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {showFilteredResults} from './function'
import {itemsFilters, itemsForSale} from './vars'
import Accordion from './accordion'

import './css/styles.css'

class App extends Component {

    state = {
        filters: {
            Processor: {
                brandID: []
            },
            Motherboard:{
                brandID: []
            },
            Memory:{
                brandID: [],
                ramID: []
            }
        },
        itemsForSale: {

        }
    }

    componentDidMount() {
        this.setState({
            itemsForSale: itemsForSale
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

        showFilteredResults(newFilters, itemsForSale)

        this.setState({
            filters: newFilters
        })
    }

    render() {
        const {itemsForSale} = this.state
        return (
        <div>
            <div className='cont'>
                <div>
                    <Accordion
                        name={'Processor'}
                        category={itemsFilters.Processor}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Processor')}
                    />
                    <Accordion
                        name={'Motherboard'}
                        category={itemsFilters.Motherboard}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Motherboard')}
                    />
                    <Accordion
                        name={'Memory'}
                        category={itemsFilters.Memory}
                        handleFilters={(id, subcat)=> this.handleFilters(id, subcat, 'Memory')}    
                    />
                </div>
                <div>
                    <textarea className='textarea'
                        value={JSON.stringify(itemsForSale, null ,1)}
                        readOnly
                    ></textarea>
                </div>
            </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
