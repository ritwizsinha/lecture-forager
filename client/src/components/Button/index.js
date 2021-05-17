import React from 'react';

import './index.css';

function ButtonUI({
    text,
    textColor,
    backgroundColor,
    icon,
    width
}) {
    return (
        <div>
            <button className="m-1 p-2 lf_button" style={{
                color: textColor,
                background: backgroundColor,
                width: width
            }}>
                {text}
            </button>
        </div>
    )

}

export default ButtonUI;