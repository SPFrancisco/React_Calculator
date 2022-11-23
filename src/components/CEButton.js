import React, { Component } from 'react';
import './CEButton.css';

class CEButton extends Component {

    render() {
        return (
            <div className="ce-btn" 
            onClick={() => this.props.handleClear() }>
                {this.props.children}
            </div>
        );
    }
}

export default CEButton;
