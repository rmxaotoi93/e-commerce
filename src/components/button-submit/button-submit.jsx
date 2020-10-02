import React from 'react'
import '../button-submit/button-submit.scss'


const ButtonSubmit = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default ButtonSubmit;
