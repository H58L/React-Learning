import React, { ReactNode } from 'react'

//making it dynamic by using props
interface Props_Alert {
    children: ReactNode;
}

const Alert = ({children}: Props_Alert) => {
  return (
    <div className = "alert alert-primary">
      {children}
    </div>
  )
}

export default Alert;
