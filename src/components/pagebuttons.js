import React, { Component } from 'react';

class PageButtons extends Component {
    renderButtons = () => {
        const buttons = this.props.paginate.pages.map((item, i)=> {
            let activeClass = ''
            if(item === this.props.paginate.currentPage) {
                activeClass = 'buttonactive'
            }
            
            return <button
                        onClick={(e)=> this.props.changePage(parseInt(e.target.id))}
                        id={item}
                        key={item}
                        className={activeClass}
                    >{item}
                    </button>
        })
        return buttons
    }

    render() {
        return (
            <div>
                <button
                    onClick={()=> this.props.leftB()}
                >&lt;</button>
                {this.renderButtons()}
                <button
                    onClick={()=> this.props.rightB()}
                >&gt;</button>
            </div>
        );
    }
}

export default PageButtons