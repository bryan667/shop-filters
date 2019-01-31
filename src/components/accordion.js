import React, { Component } from 'react';

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
            render.push(<div className='label' key={subcategory}>{subcategory}</div>)

            category[subcategory].forEach((items, i)=> (
                render.push(
                <div className='chckcont'>
                    <div key={`${items.id}`}>
                        {items.name}
                    </div>
                    <input type='checkbox'
                    name={items.id} 
                    checked={this.state.checked.indexOf(items.id) !== -1}
                    onChange={()=> this.toggleCheck(items.subcat, items.id)}
                    />
                </div>
                )
            ))
        }
        return render
    }

    render() {
        const {name, category} = this.props
        return (
        <React.Fragment>
                <div className='accordblck'>
                    <button className="accordion" 
                        onClick={() => this.clickAccordion()}>
                        {name}
                    </button>
                    <div className='showall'>
                        <input type='checkbox'
                            defaultChecked={true}
                            onChange={()=> {
                                this.checked = !this.checked
                                this.props.showAll(!this.checked)
                            }}
                        />
                    </div>
                </div>
                <div className="panel"
                    id={name}
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