import React from 'react'
import './style.scss'


const ErrorPage = () => {
  return (
    <div className='errorPage'>
       <div className="wrapper">
          <span className="bigText">404</span>
          <span className="smallText">Page not found</span>
       </div>
    </div>
  )
}

export default ErrorPage