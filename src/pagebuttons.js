import React, { Component } from 'react';

class PageButtons extends Component {
    state = {
        currentPage: 1
    }

    componentDidMount(){
        this.setState({
            currentPage: this.props.paginate.currentPage
        })
    }

    changePage = (event) => {
        this.setState({
            currentPage: parseInt(event.target.id)
        }, ()=> {
            this.props.changePage(this.state.currentPage)
        })
    }

    renderButtons = () => (
        this.props.paginate.pages.map((item, i)=> (
            <button
                onClick={(e)=> this.changePage(e)}
                id={item}
                key={item}
            >{item}</button>
        ))
    )

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}

export default PageButtons