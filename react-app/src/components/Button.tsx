import React, { ReactNode } from 'react'

interface Button_Props{
    children: string;
    color?: 'primary'|'secondary'|'danger'|'success'; //color is potional
    onClick: () => void; //a function woth no parameters that returns void
  }
    
const Button = ({children, onClick, color = 'primary'} : Button_Props) => {  //setting defualt color as primary
  return (
    <>
    <button className={'btn btn-'+color} onClick={onClick}>
      {children}
    </button>
    {/* <button className='btn btn-secondary'>
      {chlidren1}
    </button> */}
    </>
    
  )
}

export default Button;
