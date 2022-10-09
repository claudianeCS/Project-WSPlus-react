import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button({to, text}) {
  return (
    <Link className='btn1' to={to}>{text}</Link>
  )
}

export default Button