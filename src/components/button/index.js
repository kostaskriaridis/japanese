import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

export default class Button extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        active: PropTypes.bool
    };

    render() {
        const { className, disabled, active, children, onClick } = this.props;
        const buttonClass = classNames('button', {
            [className]: className,
            button_active: active
        });

        return (
            <button
                className={buttonClass}
                disabled={disabled}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}
