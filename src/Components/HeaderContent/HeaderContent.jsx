import React from 'react'
import './HeaderContent.css'
import logoimage from '../../assets/react.svg'

function HeaderContent() {
  return (
    <div id="navcontent">
        <img src="vite.svg" alt="vite logo" />
        <img src={logoimage}alt="react logo" />
        
  </div>
  )
}

export default HeaderContent