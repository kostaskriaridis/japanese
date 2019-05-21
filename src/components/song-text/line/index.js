import React, { memo } from 'react';

function Line({ children }) {
    return (
        <div>{children}</div>
    );
}

export default memo(Line);
