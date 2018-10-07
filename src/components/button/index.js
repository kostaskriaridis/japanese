import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './button.css';

export default class Button extends PureComponent {
    render() {
        const { disabled, active, children, onClick } = this.props;
        const className = classNames('button', {
            button_active: active
        });

        return (
            <button
                className={className}
                disabled={disabled}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}
