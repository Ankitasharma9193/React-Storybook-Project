import React from 'react';
import './input.css';

const Input = (props) => {
    const {size, children, ...rest} = props
  return (
    <input size = {`input ${size}`} {...rest} />
       
  )
}

export default Input;