import React, { memo } from 'react';
import './link.css';

function Link({ href, target, children }) {
    return (
        <a href={href} className='link' target={target}>
            {children}
        </a>
    );
}

export default memo(Link);
