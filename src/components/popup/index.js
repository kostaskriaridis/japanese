import React, { PureComponent } from 'react';
import './popup.css';

const ESC_KEY = 27;

export default class Popup extends PureComponent {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className='popup'>
                <button
                    className='popup-close'
                    onClick={this.props.onClose} />
                <div className='popup-inner'>
                    {this.props.children}
                </div>
            </div>
        );
    }

    handleKeyDown = event => {
        if (event.keyCode === ESC_KEY) {
            this.props.onClose();
        }
    };
}
