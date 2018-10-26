import React from 'react';
import './link.css';

export default function Link({ href, target, children }) {
    return (
        <a href={href} className='link' target={target}>
            {children}
        </a>
    );
}
