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
            <button className="m-1 p-1 lf_button" style={{
                color: textColor,
                background: backgroundColor,
                width: width,
                borderRadius: 5,
            }}>
                {text}
            </button>
        </div>
    )

}

export default ButtonUI;