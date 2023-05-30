import React from 'react'

const Button = ({className, name, method}) => {
    return (
        method?<button type='button' className={className} onClick={method}>{name}</button>:
        <button type='button' className={className}>{name}</button>
    )
}

export default Button
