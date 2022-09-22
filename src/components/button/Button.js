import React from "react";
import './Button.scss'

const Button = ({children, className, loading, ...props}) => {
    if (loading) return (
        <button {...props} className={`button ${className}`}><div className="loading" />{children}</button>
    )
    return (
        <button {...props} className={`button ${className}`}>{children}</button>
    )
};

export default Button;
