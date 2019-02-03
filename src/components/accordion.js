import React, { Component } from 'react';
import {AccordBlock, AccordButton, AccordCheck} from '../components/styled-comps'

class Accordion extends Component {

    state = {
        maxHeight: 0,
        checked: []
    }

    clickAccordion = () => {
        const panel = document.getElementById(this.props.name)

        if (this.state.maxHeight) {
            this.setState ({
                maxHeight: null,
            })
        } else {
            this.setState ({
                maxHeight: `${panel.scrollHeight}px`,
            })
        }
    }

    toggleCheck = (subcategory, id) => {        
        const { checked } = this.state
        const currentIndex = checked.indexOf(id)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({
            checked: newChecked
        }, () => {
            this.props.handleFilters(id, subcategory)
        })
    }

    renderCheckboxes = (category) => {
        const render = []        
        for (let subcategory in category) {
            render.push(<AccordBlock subcatLabel key={subcategory}>{subcategory}</AccordBlock>)

            category[subcategory].forEach((items, i)=> (
                render.push(
                    <AccordBlock key={`${items.id}`} checkcont>
                        <AccordBlock subitems>
                            {items.name}
                        </AccordBlock>
                        <AccordCheck
                            subitems
                            type='checkbox'
                            name={items.id} 
                            checked={this.state.checked.indexOf(items.id) !== -1}
                            onChange={()=> this.toggleCheck(items.subcat, items.id)}
                        />
                    </AccordBlock>
                )
            ))
        }
        return render
    }

    render() {
        const {name, category} = this.props
        return (
            <React.Fragment>
                    <AccordBlock>
                        <AccordButton onClick={() => this.clickAccordion()}>
                            {name}
                        </AccordButton>
                        <AccordBlock accord>
                            <AccordCheck 
                                defaultChecked={true}
                                onChange={()=> {
                                    this.Accordchecked = !this.Accordchecked
                                    this.props.showAll(!this.Accordchecked)
                                }}
                            />
                        </AccordBlock>
                    </AccordBlock>
                    <AccordBlock 
                        panelItems
                        id={name}
                        style={{maxHeight: this.state.maxHeight}}
                    >
                        {this.renderCheckboxes(category)}
                    </AccordBlock>
            </React.Fragment>
        )
    }
}

export default Accordion;