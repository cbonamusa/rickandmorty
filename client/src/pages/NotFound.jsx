import { white } from 'color-name'
import React from 'react'


/**
 * Component Page NotFound
 * @component
 * @example
 *  <NotFound /> 
 */
const NotFound = () => {
  return (
    <div style={notFoundStyles}>
        <h1  style={notFoundStyles.h1}>404</h1>
        <p style={{color:'#fccb8f'}}>Page not Found</p>
    </div>
  )
}

const notFoundStyles = {
    fontSize:'80px',
    textAlign: 'center',
    margin:'10vh 0',
    h1: {
      color: '#80002d',
      fontSize:'120px',
    }
}

export default NotFound