import React, { useState } from 'react'

function Button({text}) {

    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 750);}
    return (
    <button className={` bubbly-button ${isAnimating ? 'animate' : ''}`} onClick={handleClick}>{text}</button>
    )
}

export default Button