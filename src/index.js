import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {itemsFilters, itemsForSale} from './vars'
import Accordion from './accordion'

class App extends Component {

    state = {
        filters: {
            Processor: {
                brands: []
            },
            Motherboard:{
                brands: []
            },
            Memory:{
                brands: [],
                RAMsize: []
            }
        }
    }

    handleFilters = (filters, category) => {
        const newFilters = {...this.state.filters}
        newFilters[category] = filters

        this.showFilteredResults(newFilters)

        this.setState({
            filters: newFilters
        })
    }

    render() {
      return (
        <div>
            <Accordion
                name={'Processor'}
                category={itemsFilters.Processor}
                handleFilters={(filters)=> this.handleFilters(filters,'Processor')}
            />
            <Accordion
                name={'Motherboard'}
                category={itemsFilters.Motherboard}
                handleFilters={(filters)=> this.handleFilters(filters,'Motherboard')}
            />
            <Accordion
                name={'Memory'}
                category={itemsFilters.Memory}
                handleFilters={(filters)=> this.handleFilters(filters,'Memory')}    
            />
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
