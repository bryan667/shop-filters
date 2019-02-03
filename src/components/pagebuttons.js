import React, { Component } from 'react';
import {Buttons} from '../components/styled-comps' 

class PageButtons extends Component {
    renderButtons = () => {
        const buttons = this.props.paginate.pages.map((item)=> {
            let activeClass = false

            if(item === this.props.paginate.currentPage) {
                activeClass = true
            }
            
            return <Buttons
                        onClick={(e)=> this.props.changePage(parseInt(e.target.id))}
                        id={item}
                        key={item}
                        active={activeClass}
                    >{item}
                    </Buttons>
        })
        return buttons
    }

    render() {
        return (
            <div>
                <Buttons
                    onClick={()=> this.props.leftB()}
                >&lt;
                </Buttons>
                    {this.renderButtons()}
                <Buttons
                    onClick={()=> this.props.rightB()}
                >&gt;
                </Buttons>
            </div>
        );
    }
}

export default PageButtons