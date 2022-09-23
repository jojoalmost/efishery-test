import React from "react";
import './Alert.scss';

const ErrorMessage = ({error}) => {
    if (!error) return null;
    let message = '';
    if (typeof message !== 'string') {
        message = JSON.stringify(message);
    }
    return (
        <div className='alert'>{message}</div>
    )
};
export default ErrorMessage;