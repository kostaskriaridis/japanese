import React, { memo } from 'react';
import './paragraph.css';

function Paragraph({ children }) {
    return (
        <div className='song-paragraph'>
            {children}
        </div>
    );
}

export default memo(Paragraph);
