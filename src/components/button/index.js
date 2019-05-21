import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

Button.propTypes = {
    size: PropTypes.oneOf(['s', 'm']),
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};

Button.defaultProps = {
    size: 'm'
};

function Button({ className, size, disabled, active, children, onClick }) {
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

export default memo(Button);
