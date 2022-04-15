import { white } from 'color-name'
import React from 'react'

const NotFound = () => {
  return (
    <div style={notFoundStyles}>
        <h1 >404</h1>
        <p style={{color:'#fccb8f'}}>Page not Found</p>
    </div>
  )
}

const notFoundStyles = {
    color: '#80002d',
    fontSize:'80px',
    textAlign: 'center',
    margin:'10vh 0'
}

export default NotFound