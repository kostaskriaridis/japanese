import React from 'react';
import classNames from 'classnames';
import './icon.css';

export default function Icon({ type, className }) {
    const iconClass = classNames('icon', `icon_${type}`, {
        className: className
    });

    return (
        <i className={iconClass} />
    );
}
