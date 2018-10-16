import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

export default class Button extends PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(['s', 'm']),
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        active: PropTypes.bool
    };

    static defaultProps = {
        size: 'm'
    };

    render() {
        const { className, size, disabled, active, children, onClick } = this.props;
        const buttonClass = classNames('button', {
            [className]: className,
            [`button_${size}`]: size,
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
