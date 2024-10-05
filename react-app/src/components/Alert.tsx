import React from 'react'

//making it dynamic by using props
interface Props_Alert {
    text: string;
}

const Alert = ({text}: Props_Alert) => {
  return (
    <div className = "alert alert-primary">
      {text}
    </div>
  )
}

export default Alert;
