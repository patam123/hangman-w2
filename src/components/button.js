import React from 'react';

const Button = ({onClick, text, disabled, className}) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{text}</button>
        )
}

export default Button;