import React from 'react';
import './paragraph.css';

export default function Paragraph({ children }) {
    return (
        <div className='song-paragraph'>
            {children}
        </div>
    );
}
