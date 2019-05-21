import React, { memo } from 'react';
import classNames from 'classnames';
import './icon.css';

function Icon({ type, className }) {
    const iconClass = classNames('icon', `icon_${type}`, {
        className: className
    });

    return (
        <i className={iconClass} />
    );
}

export default memo(Icon);
