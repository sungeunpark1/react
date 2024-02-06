import React from 'react'
import './Alert.css'
//rafce 함수형컴포넌트 자동으로 만들어주는
const Alert = ({type,text}) => {
  return (
    <div className={`alert alert-${type}`}>{text}</div>
  )
}

export default Alert
