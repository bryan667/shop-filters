import React, { Component } from 'react';
import './css/accordion.css'

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

    renderCheckboxes = (category) => {
        const render = []        
        for (let subcategory in category) {
            render.push(<div className='label' key={subcategory}>{subcategory}</div>)

            category[subcategory].forEach((items, i)=> (
                render.push(
                <div key={`${items.id}`}>
                    {items.name}
                    <input type='checkbox'
                        name={items.id} 
                        checked={this.state.checked.map(function(e) { return e.id }).indexOf(items.id) !== -1}
                        onChange={()=> this.toggleCheck(subcategory, items.id)}
                    />
                </div>
                )
            ))
        }
        return render
    }

    toggleCheck = (subcategory, id) => {        
        const { checked } = this.state
        const currentIndex = checked.map(function(e) { return e.id }).indexOf(id)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push({subcategory, id})
        } else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({
            checked: newChecked
        }, () => {
            console.log(this.state.checked)
        })
    }

    render() {
        const {name, category} = this.props
        return (
        <React.Fragment>
            <button className="accordion" 
                onClick={() => this.clickAccordion()}>{name}
            </button>
                <div className="panel"
                    id={this.props.name}
                    style={{
                        display: this.state.display,
                        maxHeight: this.state.maxHeight                     
                    }}
                >
                    {this.renderCheckboxes(category)}
                </div>
        </React.Fragment>
        )
    }
}

export default Accordion;