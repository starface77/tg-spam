import React from 'react';
import './style.scss';

const Tooltip = ({ text, children, style }) => {
    const fntop = () => {
        const positedtext = text
        
    }
    return (
        <div style={style} className="tooltip">

            <span className="tooltip-text">{text}</span>
            {children}
        </div>
    );
};

export default Tooltip;